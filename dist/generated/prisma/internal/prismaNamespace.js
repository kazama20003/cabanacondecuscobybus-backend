"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.ImagenScalarFieldEnum = exports.TraduccionTourScalarFieldEnum = exports.TraduccionTransporteScalarFieldEnum = exports.HistorialReservaScalarFieldEnum = exports.PagoScalarFieldEnum = exports.PasajeroReservaScalarFieldEnum = exports.ReservaScalarFieldEnum = exports.SalidaTourScalarFieldEnum = exports.SalidaTransporteScalarFieldEnum = exports.VehiculoScalarFieldEnum = exports.ItinerarioTourScalarFieldEnum = exports.TourScalarFieldEnum = exports.ParadaTransporteScalarFieldEnum = exports.TransporteScalarFieldEnum = exports.UsuarioScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.9.1",
    engine: "e922089b7d7502aff4249d5da3420f6fa55fc6ad"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Usuario: 'Usuario',
    Transporte: 'Transporte',
    ParadaTransporte: 'ParadaTransporte',
    Tour: 'Tour',
    ItinerarioTour: 'ItinerarioTour',
    Vehiculo: 'Vehiculo',
    SalidaTransporte: 'SalidaTransporte',
    SalidaTour: 'SalidaTour',
    Reserva: 'Reserva',
    PasajeroReserva: 'PasajeroReserva',
    Pago: 'Pago',
    HistorialReserva: 'HistorialReserva',
    TraduccionTransporte: 'TraduccionTransporte',
    TraduccionTour: 'TraduccionTour',
    Imagen: 'Imagen'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UsuarioScalarFieldEnum = {
    id: 'id',
    correo: 'correo',
    contrasenaHash: 'contrasenaHash',
    nombres: 'nombres',
    apellidos: 'apellidos',
    telefonoWhatsApp: 'telefonoWhatsApp',
    paisResidencia: 'paisResidencia',
    rol: 'rol',
    activo: 'activo',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
};
exports.TransporteScalarFieldEnum = {
    id: 'id',
    slug: 'slug',
    activo: 'activo',
    origenNombre: 'origenNombre',
    origenLatitud: 'origenLatitud',
    origenLongitud: 'origenLongitud',
    destinoNombre: 'destinoNombre',
    destinoLatitud: 'destinoLatitud',
    destinoLongitud: 'destinoLongitud',
    duracionMinutosEstimada: 'duracionMinutosEstimada',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
};
exports.ParadaTransporteScalarFieldEnum = {
    id: 'id',
    transporteId: 'transporteId',
    orden: 'orden',
    nombre: 'nombre',
    latitud: 'latitud',
    longitud: 'longitud',
    minutos: 'minutos'
};
exports.TourScalarFieldEnum = {
    id: 'id',
    slug: 'slug',
    activo: 'activo',
    destinoNombre: 'destinoNombre',
    destinoLatitud: 'destinoLatitud',
    destinoLongitud: 'destinoLongitud',
    duracionMinutos: 'duracionMinutos',
    requiereGuia: 'requiereGuia',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
};
exports.ItinerarioTourScalarFieldEnum = {
    id: 'id',
    tourId: 'tourId',
    orden: 'orden',
    titulo: 'titulo',
    descripcion: 'descripcion',
    latitud: 'latitud',
    longitud: 'longitud'
};
exports.VehiculoScalarFieldEnum = {
    id: 'id',
    placa: 'placa',
    tipoPropiedad: 'tipoPropiedad',
    proveedor: 'proveedor',
    capacidad: 'capacidad',
    activo: 'activo',
    creadoEn: 'creadoEn'
};
exports.SalidaTransporteScalarFieldEnum = {
    id: 'id',
    transporteId: 'transporteId',
    vehiculoId: 'vehiculoId',
    fechaHoraSalida: 'fechaHoraSalida',
    fechaHoraLlegada: 'fechaHoraLlegada',
    capacidad: 'capacidad',
    minimoPasajeros: 'minimoPasajeros',
    precioPen: 'precioPen',
    precioUsd: 'precioUsd',
    permiteAdelanto: 'permiteAdelanto',
    porcentajeAdelanto: 'porcentajeAdelanto',
    estado: 'estado',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
};
exports.SalidaTourScalarFieldEnum = {
    id: 'id',
    tourId: 'tourId',
    fechaHoraSalida: 'fechaHoraSalida',
    capacidad: 'capacidad',
    minimoPasajeros: 'minimoPasajeros',
    precioPen: 'precioPen',
    precioUsd: 'precioUsd',
    permiteAdelanto: 'permiteAdelanto',
    porcentajeAdelanto: 'porcentajeAdelanto',
    estado: 'estado',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
};
exports.ReservaScalarFieldEnum = {
    id: 'id',
    codigo: 'codigo',
    usuarioId: 'usuarioId',
    salidaTransporteId: 'salidaTransporteId',
    salidaTourId: 'salidaTourId',
    correoContacto: 'correoContacto',
    telefonoWhatsApp: 'telefonoWhatsApp',
    paisResidencia: 'paisResidencia',
    cantidadPasajeros: 'cantidadPasajeros',
    moneda: 'moneda',
    montoTotal: 'montoTotal',
    montoAdelanto: 'montoAdelanto',
    montoSaldo: 'montoSaldo',
    estado: 'estado',
    tokenGestionInvitado: 'tokenGestionInvitado',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
};
exports.PasajeroReservaScalarFieldEnum = {
    id: 'id',
    reservaId: 'reservaId',
    nombres: 'nombres',
    apellidos: 'apellidos',
    nacionalidad: 'nacionalidad',
    tipoDocumento: 'tipoDocumento',
    numeroDocumento: 'numeroDocumento'
};
exports.PagoScalarFieldEnum = {
    id: 'id',
    reservaId: 'reservaId',
    confirmadoPorId: 'confirmadoPorId',
    monto: 'monto',
    moneda: 'moneda',
    metodo: 'metodo',
    estado: 'estado',
    esAdelanto: 'esAdelanto',
    codigoOperacion: 'codigoOperacion',
    urlComprobante: 'urlComprobante',
    referenciaProveedor: 'referenciaProveedor',
    creadoEn: 'creadoEn',
    confirmadoEn: 'confirmadoEn'
};
exports.HistorialReservaScalarFieldEnum = {
    id: 'id',
    reservaId: 'reservaId',
    estado: 'estado',
    detalle: 'detalle',
    creadoEn: 'creadoEn'
};
exports.TraduccionTransporteScalarFieldEnum = {
    id: 'id',
    transporteId: 'transporteId',
    idioma: 'idioma',
    titulo: 'titulo',
    resumen: 'resumen',
    descripcion: 'descripcion',
    estado: 'estado'
};
exports.TraduccionTourScalarFieldEnum = {
    id: 'id',
    tourId: 'tourId',
    idioma: 'idioma',
    titulo: 'titulo',
    resumen: 'resumen',
    descripcion: 'descripcion',
    queLlevar: 'queLlevar',
    estado: 'estado'
};
exports.ImagenScalarFieldEnum = {
    id: 'id',
    transporteId: 'transporteId',
    tourId: 'tourId',
    url: 'url',
    textoAlterno: 'textoAlterno',
    orden: 'orden'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map