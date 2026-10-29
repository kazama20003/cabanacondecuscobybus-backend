import { Controller, Get, ServiceUnavailableException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IzipayService } from '../../modulos/pagos/aplicacion/izipay.service';

@Controller('operacion')
export class OperacionController {
  constructor(
    private readonly config: ConfigService,
    private readonly izipay: IzipayService,
  ) {}

  @Get('publica')
  publicConfig() {
    const idiomas = this.list('IDIOMAS_SITIO', 'es,en');
    const monedas = this.list('MONEDAS_HABILITADAS', 'PEN,USD');
    const canales = this.list('CANALES_RESERVA', 'ONLINE,WHATSAPP');
    const canalesPorServicio = {
      transportes: this.list('CANALES_RESERVA_TRANSPORTES', canales.join(',')),
      tours: this.list('CANALES_RESERVA_TOURS', canales.join(',')),
      eventos: this.list('CANALES_RESERVA_EVENTOS', canales.join(',')),
    };
    const documentos = {
      terminos: this.url('URL_TERMINOS'),
      privacidad: this.url('URL_PRIVACIDAD'),
      cancelaciones: this.url('URL_CANCELACIONES'),
    };
    const produccion = this.config.get('ENTORNO') === 'produccion';
    const faltantes = [
      ...(!monedas.length || monedas.some((moneda) => !['PEN', 'USD'].includes(moneda))
        ? ['MONEDAS_HABILITADAS (PEN,USD)']
        : []),
      ...(!idiomas.length || idiomas.some((idioma) => !['es', 'en', 'fr', 'it', 'pt', 'zh', 'ja', 'ru', 'de'].includes(idioma))
        ? ['IDIOMAS_SITIO (es,en,fr,it,pt,zh,ja,ru,de)']
        : []),
      ...(Object.entries(canalesPorServicio).some(([, valores]) => !valores.length || valores.some((canal) => !['ONLINE', 'WHATSAPP'].includes(canal)))
        ? ['CANALES_RESERVA (ONLINE,WHATSAPP)']
        : []),
      ...(this.config.get('RESERVA_HOLD_MINUTOS') !== undefined &&
        this.number('RESERVA_HOLD_MINUTOS', 20, 5, 120) !== Number(this.config.get('RESERVA_HOLD_MINUTOS'))
        ? ['RESERVA_HOLD_MINUTOS (5–120)']
        : []),
      ...(!this.config.get('RETENCION_AUDITORIA_DIAS') ||
        !Number.isFinite(Number(this.config.get('RETENCION_AUDITORIA_DIAS'))) ||
        Number(this.config.get('RETENCION_AUDITORIA_DIAS')) < 1 ||
        Number(this.config.get('RETENCION_AUDITORIA_DIAS')) > 3650
        ? ['RETENCION_AUDITORIA_DIAS (1–3650, según política aprobada)']
        : []),
      ...(!this.config.get('DATABASE_URL') ? ['DATABASE_URL'] : []),
      ...(String(this.config.get('JWT_SECRETO', '')).length < 32 ? ['JWT_SECRETO (mínimo 32 caracteres)'] : []),
      ...(!this.url('URL_PUBLICA') || !this.url('URL_PUBLICA')?.startsWith('https://') ? ['URL_PUBLICA (HTTPS)'] : []),
      ...(!this.config.get('CORS_ORIGENES') || this.config.get('CORS_ORIGENES', '').includes('localhost') ? ['CORS_ORIGENES (dominios públicos)'] : []),
      ...(!documentos.terminos ? ['URL_TERMINOS'] : []),
      ...(!documentos.privacidad ? ['URL_PRIVACIDAD'] : []),
      ...(!documentos.cancelaciones ? ['URL_CANCELACIONES'] : []),
      ...(!this.config.get('VERSION_POLITICAS') ? ['VERSION_POLITICAS'] : []),
      ...(Object.values(canalesPorServicio).some((valores) => valores.includes('WHATSAPP')) && !this.config.get('WHATSAPP_RESERVAS') ? ['WHATSAPP_RESERVAS'] : []),
      ...(!this.config.get('GCS_BUCKET_MEDIA')?.trim() ? ['GCS_BUCKET_MEDIA'] : []),
      ...(!this.config.get('RESEND_API_KEY') || !this.config.get('CORREO_REMITENTE') || !this.config.get('CORREO_ADMINISTRADOR')
        ? ['RESEND_API_KEY', 'CORREO_REMITENTE', 'CORREO_ADMINISTRADOR']
        : []),
      ...(this.config.get('DERECHOS_MEDIOS_VERIFICADOS') !== 'true' ? ['DERECHOS_MEDIOS_VERIFICADOS=true'] : []),
      ...(this.config.get('BACKUP_VERIFICADO') !== 'true' ? ['BACKUP_VERIFICADO=true'] : []),
      ...(!this.config.get('MONITOREO_URL') ? ['MONITOREO_URL'] : []),
      ...(Object.values(canalesPorServicio).some((valores) => valores.includes('ONLINE')) && (this.config.get('IZIPAY_HABILITADO', 'true') !== 'true' || !this.izipay.configurado)
        ? ['IZIPAY_HABILITADO=true', 'IZIPAY_USUARIO', 'IZIPAY_CONTRASENA', 'IZIPAY_LLAVE_PUBLICA']
        : []),
    ];
    return {
      listoParaProduccion: faltantes.length === 0,
      faltantes,
      idiomas,
      monedas,
      canales,
      canalesPorServicio,
      documentos,
      izipayHabilitado: this.config.get('IZIPAY_HABILITADO', 'true') === 'true',
      minutosRetencionReserva: this.number('RESERVA_HOLD_MINUTOS', 20, 5, 120),
      versionPoliticas: this.config.get('VERSION_POLITICAS', 'pendiente-configuracion'),
    };
  }

  @Get('listo')
  readiness() {
    const publico = this.publicConfig();
    const entorno = this.config.get('ENTORNO', 'desarrollo');
    if (entorno === 'produccion' && !publico.listoParaProduccion) {
      throw new ServiceUnavailableException({
        estado: 'configuracion_incompleta',
        variablesPendientes: publico.faltantes,
      });
    }
    return { estado: 'listo', entorno };
  }

  private list(key: string, defecto: string) {
    return this.config.get(key, defecto).split(',').map((x) => x.trim()).filter(Boolean);
  }

  private url(key: string) {
    const value = this.config.get<string>(key);
    if (!value) return null;
    try {
      const url = new URL(value);
      return url.protocol === 'https:' || this.config.get('ENTORNO') !== 'produccion'
        ? url.toString()
        : null;
    } catch {
      return null;
    }
  }

  private number(key: string, fallback: number, min: number, max: number) {
    const value = Number(this.config.get(key, fallback));
    return Number.isFinite(value) && value >= min && value <= max ? value : fallback;
  }
}
