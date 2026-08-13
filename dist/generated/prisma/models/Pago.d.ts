import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PagoModel = runtime.Types.Result.DefaultSelection<Prisma.$PagoPayload>;
export type AggregatePago = {
    _count: PagoCountAggregateOutputType | null;
    _avg: PagoAvgAggregateOutputType | null;
    _sum: PagoSumAggregateOutputType | null;
    _min: PagoMinAggregateOutputType | null;
    _max: PagoMaxAggregateOutputType | null;
};
export type PagoAvgAggregateOutputType = {
    monto: runtime.Decimal | null;
};
export type PagoSumAggregateOutputType = {
    monto: runtime.Decimal | null;
};
export type PagoMinAggregateOutputType = {
    id: string | null;
    reservaId: string | null;
    confirmadoPorId: string | null;
    monto: runtime.Decimal | null;
    moneda: $Enums.Moneda | null;
    metodo: $Enums.MetodoPago | null;
    estado: $Enums.EstadoPago | null;
    esAdelanto: boolean | null;
    codigoOperacion: string | null;
    urlComprobante: string | null;
    referenciaProveedor: string | null;
    creadoEn: Date | null;
    confirmadoEn: Date | null;
};
export type PagoMaxAggregateOutputType = {
    id: string | null;
    reservaId: string | null;
    confirmadoPorId: string | null;
    monto: runtime.Decimal | null;
    moneda: $Enums.Moneda | null;
    metodo: $Enums.MetodoPago | null;
    estado: $Enums.EstadoPago | null;
    esAdelanto: boolean | null;
    codigoOperacion: string | null;
    urlComprobante: string | null;
    referenciaProveedor: string | null;
    creadoEn: Date | null;
    confirmadoEn: Date | null;
};
export type PagoCountAggregateOutputType = {
    id: number;
    reservaId: number;
    confirmadoPorId: number;
    monto: number;
    moneda: number;
    metodo: number;
    estado: number;
    esAdelanto: number;
    codigoOperacion: number;
    urlComprobante: number;
    referenciaProveedor: number;
    creadoEn: number;
    confirmadoEn: number;
    _all: number;
};
export type PagoAvgAggregateInputType = {
    monto?: true;
};
export type PagoSumAggregateInputType = {
    monto?: true;
};
export type PagoMinAggregateInputType = {
    id?: true;
    reservaId?: true;
    confirmadoPorId?: true;
    monto?: true;
    moneda?: true;
    metodo?: true;
    estado?: true;
    esAdelanto?: true;
    codigoOperacion?: true;
    urlComprobante?: true;
    referenciaProveedor?: true;
    creadoEn?: true;
    confirmadoEn?: true;
};
export type PagoMaxAggregateInputType = {
    id?: true;
    reservaId?: true;
    confirmadoPorId?: true;
    monto?: true;
    moneda?: true;
    metodo?: true;
    estado?: true;
    esAdelanto?: true;
    codigoOperacion?: true;
    urlComprobante?: true;
    referenciaProveedor?: true;
    creadoEn?: true;
    confirmadoEn?: true;
};
export type PagoCountAggregateInputType = {
    id?: true;
    reservaId?: true;
    confirmadoPorId?: true;
    monto?: true;
    moneda?: true;
    metodo?: true;
    estado?: true;
    esAdelanto?: true;
    codigoOperacion?: true;
    urlComprobante?: true;
    referenciaProveedor?: true;
    creadoEn?: true;
    confirmadoEn?: true;
    _all?: true;
};
export type PagoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PagoWhereInput;
    orderBy?: Prisma.PagoOrderByWithRelationInput | Prisma.PagoOrderByWithRelationInput[];
    cursor?: Prisma.PagoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PagoCountAggregateInputType;
    _avg?: PagoAvgAggregateInputType;
    _sum?: PagoSumAggregateInputType;
    _min?: PagoMinAggregateInputType;
    _max?: PagoMaxAggregateInputType;
};
export type GetPagoAggregateType<T extends PagoAggregateArgs> = {
    [P in keyof T & keyof AggregatePago]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePago[P]> : Prisma.GetScalarType<T[P], AggregatePago[P]>;
};
export type PagoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PagoWhereInput;
    orderBy?: Prisma.PagoOrderByWithAggregationInput | Prisma.PagoOrderByWithAggregationInput[];
    by: Prisma.PagoScalarFieldEnum[] | Prisma.PagoScalarFieldEnum;
    having?: Prisma.PagoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PagoCountAggregateInputType | true;
    _avg?: PagoAvgAggregateInputType;
    _sum?: PagoSumAggregateInputType;
    _min?: PagoMinAggregateInputType;
    _max?: PagoMaxAggregateInputType;
};
export type PagoGroupByOutputType = {
    id: string;
    reservaId: string;
    confirmadoPorId: string | null;
    monto: runtime.Decimal;
    moneda: $Enums.Moneda;
    metodo: $Enums.MetodoPago;
    estado: $Enums.EstadoPago;
    esAdelanto: boolean;
    codigoOperacion: string | null;
    urlComprobante: string | null;
    referenciaProveedor: string | null;
    creadoEn: Date;
    confirmadoEn: Date | null;
    _count: PagoCountAggregateOutputType | null;
    _avg: PagoAvgAggregateOutputType | null;
    _sum: PagoSumAggregateOutputType | null;
    _min: PagoMinAggregateOutputType | null;
    _max: PagoMaxAggregateOutputType | null;
};
export type GetPagoGroupByPayload<T extends PagoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PagoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PagoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PagoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PagoGroupByOutputType[P]>;
}>>;
export type PagoWhereInput = {
    AND?: Prisma.PagoWhereInput | Prisma.PagoWhereInput[];
    OR?: Prisma.PagoWhereInput[];
    NOT?: Prisma.PagoWhereInput | Prisma.PagoWhereInput[];
    id?: Prisma.UuidFilter<"Pago"> | string;
    reservaId?: Prisma.UuidFilter<"Pago"> | string;
    confirmadoPorId?: Prisma.UuidNullableFilter<"Pago"> | string | null;
    monto?: Prisma.DecimalFilter<"Pago"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    moneda?: Prisma.EnumMonedaFilter<"Pago"> | $Enums.Moneda;
    metodo?: Prisma.EnumMetodoPagoFilter<"Pago"> | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoPagoFilter<"Pago"> | $Enums.EstadoPago;
    esAdelanto?: Prisma.BoolFilter<"Pago"> | boolean;
    codigoOperacion?: Prisma.StringNullableFilter<"Pago"> | string | null;
    urlComprobante?: Prisma.StringNullableFilter<"Pago"> | string | null;
    referenciaProveedor?: Prisma.StringNullableFilter<"Pago"> | string | null;
    creadoEn?: Prisma.DateTimeFilter<"Pago"> | Date | string;
    confirmadoEn?: Prisma.DateTimeNullableFilter<"Pago"> | Date | string | null;
    reserva?: Prisma.XOR<Prisma.ReservaScalarRelationFilter, Prisma.ReservaWhereInput>;
    confirmadoPor?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.UsuarioWhereInput> | null;
};
export type PagoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    reservaId?: Prisma.SortOrder;
    confirmadoPorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    moneda?: Prisma.SortOrder;
    metodo?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    esAdelanto?: Prisma.SortOrder;
    codigoOperacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    urlComprobante?: Prisma.SortOrderInput | Prisma.SortOrder;
    referenciaProveedor?: Prisma.SortOrderInput | Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    confirmadoEn?: Prisma.SortOrderInput | Prisma.SortOrder;
    reserva?: Prisma.ReservaOrderByWithRelationInput;
    confirmadoPor?: Prisma.UsuarioOrderByWithRelationInput;
};
export type PagoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    referenciaProveedor?: string;
    AND?: Prisma.PagoWhereInput | Prisma.PagoWhereInput[];
    OR?: Prisma.PagoWhereInput[];
    NOT?: Prisma.PagoWhereInput | Prisma.PagoWhereInput[];
    reservaId?: Prisma.UuidFilter<"Pago"> | string;
    confirmadoPorId?: Prisma.UuidNullableFilter<"Pago"> | string | null;
    monto?: Prisma.DecimalFilter<"Pago"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    moneda?: Prisma.EnumMonedaFilter<"Pago"> | $Enums.Moneda;
    metodo?: Prisma.EnumMetodoPagoFilter<"Pago"> | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoPagoFilter<"Pago"> | $Enums.EstadoPago;
    esAdelanto?: Prisma.BoolFilter<"Pago"> | boolean;
    codigoOperacion?: Prisma.StringNullableFilter<"Pago"> | string | null;
    urlComprobante?: Prisma.StringNullableFilter<"Pago"> | string | null;
    creadoEn?: Prisma.DateTimeFilter<"Pago"> | Date | string;
    confirmadoEn?: Prisma.DateTimeNullableFilter<"Pago"> | Date | string | null;
    reserva?: Prisma.XOR<Prisma.ReservaScalarRelationFilter, Prisma.ReservaWhereInput>;
    confirmadoPor?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.UsuarioWhereInput> | null;
}, "id" | "referenciaProveedor">;
export type PagoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    reservaId?: Prisma.SortOrder;
    confirmadoPorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    moneda?: Prisma.SortOrder;
    metodo?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    esAdelanto?: Prisma.SortOrder;
    codigoOperacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    urlComprobante?: Prisma.SortOrderInput | Prisma.SortOrder;
    referenciaProveedor?: Prisma.SortOrderInput | Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    confirmadoEn?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.PagoCountOrderByAggregateInput;
    _avg?: Prisma.PagoAvgOrderByAggregateInput;
    _max?: Prisma.PagoMaxOrderByAggregateInput;
    _min?: Prisma.PagoMinOrderByAggregateInput;
    _sum?: Prisma.PagoSumOrderByAggregateInput;
};
export type PagoScalarWhereWithAggregatesInput = {
    AND?: Prisma.PagoScalarWhereWithAggregatesInput | Prisma.PagoScalarWhereWithAggregatesInput[];
    OR?: Prisma.PagoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PagoScalarWhereWithAggregatesInput | Prisma.PagoScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Pago"> | string;
    reservaId?: Prisma.UuidWithAggregatesFilter<"Pago"> | string;
    confirmadoPorId?: Prisma.UuidNullableWithAggregatesFilter<"Pago"> | string | null;
    monto?: Prisma.DecimalWithAggregatesFilter<"Pago"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    moneda?: Prisma.EnumMonedaWithAggregatesFilter<"Pago"> | $Enums.Moneda;
    metodo?: Prisma.EnumMetodoPagoWithAggregatesFilter<"Pago"> | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoPagoWithAggregatesFilter<"Pago"> | $Enums.EstadoPago;
    esAdelanto?: Prisma.BoolWithAggregatesFilter<"Pago"> | boolean;
    codigoOperacion?: Prisma.StringNullableWithAggregatesFilter<"Pago"> | string | null;
    urlComprobante?: Prisma.StringNullableWithAggregatesFilter<"Pago"> | string | null;
    referenciaProveedor?: Prisma.StringNullableWithAggregatesFilter<"Pago"> | string | null;
    creadoEn?: Prisma.DateTimeWithAggregatesFilter<"Pago"> | Date | string;
    confirmadoEn?: Prisma.DateTimeNullableWithAggregatesFilter<"Pago"> | Date | string | null;
};
export type PagoCreateInput = {
    id?: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    moneda: $Enums.Moneda;
    metodo: $Enums.MetodoPago;
    estado?: $Enums.EstadoPago;
    esAdelanto?: boolean;
    codigoOperacion?: string | null;
    urlComprobante?: string | null;
    referenciaProveedor?: string | null;
    creadoEn?: Date | string;
    confirmadoEn?: Date | string | null;
    reserva: Prisma.ReservaCreateNestedOneWithoutPagosInput;
    confirmadoPor?: Prisma.UsuarioCreateNestedOneWithoutPagosConfirmadosInput;
};
export type PagoUncheckedCreateInput = {
    id?: string;
    reservaId: string;
    confirmadoPorId?: string | null;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    moneda: $Enums.Moneda;
    metodo: $Enums.MetodoPago;
    estado?: $Enums.EstadoPago;
    esAdelanto?: boolean;
    codigoOperacion?: string | null;
    urlComprobante?: string | null;
    referenciaProveedor?: string | null;
    creadoEn?: Date | string;
    confirmadoEn?: Date | string | null;
};
export type PagoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    moneda?: Prisma.EnumMonedaFieldUpdateOperationsInput | $Enums.Moneda;
    metodo?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago;
    esAdelanto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    codigoOperacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    urlComprobante?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referenciaProveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmadoEn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reserva?: Prisma.ReservaUpdateOneRequiredWithoutPagosNestedInput;
    confirmadoPor?: Prisma.UsuarioUpdateOneWithoutPagosConfirmadosNestedInput;
};
export type PagoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reservaId?: Prisma.StringFieldUpdateOperationsInput | string;
    confirmadoPorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    moneda?: Prisma.EnumMonedaFieldUpdateOperationsInput | $Enums.Moneda;
    metodo?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago;
    esAdelanto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    codigoOperacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    urlComprobante?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referenciaProveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmadoEn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PagoCreateManyInput = {
    id?: string;
    reservaId: string;
    confirmadoPorId?: string | null;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    moneda: $Enums.Moneda;
    metodo: $Enums.MetodoPago;
    estado?: $Enums.EstadoPago;
    esAdelanto?: boolean;
    codigoOperacion?: string | null;
    urlComprobante?: string | null;
    referenciaProveedor?: string | null;
    creadoEn?: Date | string;
    confirmadoEn?: Date | string | null;
};
export type PagoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    moneda?: Prisma.EnumMonedaFieldUpdateOperationsInput | $Enums.Moneda;
    metodo?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago;
    esAdelanto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    codigoOperacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    urlComprobante?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referenciaProveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmadoEn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PagoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reservaId?: Prisma.StringFieldUpdateOperationsInput | string;
    confirmadoPorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    moneda?: Prisma.EnumMonedaFieldUpdateOperationsInput | $Enums.Moneda;
    metodo?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago;
    esAdelanto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    codigoOperacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    urlComprobante?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referenciaProveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmadoEn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PagoListRelationFilter = {
    every?: Prisma.PagoWhereInput;
    some?: Prisma.PagoWhereInput;
    none?: Prisma.PagoWhereInput;
};
export type PagoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PagoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reservaId?: Prisma.SortOrder;
    confirmadoPorId?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    moneda?: Prisma.SortOrder;
    metodo?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    esAdelanto?: Prisma.SortOrder;
    codigoOperacion?: Prisma.SortOrder;
    urlComprobante?: Prisma.SortOrder;
    referenciaProveedor?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    confirmadoEn?: Prisma.SortOrder;
};
export type PagoAvgOrderByAggregateInput = {
    monto?: Prisma.SortOrder;
};
export type PagoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reservaId?: Prisma.SortOrder;
    confirmadoPorId?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    moneda?: Prisma.SortOrder;
    metodo?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    esAdelanto?: Prisma.SortOrder;
    codigoOperacion?: Prisma.SortOrder;
    urlComprobante?: Prisma.SortOrder;
    referenciaProveedor?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    confirmadoEn?: Prisma.SortOrder;
};
export type PagoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reservaId?: Prisma.SortOrder;
    confirmadoPorId?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    moneda?: Prisma.SortOrder;
    metodo?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    esAdelanto?: Prisma.SortOrder;
    codigoOperacion?: Prisma.SortOrder;
    urlComprobante?: Prisma.SortOrder;
    referenciaProveedor?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    confirmadoEn?: Prisma.SortOrder;
};
export type PagoSumOrderByAggregateInput = {
    monto?: Prisma.SortOrder;
};
export type PagoCreateNestedManyWithoutConfirmadoPorInput = {
    create?: Prisma.XOR<Prisma.PagoCreateWithoutConfirmadoPorInput, Prisma.PagoUncheckedCreateWithoutConfirmadoPorInput> | Prisma.PagoCreateWithoutConfirmadoPorInput[] | Prisma.PagoUncheckedCreateWithoutConfirmadoPorInput[];
    connectOrCreate?: Prisma.PagoCreateOrConnectWithoutConfirmadoPorInput | Prisma.PagoCreateOrConnectWithoutConfirmadoPorInput[];
    createMany?: Prisma.PagoCreateManyConfirmadoPorInputEnvelope;
    connect?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
};
export type PagoUncheckedCreateNestedManyWithoutConfirmadoPorInput = {
    create?: Prisma.XOR<Prisma.PagoCreateWithoutConfirmadoPorInput, Prisma.PagoUncheckedCreateWithoutConfirmadoPorInput> | Prisma.PagoCreateWithoutConfirmadoPorInput[] | Prisma.PagoUncheckedCreateWithoutConfirmadoPorInput[];
    connectOrCreate?: Prisma.PagoCreateOrConnectWithoutConfirmadoPorInput | Prisma.PagoCreateOrConnectWithoutConfirmadoPorInput[];
    createMany?: Prisma.PagoCreateManyConfirmadoPorInputEnvelope;
    connect?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
};
export type PagoUpdateManyWithoutConfirmadoPorNestedInput = {
    create?: Prisma.XOR<Prisma.PagoCreateWithoutConfirmadoPorInput, Prisma.PagoUncheckedCreateWithoutConfirmadoPorInput> | Prisma.PagoCreateWithoutConfirmadoPorInput[] | Prisma.PagoUncheckedCreateWithoutConfirmadoPorInput[];
    connectOrCreate?: Prisma.PagoCreateOrConnectWithoutConfirmadoPorInput | Prisma.PagoCreateOrConnectWithoutConfirmadoPorInput[];
    upsert?: Prisma.PagoUpsertWithWhereUniqueWithoutConfirmadoPorInput | Prisma.PagoUpsertWithWhereUniqueWithoutConfirmadoPorInput[];
    createMany?: Prisma.PagoCreateManyConfirmadoPorInputEnvelope;
    set?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    disconnect?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    delete?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    connect?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    update?: Prisma.PagoUpdateWithWhereUniqueWithoutConfirmadoPorInput | Prisma.PagoUpdateWithWhereUniqueWithoutConfirmadoPorInput[];
    updateMany?: Prisma.PagoUpdateManyWithWhereWithoutConfirmadoPorInput | Prisma.PagoUpdateManyWithWhereWithoutConfirmadoPorInput[];
    deleteMany?: Prisma.PagoScalarWhereInput | Prisma.PagoScalarWhereInput[];
};
export type PagoUncheckedUpdateManyWithoutConfirmadoPorNestedInput = {
    create?: Prisma.XOR<Prisma.PagoCreateWithoutConfirmadoPorInput, Prisma.PagoUncheckedCreateWithoutConfirmadoPorInput> | Prisma.PagoCreateWithoutConfirmadoPorInput[] | Prisma.PagoUncheckedCreateWithoutConfirmadoPorInput[];
    connectOrCreate?: Prisma.PagoCreateOrConnectWithoutConfirmadoPorInput | Prisma.PagoCreateOrConnectWithoutConfirmadoPorInput[];
    upsert?: Prisma.PagoUpsertWithWhereUniqueWithoutConfirmadoPorInput | Prisma.PagoUpsertWithWhereUniqueWithoutConfirmadoPorInput[];
    createMany?: Prisma.PagoCreateManyConfirmadoPorInputEnvelope;
    set?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    disconnect?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    delete?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    connect?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    update?: Prisma.PagoUpdateWithWhereUniqueWithoutConfirmadoPorInput | Prisma.PagoUpdateWithWhereUniqueWithoutConfirmadoPorInput[];
    updateMany?: Prisma.PagoUpdateManyWithWhereWithoutConfirmadoPorInput | Prisma.PagoUpdateManyWithWhereWithoutConfirmadoPorInput[];
    deleteMany?: Prisma.PagoScalarWhereInput | Prisma.PagoScalarWhereInput[];
};
export type PagoCreateNestedManyWithoutReservaInput = {
    create?: Prisma.XOR<Prisma.PagoCreateWithoutReservaInput, Prisma.PagoUncheckedCreateWithoutReservaInput> | Prisma.PagoCreateWithoutReservaInput[] | Prisma.PagoUncheckedCreateWithoutReservaInput[];
    connectOrCreate?: Prisma.PagoCreateOrConnectWithoutReservaInput | Prisma.PagoCreateOrConnectWithoutReservaInput[];
    createMany?: Prisma.PagoCreateManyReservaInputEnvelope;
    connect?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
};
export type PagoUncheckedCreateNestedManyWithoutReservaInput = {
    create?: Prisma.XOR<Prisma.PagoCreateWithoutReservaInput, Prisma.PagoUncheckedCreateWithoutReservaInput> | Prisma.PagoCreateWithoutReservaInput[] | Prisma.PagoUncheckedCreateWithoutReservaInput[];
    connectOrCreate?: Prisma.PagoCreateOrConnectWithoutReservaInput | Prisma.PagoCreateOrConnectWithoutReservaInput[];
    createMany?: Prisma.PagoCreateManyReservaInputEnvelope;
    connect?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
};
export type PagoUpdateManyWithoutReservaNestedInput = {
    create?: Prisma.XOR<Prisma.PagoCreateWithoutReservaInput, Prisma.PagoUncheckedCreateWithoutReservaInput> | Prisma.PagoCreateWithoutReservaInput[] | Prisma.PagoUncheckedCreateWithoutReservaInput[];
    connectOrCreate?: Prisma.PagoCreateOrConnectWithoutReservaInput | Prisma.PagoCreateOrConnectWithoutReservaInput[];
    upsert?: Prisma.PagoUpsertWithWhereUniqueWithoutReservaInput | Prisma.PagoUpsertWithWhereUniqueWithoutReservaInput[];
    createMany?: Prisma.PagoCreateManyReservaInputEnvelope;
    set?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    disconnect?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    delete?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    connect?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    update?: Prisma.PagoUpdateWithWhereUniqueWithoutReservaInput | Prisma.PagoUpdateWithWhereUniqueWithoutReservaInput[];
    updateMany?: Prisma.PagoUpdateManyWithWhereWithoutReservaInput | Prisma.PagoUpdateManyWithWhereWithoutReservaInput[];
    deleteMany?: Prisma.PagoScalarWhereInput | Prisma.PagoScalarWhereInput[];
};
export type PagoUncheckedUpdateManyWithoutReservaNestedInput = {
    create?: Prisma.XOR<Prisma.PagoCreateWithoutReservaInput, Prisma.PagoUncheckedCreateWithoutReservaInput> | Prisma.PagoCreateWithoutReservaInput[] | Prisma.PagoUncheckedCreateWithoutReservaInput[];
    connectOrCreate?: Prisma.PagoCreateOrConnectWithoutReservaInput | Prisma.PagoCreateOrConnectWithoutReservaInput[];
    upsert?: Prisma.PagoUpsertWithWhereUniqueWithoutReservaInput | Prisma.PagoUpsertWithWhereUniqueWithoutReservaInput[];
    createMany?: Prisma.PagoCreateManyReservaInputEnvelope;
    set?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    disconnect?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    delete?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    connect?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    update?: Prisma.PagoUpdateWithWhereUniqueWithoutReservaInput | Prisma.PagoUpdateWithWhereUniqueWithoutReservaInput[];
    updateMany?: Prisma.PagoUpdateManyWithWhereWithoutReservaInput | Prisma.PagoUpdateManyWithWhereWithoutReservaInput[];
    deleteMany?: Prisma.PagoScalarWhereInput | Prisma.PagoScalarWhereInput[];
};
export type EnumMetodoPagoFieldUpdateOperationsInput = {
    set?: $Enums.MetodoPago;
};
export type EnumEstadoPagoFieldUpdateOperationsInput = {
    set?: $Enums.EstadoPago;
};
export type PagoCreateWithoutConfirmadoPorInput = {
    id?: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    moneda: $Enums.Moneda;
    metodo: $Enums.MetodoPago;
    estado?: $Enums.EstadoPago;
    esAdelanto?: boolean;
    codigoOperacion?: string | null;
    urlComprobante?: string | null;
    referenciaProveedor?: string | null;
    creadoEn?: Date | string;
    confirmadoEn?: Date | string | null;
    reserva: Prisma.ReservaCreateNestedOneWithoutPagosInput;
};
export type PagoUncheckedCreateWithoutConfirmadoPorInput = {
    id?: string;
    reservaId: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    moneda: $Enums.Moneda;
    metodo: $Enums.MetodoPago;
    estado?: $Enums.EstadoPago;
    esAdelanto?: boolean;
    codigoOperacion?: string | null;
    urlComprobante?: string | null;
    referenciaProveedor?: string | null;
    creadoEn?: Date | string;
    confirmadoEn?: Date | string | null;
};
export type PagoCreateOrConnectWithoutConfirmadoPorInput = {
    where: Prisma.PagoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PagoCreateWithoutConfirmadoPorInput, Prisma.PagoUncheckedCreateWithoutConfirmadoPorInput>;
};
export type PagoCreateManyConfirmadoPorInputEnvelope = {
    data: Prisma.PagoCreateManyConfirmadoPorInput | Prisma.PagoCreateManyConfirmadoPorInput[];
    skipDuplicates?: boolean;
};
export type PagoUpsertWithWhereUniqueWithoutConfirmadoPorInput = {
    where: Prisma.PagoWhereUniqueInput;
    update: Prisma.XOR<Prisma.PagoUpdateWithoutConfirmadoPorInput, Prisma.PagoUncheckedUpdateWithoutConfirmadoPorInput>;
    create: Prisma.XOR<Prisma.PagoCreateWithoutConfirmadoPorInput, Prisma.PagoUncheckedCreateWithoutConfirmadoPorInput>;
};
export type PagoUpdateWithWhereUniqueWithoutConfirmadoPorInput = {
    where: Prisma.PagoWhereUniqueInput;
    data: Prisma.XOR<Prisma.PagoUpdateWithoutConfirmadoPorInput, Prisma.PagoUncheckedUpdateWithoutConfirmadoPorInput>;
};
export type PagoUpdateManyWithWhereWithoutConfirmadoPorInput = {
    where: Prisma.PagoScalarWhereInput;
    data: Prisma.XOR<Prisma.PagoUpdateManyMutationInput, Prisma.PagoUncheckedUpdateManyWithoutConfirmadoPorInput>;
};
export type PagoScalarWhereInput = {
    AND?: Prisma.PagoScalarWhereInput | Prisma.PagoScalarWhereInput[];
    OR?: Prisma.PagoScalarWhereInput[];
    NOT?: Prisma.PagoScalarWhereInput | Prisma.PagoScalarWhereInput[];
    id?: Prisma.UuidFilter<"Pago"> | string;
    reservaId?: Prisma.UuidFilter<"Pago"> | string;
    confirmadoPorId?: Prisma.UuidNullableFilter<"Pago"> | string | null;
    monto?: Prisma.DecimalFilter<"Pago"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    moneda?: Prisma.EnumMonedaFilter<"Pago"> | $Enums.Moneda;
    metodo?: Prisma.EnumMetodoPagoFilter<"Pago"> | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoPagoFilter<"Pago"> | $Enums.EstadoPago;
    esAdelanto?: Prisma.BoolFilter<"Pago"> | boolean;
    codigoOperacion?: Prisma.StringNullableFilter<"Pago"> | string | null;
    urlComprobante?: Prisma.StringNullableFilter<"Pago"> | string | null;
    referenciaProveedor?: Prisma.StringNullableFilter<"Pago"> | string | null;
    creadoEn?: Prisma.DateTimeFilter<"Pago"> | Date | string;
    confirmadoEn?: Prisma.DateTimeNullableFilter<"Pago"> | Date | string | null;
};
export type PagoCreateWithoutReservaInput = {
    id?: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    moneda: $Enums.Moneda;
    metodo: $Enums.MetodoPago;
    estado?: $Enums.EstadoPago;
    esAdelanto?: boolean;
    codigoOperacion?: string | null;
    urlComprobante?: string | null;
    referenciaProveedor?: string | null;
    creadoEn?: Date | string;
    confirmadoEn?: Date | string | null;
    confirmadoPor?: Prisma.UsuarioCreateNestedOneWithoutPagosConfirmadosInput;
};
export type PagoUncheckedCreateWithoutReservaInput = {
    id?: string;
    confirmadoPorId?: string | null;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    moneda: $Enums.Moneda;
    metodo: $Enums.MetodoPago;
    estado?: $Enums.EstadoPago;
    esAdelanto?: boolean;
    codigoOperacion?: string | null;
    urlComprobante?: string | null;
    referenciaProveedor?: string | null;
    creadoEn?: Date | string;
    confirmadoEn?: Date | string | null;
};
export type PagoCreateOrConnectWithoutReservaInput = {
    where: Prisma.PagoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PagoCreateWithoutReservaInput, Prisma.PagoUncheckedCreateWithoutReservaInput>;
};
export type PagoCreateManyReservaInputEnvelope = {
    data: Prisma.PagoCreateManyReservaInput | Prisma.PagoCreateManyReservaInput[];
    skipDuplicates?: boolean;
};
export type PagoUpsertWithWhereUniqueWithoutReservaInput = {
    where: Prisma.PagoWhereUniqueInput;
    update: Prisma.XOR<Prisma.PagoUpdateWithoutReservaInput, Prisma.PagoUncheckedUpdateWithoutReservaInput>;
    create: Prisma.XOR<Prisma.PagoCreateWithoutReservaInput, Prisma.PagoUncheckedCreateWithoutReservaInput>;
};
export type PagoUpdateWithWhereUniqueWithoutReservaInput = {
    where: Prisma.PagoWhereUniqueInput;
    data: Prisma.XOR<Prisma.PagoUpdateWithoutReservaInput, Prisma.PagoUncheckedUpdateWithoutReservaInput>;
};
export type PagoUpdateManyWithWhereWithoutReservaInput = {
    where: Prisma.PagoScalarWhereInput;
    data: Prisma.XOR<Prisma.PagoUpdateManyMutationInput, Prisma.PagoUncheckedUpdateManyWithoutReservaInput>;
};
export type PagoCreateManyConfirmadoPorInput = {
    id?: string;
    reservaId: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    moneda: $Enums.Moneda;
    metodo: $Enums.MetodoPago;
    estado?: $Enums.EstadoPago;
    esAdelanto?: boolean;
    codigoOperacion?: string | null;
    urlComprobante?: string | null;
    referenciaProveedor?: string | null;
    creadoEn?: Date | string;
    confirmadoEn?: Date | string | null;
};
export type PagoUpdateWithoutConfirmadoPorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    moneda?: Prisma.EnumMonedaFieldUpdateOperationsInput | $Enums.Moneda;
    metodo?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago;
    esAdelanto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    codigoOperacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    urlComprobante?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referenciaProveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmadoEn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reserva?: Prisma.ReservaUpdateOneRequiredWithoutPagosNestedInput;
};
export type PagoUncheckedUpdateWithoutConfirmadoPorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reservaId?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    moneda?: Prisma.EnumMonedaFieldUpdateOperationsInput | $Enums.Moneda;
    metodo?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago;
    esAdelanto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    codigoOperacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    urlComprobante?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referenciaProveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmadoEn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PagoUncheckedUpdateManyWithoutConfirmadoPorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reservaId?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    moneda?: Prisma.EnumMonedaFieldUpdateOperationsInput | $Enums.Moneda;
    metodo?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago;
    esAdelanto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    codigoOperacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    urlComprobante?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referenciaProveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmadoEn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PagoCreateManyReservaInput = {
    id?: string;
    confirmadoPorId?: string | null;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    moneda: $Enums.Moneda;
    metodo: $Enums.MetodoPago;
    estado?: $Enums.EstadoPago;
    esAdelanto?: boolean;
    codigoOperacion?: string | null;
    urlComprobante?: string | null;
    referenciaProveedor?: string | null;
    creadoEn?: Date | string;
    confirmadoEn?: Date | string | null;
};
export type PagoUpdateWithoutReservaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    moneda?: Prisma.EnumMonedaFieldUpdateOperationsInput | $Enums.Moneda;
    metodo?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago;
    esAdelanto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    codigoOperacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    urlComprobante?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referenciaProveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmadoEn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    confirmadoPor?: Prisma.UsuarioUpdateOneWithoutPagosConfirmadosNestedInput;
};
export type PagoUncheckedUpdateWithoutReservaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    confirmadoPorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    moneda?: Prisma.EnumMonedaFieldUpdateOperationsInput | $Enums.Moneda;
    metodo?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago;
    esAdelanto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    codigoOperacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    urlComprobante?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referenciaProveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmadoEn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PagoUncheckedUpdateManyWithoutReservaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    confirmadoPorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    moneda?: Prisma.EnumMonedaFieldUpdateOperationsInput | $Enums.Moneda;
    metodo?: Prisma.EnumMetodoPagoFieldUpdateOperationsInput | $Enums.MetodoPago;
    estado?: Prisma.EnumEstadoPagoFieldUpdateOperationsInput | $Enums.EstadoPago;
    esAdelanto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    codigoOperacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    urlComprobante?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referenciaProveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmadoEn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PagoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reservaId?: boolean;
    confirmadoPorId?: boolean;
    monto?: boolean;
    moneda?: boolean;
    metodo?: boolean;
    estado?: boolean;
    esAdelanto?: boolean;
    codigoOperacion?: boolean;
    urlComprobante?: boolean;
    referenciaProveedor?: boolean;
    creadoEn?: boolean;
    confirmadoEn?: boolean;
    reserva?: boolean | Prisma.ReservaDefaultArgs<ExtArgs>;
    confirmadoPor?: boolean | Prisma.Pago$confirmadoPorArgs<ExtArgs>;
}, ExtArgs["result"]["pago"]>;
export type PagoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reservaId?: boolean;
    confirmadoPorId?: boolean;
    monto?: boolean;
    moneda?: boolean;
    metodo?: boolean;
    estado?: boolean;
    esAdelanto?: boolean;
    codigoOperacion?: boolean;
    urlComprobante?: boolean;
    referenciaProveedor?: boolean;
    creadoEn?: boolean;
    confirmadoEn?: boolean;
    reserva?: boolean | Prisma.ReservaDefaultArgs<ExtArgs>;
    confirmadoPor?: boolean | Prisma.Pago$confirmadoPorArgs<ExtArgs>;
}, ExtArgs["result"]["pago"]>;
export type PagoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reservaId?: boolean;
    confirmadoPorId?: boolean;
    monto?: boolean;
    moneda?: boolean;
    metodo?: boolean;
    estado?: boolean;
    esAdelanto?: boolean;
    codigoOperacion?: boolean;
    urlComprobante?: boolean;
    referenciaProveedor?: boolean;
    creadoEn?: boolean;
    confirmadoEn?: boolean;
    reserva?: boolean | Prisma.ReservaDefaultArgs<ExtArgs>;
    confirmadoPor?: boolean | Prisma.Pago$confirmadoPorArgs<ExtArgs>;
}, ExtArgs["result"]["pago"]>;
export type PagoSelectScalar = {
    id?: boolean;
    reservaId?: boolean;
    confirmadoPorId?: boolean;
    monto?: boolean;
    moneda?: boolean;
    metodo?: boolean;
    estado?: boolean;
    esAdelanto?: boolean;
    codigoOperacion?: boolean;
    urlComprobante?: boolean;
    referenciaProveedor?: boolean;
    creadoEn?: boolean;
    confirmadoEn?: boolean;
};
export type PagoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "reservaId" | "confirmadoPorId" | "monto" | "moneda" | "metodo" | "estado" | "esAdelanto" | "codigoOperacion" | "urlComprobante" | "referenciaProveedor" | "creadoEn" | "confirmadoEn", ExtArgs["result"]["pago"]>;
export type PagoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reserva?: boolean | Prisma.ReservaDefaultArgs<ExtArgs>;
    confirmadoPor?: boolean | Prisma.Pago$confirmadoPorArgs<ExtArgs>;
};
export type PagoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reserva?: boolean | Prisma.ReservaDefaultArgs<ExtArgs>;
    confirmadoPor?: boolean | Prisma.Pago$confirmadoPorArgs<ExtArgs>;
};
export type PagoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reserva?: boolean | Prisma.ReservaDefaultArgs<ExtArgs>;
    confirmadoPor?: boolean | Prisma.Pago$confirmadoPorArgs<ExtArgs>;
};
export type $PagoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Pago";
    objects: {
        reserva: Prisma.$ReservaPayload<ExtArgs>;
        confirmadoPor: Prisma.$UsuarioPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        reservaId: string;
        confirmadoPorId: string | null;
        monto: runtime.Decimal;
        moneda: $Enums.Moneda;
        metodo: $Enums.MetodoPago;
        estado: $Enums.EstadoPago;
        esAdelanto: boolean;
        codigoOperacion: string | null;
        urlComprobante: string | null;
        referenciaProveedor: string | null;
        creadoEn: Date;
        confirmadoEn: Date | null;
    }, ExtArgs["result"]["pago"]>;
    composites: {};
};
export type PagoGetPayload<S extends boolean | null | undefined | PagoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PagoPayload, S>;
export type PagoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PagoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PagoCountAggregateInputType | true;
};
export interface PagoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Pago'];
        meta: {
            name: 'Pago';
        };
    };
    findUnique<T extends PagoFindUniqueArgs>(args: Prisma.SelectSubset<T, PagoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PagoClient<runtime.Types.Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PagoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PagoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PagoClient<runtime.Types.Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PagoFindFirstArgs>(args?: Prisma.SelectSubset<T, PagoFindFirstArgs<ExtArgs>>): Prisma.Prisma__PagoClient<runtime.Types.Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PagoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PagoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PagoClient<runtime.Types.Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PagoFindManyArgs>(args?: Prisma.SelectSubset<T, PagoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PagoCreateArgs>(args: Prisma.SelectSubset<T, PagoCreateArgs<ExtArgs>>): Prisma.Prisma__PagoClient<runtime.Types.Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PagoCreateManyArgs>(args?: Prisma.SelectSubset<T, PagoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PagoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PagoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PagoDeleteArgs>(args: Prisma.SelectSubset<T, PagoDeleteArgs<ExtArgs>>): Prisma.Prisma__PagoClient<runtime.Types.Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PagoUpdateArgs>(args: Prisma.SelectSubset<T, PagoUpdateArgs<ExtArgs>>): Prisma.Prisma__PagoClient<runtime.Types.Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PagoDeleteManyArgs>(args?: Prisma.SelectSubset<T, PagoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PagoUpdateManyArgs>(args: Prisma.SelectSubset<T, PagoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PagoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PagoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PagoUpsertArgs>(args: Prisma.SelectSubset<T, PagoUpsertArgs<ExtArgs>>): Prisma.Prisma__PagoClient<runtime.Types.Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PagoCountArgs>(args?: Prisma.Subset<T, PagoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PagoCountAggregateOutputType> : number>;
    aggregate<T extends PagoAggregateArgs>(args: Prisma.Subset<T, PagoAggregateArgs>): Prisma.PrismaPromise<GetPagoAggregateType<T>>;
    groupBy<T extends PagoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PagoGroupByArgs['orderBy'];
    } : {
        orderBy?: PagoGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PagoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PagoFieldRefs;
}
export interface Prisma__PagoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    reserva<T extends Prisma.ReservaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ReservaDefaultArgs<ExtArgs>>): Prisma.Prisma__ReservaClient<runtime.Types.Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    confirmadoPor<T extends Prisma.Pago$confirmadoPorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pago$confirmadoPorArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PagoFieldRefs {
    readonly id: Prisma.FieldRef<"Pago", 'String'>;
    readonly reservaId: Prisma.FieldRef<"Pago", 'String'>;
    readonly confirmadoPorId: Prisma.FieldRef<"Pago", 'String'>;
    readonly monto: Prisma.FieldRef<"Pago", 'Decimal'>;
    readonly moneda: Prisma.FieldRef<"Pago", 'Moneda'>;
    readonly metodo: Prisma.FieldRef<"Pago", 'MetodoPago'>;
    readonly estado: Prisma.FieldRef<"Pago", 'EstadoPago'>;
    readonly esAdelanto: Prisma.FieldRef<"Pago", 'Boolean'>;
    readonly codigoOperacion: Prisma.FieldRef<"Pago", 'String'>;
    readonly urlComprobante: Prisma.FieldRef<"Pago", 'String'>;
    readonly referenciaProveedor: Prisma.FieldRef<"Pago", 'String'>;
    readonly creadoEn: Prisma.FieldRef<"Pago", 'DateTime'>;
    readonly confirmadoEn: Prisma.FieldRef<"Pago", 'DateTime'>;
}
export type PagoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PagoSelect<ExtArgs> | null;
    omit?: Prisma.PagoOmit<ExtArgs> | null;
    include?: Prisma.PagoInclude<ExtArgs> | null;
    where: Prisma.PagoWhereUniqueInput;
};
export type PagoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PagoSelect<ExtArgs> | null;
    omit?: Prisma.PagoOmit<ExtArgs> | null;
    include?: Prisma.PagoInclude<ExtArgs> | null;
    where: Prisma.PagoWhereUniqueInput;
};
export type PagoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PagoSelect<ExtArgs> | null;
    omit?: Prisma.PagoOmit<ExtArgs> | null;
    include?: Prisma.PagoInclude<ExtArgs> | null;
    where?: Prisma.PagoWhereInput;
    orderBy?: Prisma.PagoOrderByWithRelationInput | Prisma.PagoOrderByWithRelationInput[];
    cursor?: Prisma.PagoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PagoScalarFieldEnum | Prisma.PagoScalarFieldEnum[];
};
export type PagoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PagoSelect<ExtArgs> | null;
    omit?: Prisma.PagoOmit<ExtArgs> | null;
    include?: Prisma.PagoInclude<ExtArgs> | null;
    where?: Prisma.PagoWhereInput;
    orderBy?: Prisma.PagoOrderByWithRelationInput | Prisma.PagoOrderByWithRelationInput[];
    cursor?: Prisma.PagoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PagoScalarFieldEnum | Prisma.PagoScalarFieldEnum[];
};
export type PagoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PagoSelect<ExtArgs> | null;
    omit?: Prisma.PagoOmit<ExtArgs> | null;
    include?: Prisma.PagoInclude<ExtArgs> | null;
    where?: Prisma.PagoWhereInput;
    orderBy?: Prisma.PagoOrderByWithRelationInput | Prisma.PagoOrderByWithRelationInput[];
    cursor?: Prisma.PagoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PagoScalarFieldEnum | Prisma.PagoScalarFieldEnum[];
};
export type PagoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PagoSelect<ExtArgs> | null;
    omit?: Prisma.PagoOmit<ExtArgs> | null;
    include?: Prisma.PagoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PagoCreateInput, Prisma.PagoUncheckedCreateInput>;
};
export type PagoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PagoCreateManyInput | Prisma.PagoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PagoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PagoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PagoOmit<ExtArgs> | null;
    data: Prisma.PagoCreateManyInput | Prisma.PagoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PagoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PagoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PagoSelect<ExtArgs> | null;
    omit?: Prisma.PagoOmit<ExtArgs> | null;
    include?: Prisma.PagoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PagoUpdateInput, Prisma.PagoUncheckedUpdateInput>;
    where: Prisma.PagoWhereUniqueInput;
};
export type PagoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PagoUpdateManyMutationInput, Prisma.PagoUncheckedUpdateManyInput>;
    where?: Prisma.PagoWhereInput;
    limit?: number;
};
export type PagoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PagoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PagoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PagoUpdateManyMutationInput, Prisma.PagoUncheckedUpdateManyInput>;
    where?: Prisma.PagoWhereInput;
    limit?: number;
    include?: Prisma.PagoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PagoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PagoSelect<ExtArgs> | null;
    omit?: Prisma.PagoOmit<ExtArgs> | null;
    include?: Prisma.PagoInclude<ExtArgs> | null;
    where: Prisma.PagoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PagoCreateInput, Prisma.PagoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PagoUpdateInput, Prisma.PagoUncheckedUpdateInput>;
};
export type PagoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PagoSelect<ExtArgs> | null;
    omit?: Prisma.PagoOmit<ExtArgs> | null;
    include?: Prisma.PagoInclude<ExtArgs> | null;
    where: Prisma.PagoWhereUniqueInput;
};
export type PagoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PagoWhereInput;
    limit?: number;
};
export type Pago$confirmadoPorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
};
export type PagoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PagoSelect<ExtArgs> | null;
    omit?: Prisma.PagoOmit<ExtArgs> | null;
    include?: Prisma.PagoInclude<ExtArgs> | null;
};
