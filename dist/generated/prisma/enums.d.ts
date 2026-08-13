export declare const RolUsuario: {
    readonly CLIENTE: "CLIENTE";
    readonly OPERADOR: "OPERADOR";
    readonly ADMINISTRADOR: "ADMINISTRADOR";
};
export type RolUsuario = (typeof RolUsuario)[keyof typeof RolUsuario];
export declare const EstadoSalida: {
    readonly BORRADOR: "BORRADOR";
    readonly A_LA_VENTA: "A_LA_VENTA";
    readonly PENDIENTE_DE_MINIMO: "PENDIENTE_DE_MINIMO";
    readonly CONFIRMADA: "CONFIRMADA";
    readonly EN_CURSO: "EN_CURSO";
    readonly FINALIZADA: "FINALIZADA";
    readonly CANCELADA: "CANCELADA";
};
export type EstadoSalida = (typeof EstadoSalida)[keyof typeof EstadoSalida];
export declare const EstadoReserva: {
    readonly PENDIENTE_PAGO: "PENDIENTE_PAGO";
    readonly ADELANTO_PAGADO: "ADELANTO_PAGADO";
    readonly SALDO_PENDIENTE: "SALDO_PENDIENTE";
    readonly PAGO_TOTAL_PAGADO: "PAGO_TOTAL_PAGADO";
    readonly CONFIRMADA: "CONFIRMADA";
    readonly REPROGRAMADA: "REPROGRAMADA";
    readonly CANCELADA: "CANCELADA";
    readonly COMPLETADA: "COMPLETADA";
    readonly VENCIDA: "VENCIDA";
};
export type EstadoReserva = (typeof EstadoReserva)[keyof typeof EstadoReserva];
export declare const EstadoPago: {
    readonly PENDIENTE: "PENDIENTE";
    readonly APROBADO: "APROBADO";
    readonly RECHAZADO: "RECHAZADO";
    readonly REEMBOLSADO: "REEMBOLSADO";
};
export type EstadoPago = (typeof EstadoPago)[keyof typeof EstadoPago];
export declare const MetodoPago: {
    readonly IZIPAY: "IZIPAY";
    readonly TRANSFERENCIA: "TRANSFERENCIA";
    readonly EFECTIVO_OFICINA: "EFECTIVO_OFICINA";
};
export type MetodoPago = (typeof MetodoPago)[keyof typeof MetodoPago];
export declare const Moneda: {
    readonly PEN: "PEN";
    readonly USD: "USD";
};
export type Moneda = (typeof Moneda)[keyof typeof Moneda];
export declare const TipoVehiculo: {
    readonly PROPIO: "PROPIO";
    readonly TERCERO: "TERCERO";
};
export type TipoVehiculo = (typeof TipoVehiculo)[keyof typeof TipoVehiculo];
export declare const EstadoTraduccion: {
    readonly BORRADOR: "BORRADOR";
    readonly PUBLICADA: "PUBLICADA";
};
export type EstadoTraduccion = (typeof EstadoTraduccion)[keyof typeof EstadoTraduccion];
