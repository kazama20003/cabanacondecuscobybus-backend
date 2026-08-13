"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchivosService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const client_s3_1 = require("@aws-sdk/client-s3");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
const node_crypto_1 = require("node:crypto");
let ArchivosService = class ArchivosService {
    configuracion;
    constructor(configuracion) {
        this.configuracion = configuracion;
    }
    async crearCargaImagen(nombreArchivo, tipoContenido, categoria) {
        if (!['image/jpeg', 'image/png', 'image/webp'].includes(tipoContenido)) {
            throw new common_1.ServiceUnavailableException('Solo se permiten imágenes JPG, PNG o WebP');
        }
        const cuenta = this.configuracion.get('R2_CUENTA_ID');
        const acceso = this.configuracion.get('R2_LLAVE_ACCESO_ID');
        const secreto = this.configuracion.get('R2_LLAVE_SECRETA');
        const bucket = this.configuracion.get('R2_BUCKET');
        const urlPublica = this.configuracion.get('R2_URL_PUBLICA');
        if (!cuenta || !acceso || !secreto || !bucket || !urlPublica) {
            throw new common_1.ServiceUnavailableException('Cloudflare R2 no está configurado');
        }
        const extension = nombreArchivo.split('.').pop()?.toLowerCase() ?? 'webp';
        const clave = `imagenes/${categoria}/${(0, node_crypto_1.randomUUID)()}.${extension}`;
        const cliente = new client_s3_1.S3Client({
            region: 'auto',
            endpoint: `https://${cuenta}.r2.cloudflarestorage.com`,
            credentials: { accessKeyId: acceso, secretAccessKey: secreto },
        });
        const comando = new client_s3_1.PutObjectCommand({
            Bucket: bucket,
            Key: clave,
            ContentType: tipoContenido,
        });
        return {
            clave,
            urlCarga: await (0, s3_request_presigner_1.getSignedUrl)(cliente, comando, { expiresIn: 600 }),
            urlPublica: `${urlPublica.replace(/\/$/, '')}/${clave}`,
            venceEnSegundos: 600,
        };
    }
};
exports.ArchivosService = ArchivosService;
exports.ArchivosService = ArchivosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], ArchivosService);
//# sourceMappingURL=archivos.service.js.map