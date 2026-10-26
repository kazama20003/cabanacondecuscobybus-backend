# Operación de reservas y lanzamiento

## Flujo de reserva

- Una reserva se crea en `PENDIENTE_PAGO` y aparta el aforo durante `RESERVA_HOLD_MINUTOS` (5–120; valor de desarrollo 20).
- Una tarea cada minuto cambia a `VENCIDA` las reservas impagas expiradas. El cálculo de aforo excluye una reserva pendiente vencida incluso antes de que corra la tarea.
- El vencimiento se registra en el historial. El IPN firmado de Izipay sigue siendo la única fuente de confirmación de un pago con tarjeta.
- Si Izipay reporta un cobro cuando la reserva ya venció o fue cancelada, se registra el pago como recibido, se genera auditoría y se avisa a administración. No se confirma el asiento automáticamente; el equipo aplica la política vigente y resuelve reembolso o reprogramación.
- Los comprobantes de transferencia/efectivo quedan pendientes y solo `ADMINISTRADOR` puede confirmarlos. El intento manual de aprobar un pago Izipay se rechaza.

## Roles

| Rol | Facultades actuales |
| --- | --- |
| `OPERADOR` | Gestiona catálogo, contenido, salidas y medios desde los endpoints que permiten ese rol. |
| `ADMINISTRADOR` | Además gestiona usuarios, pagos manuales, auditoría y acciones administrativas. |
| `CLIENTE` | Compra como usuario o invitado, consulta reservas de su cuenta y gestiona su reserva con el token de invitado. |

Toda confirmación manual de pago registra usuario, fecha, importe, método y operación en historial/auditoría. Las solicitudes de cliente y los cambios de catálogo/usuarios también quedan en auditoría. `RETENCION_AUDITORIA_DIAS` define cuánto conservar esos registros; producción exige que la empresa apruebe y configure ese periodo conforme a su política de privacidad y obligaciones aplicables.

## Datos publicables

Una salida reservable debe pertenecer a un transporte/tour activo y tener estado habilitado para venta. La capacidad se valida en una transacción serializable. El catálogo es la fuente de rutas/destinos reales; no se crea disponibilidad por configuración de entorno. Para eventos estacionales, publica fechas confirmadas y expresa el programa como pendiente de confirmación en su contenido hasta contar con el horario oficial. Mantén evidencia de licencia/permiso por cada imagen y video antes de publicarlo; `DERECHOS_MEDIOS_VERIFICADOS=true` es la confirmación de lanzamiento, no reemplaza ese registro.

## Política de compra, cambios y reembolsos

No se precargan plazos de cancelación ni porcentajes de reembolso. Antes de producción, publica y enlaza los documentos legales que apruebe la empresa y cambia `VERSION_POLITICAS` al actualizar su contenido. El checkout obliga a aceptar los tres enlaces y guarda la fecha y versión aceptadas con cada reserva. Desde la ficha de reserva, el cliente puede pedir cancelación o reprogramación; la petición queda en auditoría y se notifica al correo administrativo, pero no modifica la reserva hasta que el equipo la resuelva. Los cobros Izipay fuera de una reserva vigente pasan a revisión manual; no hay reembolso automático ni se debe anunciar uno hasta configurar la política y el proceso del proveedor.

## Entorno

Copia `.env.example` a `.env`; nunca subas el archivo real. El frontend necesita las variables `NEXT_PUBLIC_*` durante el build. Usa los mismos enlaces, versión de políticas, canales y monedas en ambas aplicaciones. Los canales se pueden fijar globalmente o por categoría con `CANALES_RESERVA_TRANSPORTES`, `CANALES_RESERVA_TOURS` y `CANALES_RESERVA_EVENTOS` (`ONLINE`, `WHATSAPP` o ambos). `ONLINE` requiere Izipay habilitado y configurado.

```sh
npx prisma migrate deploy
npx prisma generate
npm run build
```

`GET /api/operacion/publica` expone canales, idiomas, monedas, enlaces y estado de preparación sin secretos. `GET /api/operacion/listo` devuelve 503 en producción si faltan base de datos, JWT seguro, HTTPS/CORS, enlaces legales/versionados, correo, Cloudinary, Izipay (si está habilitado), confirmación de licencias, copia de seguridad verificada o monitoreo.

## Checklist de publicación

1. Configura dominios HTTPS, `CORS_ORIGENES`, base de datos, JWT aleatorio de al menos 32 caracteres y variables de integración.
2. Aprueba y publica términos, privacidad y cancelación. Indica en ellos cómo se cobra adelanto/saldo y cómo se solicitan cambios y reembolsos.
3. Define las rutas/destinos reales activando únicamente servicios y salidas operativos; escoge idiomas y monedas según el equipo que atenderá cada uno.
4. Revisa licencias de cada medio; configura y prueba backups restaurables, alertas de monitoreo y recepción de correo operativo.
5. Ejecuta migraciones en el despliegue, verifica `/api/operacion/listo`, y prueba reserva, expiración, IPN firmado y comprobante manual en sandbox antes de cobros reales.
