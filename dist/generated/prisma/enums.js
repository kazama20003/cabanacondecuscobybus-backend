"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadoTraduccion = exports.TipoVehiculo = exports.Moneda = exports.MetodoPago = exports.EstadoPago = exports.EstadoReserva = exports.EstadoSalida = exports.RolUsuario = void 0;
exports.RolUsuario = {
    CLIENTE: 'CLIENTE',
    OPERADOR: 'OPERADOR',
    ADMINISTRADOR: 'ADMINISTRADOR'
};
exports.EstadoSalida = {
    BORRADOR: 'BORRADOR',
    A_LA_VENTA: 'A_LA_VENTA',
    PENDIENTE_DE_MINIMO: 'PENDIENTE_DE_MINIMO',
    CONFIRMADA: 'CONFIRMADA',
    EN_CURSO: 'EN_CURSO',
    FINALIZADA: 'FINALIZADA',
    CANCELADA: 'CANCELADA'
};
exports.EstadoReserva = {
    PENDIENTE_PAGO: 'PENDIENTE_PAGO',
    ADELANTO_PAGADO: 'ADELANTO_PAGADO',
    SALDO_PENDIENTE: 'SALDO_PENDIENTE',
    PAGO_TOTAL_PAGADO: 'PAGO_TOTAL_PAGADO',
    CONFIRMADA: 'CONFIRMADA',
    REPROGRAMADA: 'REPROGRAMADA',
    CANCELADA: 'CANCELADA',
    COMPLETADA: 'COMPLETADA',
    VENCIDA: 'VENCIDA'
};
exports.EstadoPago = {
    PENDIENTE: 'PENDIENTE',
    APROBADO: 'APROBADO',
    RECHAZADO: 'RECHAZADO',
    REEMBOLSADO: 'REEMBOLSADO'
};
exports.MetodoPago = {
    IZIPAY: 'IZIPAY',
    TRANSFERENCIA: 'TRANSFERENCIA',
    EFECTIVO_OFICINA: 'EFECTIVO_OFICINA'
};
exports.Moneda = {
    PEN: 'PEN',
    USD: 'USD'
};
exports.TipoVehiculo = {
    PROPIO: 'PROPIO',
    TERCERO: 'TERCERO'
};
exports.EstadoTraduccion = {
    BORRADOR: 'BORRADOR',
    PUBLICADA: 'PUBLICADA'
};
//# sourceMappingURL=enums.js.map