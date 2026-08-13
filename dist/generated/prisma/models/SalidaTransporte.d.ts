import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SalidaTransporteModel = runtime.Types.Result.DefaultSelection<Prisma.$SalidaTransportePayload>;
export type AggregateSalidaTransporte = {
    _count: SalidaTransporteCountAggregateOutputType | null;
    _avg: SalidaTransporteAvgAggregateOutputType | null;
    _sum: SalidaTransporteSumAggregateOutputType | null;
    _min: SalidaTransporteMinAggregateOutputType | null;
    _max: SalidaTransporteMaxAggregateOutputType | null;
};
export type SalidaTransporteAvgAggregateOutputType = {
    capacidad: number | null;
    minimoPasajeros: number | null;
    precioPen: runtime.Decimal | null;
    precioUsd: runtime.Decimal | null;
    porcentajeAdelanto: number | null;
};
export type SalidaTransporteSumAggregateOutputType = {
    capacidad: number | null;
    minimoPasajeros: number | null;
    precioPen: runtime.Decimal | null;
    precioUsd: runtime.Decimal | null;
    porcentajeAdelanto: number | null;
};
export type SalidaTransporteMinAggregateOutputType = {
    id: string | null;
    transporteId: string | null;
    vehiculoId: string | null;
    fechaHoraSalida: Date | null;
    fechaHoraLlegada: Date | null;
    capacidad: number | null;
    minimoPasajeros: number | null;
    precioPen: runtime.Decimal | null;
    precioUsd: runtime.Decimal | null;
    permiteAdelanto: boolean | null;
    porcentajeAdelanto: number | null;
    estado: $Enums.EstadoSalida | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type SalidaTransporteMaxAggregateOutputType = {
    id: string | null;
    transporteId: string | null;
    vehiculoId: string | null;
    fechaHoraSalida: Date | null;
    fechaHoraLlegada: Date | null;
    capacidad: number | null;
    minimoPasajeros: number | null;
    precioPen: runtime.Decimal | null;
    precioUsd: runtime.Decimal | null;
    permiteAdelanto: boolean | null;
    porcentajeAdelanto: number | null;
    estado: $Enums.EstadoSalida | null;
    creadoEn: Date | null;
    actualizadoEn: Date | null;
};
export type SalidaTransporteCountAggregateOutputType = {
    id: number;
    transporteId: number;
    vehiculoId: number;
    fechaHoraSalida: number;
    fechaHoraLlegada: number;
    capacidad: number;
    minimoPasajeros: number;
    precioPen: number;
    precioUsd: number;
    permiteAdelanto: number;
    porcentajeAdelanto: number;
    estado: number;
    creadoEn: number;
    actualizadoEn: number;
    _all: number;
};
export type SalidaTransporteAvgAggregateInputType = {
    capacidad?: true;
    minimoPasajeros?: true;
    precioPen?: true;
    precioUsd?: true;
    porcentajeAdelanto?: true;
};
export type SalidaTransporteSumAggregateInputType = {
    capacidad?: true;
    minimoPasajeros?: true;
    precioPen?: true;
    precioUsd?: true;
    porcentajeAdelanto?: true;
};
export type SalidaTransporteMinAggregateInputType = {
    id?: true;
    transporteId?: true;
    vehiculoId?: true;
    fechaHoraSalida?: true;
    fechaHoraLlegada?: true;
    capacidad?: true;
    minimoPasajeros?: true;
    precioPen?: true;
    precioUsd?: true;
    permiteAdelanto?: true;
    porcentajeAdelanto?: true;
    estado?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type SalidaTransporteMaxAggregateInputType = {
    id?: true;
    transporteId?: true;
    vehiculoId?: true;
    fechaHoraSalida?: true;
    fechaHoraLlegada?: true;
    capacidad?: true;
    minimoPasajeros?: true;
    precioPen?: true;
    precioUsd?: true;
    permiteAdelanto?: true;
    porcentajeAdelanto?: true;
    estado?: true;
    creadoEn?: true;
    actualizadoEn?: true;
};
export type SalidaTransporteCountAggregateInputType = {
    id?: true;
    transporteId?: true;
    vehiculoId?: true;
    fechaHoraSalida?: true;
    fechaHoraLlegada?: true;
    capacidad?: true;
    minimoPasajeros?: true;
    precioPen?: true;
    precioUsd?: true;
    permiteAdelanto?: true;
    porcentajeAdelanto?: true;
    estado?: true;
    creadoEn?: true;
    actualizadoEn?: true;
    _all?: true;
};
export type SalidaTransporteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalidaTransporteWhereInput;
    orderBy?: Prisma.SalidaTransporteOrderByWithRelationInput | Prisma.SalidaTransporteOrderByWithRelationInput[];
    cursor?: Prisma.SalidaTransporteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SalidaTransporteCountAggregateInputType;
    _avg?: SalidaTransporteAvgAggregateInputType;
    _sum?: SalidaTransporteSumAggregateInputType;
    _min?: SalidaTransporteMinAggregateInputType;
    _max?: SalidaTransporteMaxAggregateInputType;
};
export type GetSalidaTransporteAggregateType<T extends SalidaTransporteAggregateArgs> = {
    [P in keyof T & keyof AggregateSalidaTransporte]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSalidaTransporte[P]> : Prisma.GetScalarType<T[P], AggregateSalidaTransporte[P]>;
};
export type SalidaTransporteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalidaTransporteWhereInput;
    orderBy?: Prisma.SalidaTransporteOrderByWithAggregationInput | Prisma.SalidaTransporteOrderByWithAggregationInput[];
    by: Prisma.SalidaTransporteScalarFieldEnum[] | Prisma.SalidaTransporteScalarFieldEnum;
    having?: Prisma.SalidaTransporteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SalidaTransporteCountAggregateInputType | true;
    _avg?: SalidaTransporteAvgAggregateInputType;
    _sum?: SalidaTransporteSumAggregateInputType;
    _min?: SalidaTransporteMinAggregateInputType;
    _max?: SalidaTransporteMaxAggregateInputType;
};
export type SalidaTransporteGroupByOutputType = {
    id: string;
    transporteId: string;
    vehiculoId: string | null;
    fechaHoraSalida: Date;
    fechaHoraLlegada: Date | null;
    capacidad: number;
    minimoPasajeros: number;
    precioPen: runtime.Decimal;
    precioUsd: runtime.Decimal;
    permiteAdelanto: boolean;
    porcentajeAdelanto: number;
    estado: $Enums.EstadoSalida;
    creadoEn: Date;
    actualizadoEn: Date;
    _count: SalidaTransporteCountAggregateOutputType | null;
    _avg: SalidaTransporteAvgAggregateOutputType | null;
    _sum: SalidaTransporteSumAggregateOutputType | null;
    _min: SalidaTransporteMinAggregateOutputType | null;
    _max: SalidaTransporteMaxAggregateOutputType | null;
};
export type GetSalidaTransporteGroupByPayload<T extends SalidaTransporteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SalidaTransporteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SalidaTransporteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SalidaTransporteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SalidaTransporteGroupByOutputType[P]>;
}>>;
export type SalidaTransporteWhereInput = {
    AND?: Prisma.SalidaTransporteWhereInput | Prisma.SalidaTransporteWhereInput[];
    OR?: Prisma.SalidaTransporteWhereInput[];
    NOT?: Prisma.SalidaTransporteWhereInput | Prisma.SalidaTransporteWhereInput[];
    id?: Prisma.UuidFilter<"SalidaTransporte"> | string;
    transporteId?: Prisma.UuidFilter<"SalidaTransporte"> | string;
    vehiculoId?: Prisma.UuidNullableFilter<"SalidaTransporte"> | string | null;
    fechaHoraSalida?: Prisma.DateTimeFilter<"SalidaTransporte"> | Date | string;
    fechaHoraLlegada?: Prisma.DateTimeNullableFilter<"SalidaTransporte"> | Date | string | null;
    capacidad?: Prisma.IntFilter<"SalidaTransporte"> | number;
    minimoPasajeros?: Prisma.IntFilter<"SalidaTransporte"> | number;
    precioPen?: Prisma.DecimalFilter<"SalidaTransporte"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd?: Prisma.DecimalFilter<"SalidaTransporte"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: Prisma.BoolFilter<"SalidaTransporte"> | boolean;
    porcentajeAdelanto?: Prisma.IntFilter<"SalidaTransporte"> | number;
    estado?: Prisma.EnumEstadoSalidaFilter<"SalidaTransporte"> | $Enums.EstadoSalida;
    creadoEn?: Prisma.DateTimeFilter<"SalidaTransporte"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"SalidaTransporte"> | Date | string;
    transporte?: Prisma.XOR<Prisma.TransporteScalarRelationFilter, Prisma.TransporteWhereInput>;
    vehiculo?: Prisma.XOR<Prisma.VehiculoNullableScalarRelationFilter, Prisma.VehiculoWhereInput> | null;
    reservas?: Prisma.ReservaListRelationFilter;
};
export type SalidaTransporteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    transporteId?: Prisma.SortOrder;
    vehiculoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    fechaHoraSalida?: Prisma.SortOrder;
    fechaHoraLlegada?: Prisma.SortOrderInput | Prisma.SortOrder;
    capacidad?: Prisma.SortOrder;
    minimoPasajeros?: Prisma.SortOrder;
    precioPen?: Prisma.SortOrder;
    precioUsd?: Prisma.SortOrder;
    permiteAdelanto?: Prisma.SortOrder;
    porcentajeAdelanto?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    transporte?: Prisma.TransporteOrderByWithRelationInput;
    vehiculo?: Prisma.VehiculoOrderByWithRelationInput;
    reservas?: Prisma.ReservaOrderByRelationAggregateInput;
};
export type SalidaTransporteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SalidaTransporteWhereInput | Prisma.SalidaTransporteWhereInput[];
    OR?: Prisma.SalidaTransporteWhereInput[];
    NOT?: Prisma.SalidaTransporteWhereInput | Prisma.SalidaTransporteWhereInput[];
    transporteId?: Prisma.UuidFilter<"SalidaTransporte"> | string;
    vehiculoId?: Prisma.UuidNullableFilter<"SalidaTransporte"> | string | null;
    fechaHoraSalida?: Prisma.DateTimeFilter<"SalidaTransporte"> | Date | string;
    fechaHoraLlegada?: Prisma.DateTimeNullableFilter<"SalidaTransporte"> | Date | string | null;
    capacidad?: Prisma.IntFilter<"SalidaTransporte"> | number;
    minimoPasajeros?: Prisma.IntFilter<"SalidaTransporte"> | number;
    precioPen?: Prisma.DecimalFilter<"SalidaTransporte"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd?: Prisma.DecimalFilter<"SalidaTransporte"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: Prisma.BoolFilter<"SalidaTransporte"> | boolean;
    porcentajeAdelanto?: Prisma.IntFilter<"SalidaTransporte"> | number;
    estado?: Prisma.EnumEstadoSalidaFilter<"SalidaTransporte"> | $Enums.EstadoSalida;
    creadoEn?: Prisma.DateTimeFilter<"SalidaTransporte"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"SalidaTransporte"> | Date | string;
    transporte?: Prisma.XOR<Prisma.TransporteScalarRelationFilter, Prisma.TransporteWhereInput>;
    vehiculo?: Prisma.XOR<Prisma.VehiculoNullableScalarRelationFilter, Prisma.VehiculoWhereInput> | null;
    reservas?: Prisma.ReservaListRelationFilter;
}, "id">;
export type SalidaTransporteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    transporteId?: Prisma.SortOrder;
    vehiculoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    fechaHoraSalida?: Prisma.SortOrder;
    fechaHoraLlegada?: Prisma.SortOrderInput | Prisma.SortOrder;
    capacidad?: Prisma.SortOrder;
    minimoPasajeros?: Prisma.SortOrder;
    precioPen?: Prisma.SortOrder;
    precioUsd?: Prisma.SortOrder;
    permiteAdelanto?: Prisma.SortOrder;
    porcentajeAdelanto?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    _count?: Prisma.SalidaTransporteCountOrderByAggregateInput;
    _avg?: Prisma.SalidaTransporteAvgOrderByAggregateInput;
    _max?: Prisma.SalidaTransporteMaxOrderByAggregateInput;
    _min?: Prisma.SalidaTransporteMinOrderByAggregateInput;
    _sum?: Prisma.SalidaTransporteSumOrderByAggregateInput;
};
export type SalidaTransporteScalarWhereWithAggregatesInput = {
    AND?: Prisma.SalidaTransporteScalarWhereWithAggregatesInput | Prisma.SalidaTransporteScalarWhereWithAggregatesInput[];
    OR?: Prisma.SalidaTransporteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SalidaTransporteScalarWhereWithAggregatesInput | Prisma.SalidaTransporteScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"SalidaTransporte"> | string;
    transporteId?: Prisma.UuidWithAggregatesFilter<"SalidaTransporte"> | string;
    vehiculoId?: Prisma.UuidNullableWithAggregatesFilter<"SalidaTransporte"> | string | null;
    fechaHoraSalida?: Prisma.DateTimeWithAggregatesFilter<"SalidaTransporte"> | Date | string;
    fechaHoraLlegada?: Prisma.DateTimeNullableWithAggregatesFilter<"SalidaTransporte"> | Date | string | null;
    capacidad?: Prisma.IntWithAggregatesFilter<"SalidaTransporte"> | number;
    minimoPasajeros?: Prisma.IntWithAggregatesFilter<"SalidaTransporte"> | number;
    precioPen?: Prisma.DecimalWithAggregatesFilter<"SalidaTransporte"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd?: Prisma.DecimalWithAggregatesFilter<"SalidaTransporte"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: Prisma.BoolWithAggregatesFilter<"SalidaTransporte"> | boolean;
    porcentajeAdelanto?: Prisma.IntWithAggregatesFilter<"SalidaTransporte"> | number;
    estado?: Prisma.EnumEstadoSalidaWithAggregatesFilter<"SalidaTransporte"> | $Enums.EstadoSalida;
    creadoEn?: Prisma.DateTimeWithAggregatesFilter<"SalidaTransporte"> | Date | string;
    actualizadoEn?: Prisma.DateTimeWithAggregatesFilter<"SalidaTransporte"> | Date | string;
};
export type SalidaTransporteCreateInput = {
    id?: string;
    fechaHoraSalida: Date | string;
    fechaHoraLlegada?: Date | string | null;
    capacidad: number;
    minimoPasajeros?: number;
    precioPen: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd: runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: boolean;
    porcentajeAdelanto?: number;
    estado?: $Enums.EstadoSalida;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    transporte: Prisma.TransporteCreateNestedOneWithoutSalidasInput;
    vehiculo?: Prisma.VehiculoCreateNestedOneWithoutSalidasInput;
    reservas?: Prisma.ReservaCreateNestedManyWithoutSalidaTransporteInput;
};
export type SalidaTransporteUncheckedCreateInput = {
    id?: string;
    transporteId: string;
    vehiculoId?: string | null;
    fechaHoraSalida: Date | string;
    fechaHoraLlegada?: Date | string | null;
    capacidad: number;
    minimoPasajeros?: number;
    precioPen: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd: runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: boolean;
    porcentajeAdelanto?: number;
    estado?: $Enums.EstadoSalida;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    reservas?: Prisma.ReservaUncheckedCreateNestedManyWithoutSalidaTransporteInput;
};
export type SalidaTransporteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaHoraSalida?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaHoraLlegada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    capacidad?: Prisma.IntFieldUpdateOperationsInput | number;
    minimoPasajeros?: Prisma.IntFieldUpdateOperationsInput | number;
    precioPen?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    porcentajeAdelanto?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoSalidaFieldUpdateOperationsInput | $Enums.EstadoSalida;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transporte?: Prisma.TransporteUpdateOneRequiredWithoutSalidasNestedInput;
    vehiculo?: Prisma.VehiculoUpdateOneWithoutSalidasNestedInput;
    reservas?: Prisma.ReservaUpdateManyWithoutSalidaTransporteNestedInput;
};
export type SalidaTransporteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transporteId?: Prisma.StringFieldUpdateOperationsInput | string;
    vehiculoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaHoraSalida?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaHoraLlegada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    capacidad?: Prisma.IntFieldUpdateOperationsInput | number;
    minimoPasajeros?: Prisma.IntFieldUpdateOperationsInput | number;
    precioPen?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    porcentajeAdelanto?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoSalidaFieldUpdateOperationsInput | $Enums.EstadoSalida;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reservas?: Prisma.ReservaUncheckedUpdateManyWithoutSalidaTransporteNestedInput;
};
export type SalidaTransporteCreateManyInput = {
    id?: string;
    transporteId: string;
    vehiculoId?: string | null;
    fechaHoraSalida: Date | string;
    fechaHoraLlegada?: Date | string | null;
    capacidad: number;
    minimoPasajeros?: number;
    precioPen: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd: runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: boolean;
    porcentajeAdelanto?: number;
    estado?: $Enums.EstadoSalida;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type SalidaTransporteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaHoraSalida?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaHoraLlegada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    capacidad?: Prisma.IntFieldUpdateOperationsInput | number;
    minimoPasajeros?: Prisma.IntFieldUpdateOperationsInput | number;
    precioPen?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    porcentajeAdelanto?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoSalidaFieldUpdateOperationsInput | $Enums.EstadoSalida;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalidaTransporteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transporteId?: Prisma.StringFieldUpdateOperationsInput | string;
    vehiculoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaHoraSalida?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaHoraLlegada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    capacidad?: Prisma.IntFieldUpdateOperationsInput | number;
    minimoPasajeros?: Prisma.IntFieldUpdateOperationsInput | number;
    precioPen?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    porcentajeAdelanto?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoSalidaFieldUpdateOperationsInput | $Enums.EstadoSalida;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalidaTransporteListRelationFilter = {
    every?: Prisma.SalidaTransporteWhereInput;
    some?: Prisma.SalidaTransporteWhereInput;
    none?: Prisma.SalidaTransporteWhereInput;
};
export type SalidaTransporteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SalidaTransporteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    transporteId?: Prisma.SortOrder;
    vehiculoId?: Prisma.SortOrder;
    fechaHoraSalida?: Prisma.SortOrder;
    fechaHoraLlegada?: Prisma.SortOrder;
    capacidad?: Prisma.SortOrder;
    minimoPasajeros?: Prisma.SortOrder;
    precioPen?: Prisma.SortOrder;
    precioUsd?: Prisma.SortOrder;
    permiteAdelanto?: Prisma.SortOrder;
    porcentajeAdelanto?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type SalidaTransporteAvgOrderByAggregateInput = {
    capacidad?: Prisma.SortOrder;
    minimoPasajeros?: Prisma.SortOrder;
    precioPen?: Prisma.SortOrder;
    precioUsd?: Prisma.SortOrder;
    porcentajeAdelanto?: Prisma.SortOrder;
};
export type SalidaTransporteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    transporteId?: Prisma.SortOrder;
    vehiculoId?: Prisma.SortOrder;
    fechaHoraSalida?: Prisma.SortOrder;
    fechaHoraLlegada?: Prisma.SortOrder;
    capacidad?: Prisma.SortOrder;
    minimoPasajeros?: Prisma.SortOrder;
    precioPen?: Prisma.SortOrder;
    precioUsd?: Prisma.SortOrder;
    permiteAdelanto?: Prisma.SortOrder;
    porcentajeAdelanto?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type SalidaTransporteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    transporteId?: Prisma.SortOrder;
    vehiculoId?: Prisma.SortOrder;
    fechaHoraSalida?: Prisma.SortOrder;
    fechaHoraLlegada?: Prisma.SortOrder;
    capacidad?: Prisma.SortOrder;
    minimoPasajeros?: Prisma.SortOrder;
    precioPen?: Prisma.SortOrder;
    precioUsd?: Prisma.SortOrder;
    permiteAdelanto?: Prisma.SortOrder;
    porcentajeAdelanto?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
};
export type SalidaTransporteSumOrderByAggregateInput = {
    capacidad?: Prisma.SortOrder;
    minimoPasajeros?: Prisma.SortOrder;
    precioPen?: Prisma.SortOrder;
    precioUsd?: Prisma.SortOrder;
    porcentajeAdelanto?: Prisma.SortOrder;
};
export type SalidaTransporteNullableScalarRelationFilter = {
    is?: Prisma.SalidaTransporteWhereInput | null;
    isNot?: Prisma.SalidaTransporteWhereInput | null;
};
export type SalidaTransporteCreateNestedManyWithoutTransporteInput = {
    create?: Prisma.XOR<Prisma.SalidaTransporteCreateWithoutTransporteInput, Prisma.SalidaTransporteUncheckedCreateWithoutTransporteInput> | Prisma.SalidaTransporteCreateWithoutTransporteInput[] | Prisma.SalidaTransporteUncheckedCreateWithoutTransporteInput[];
    connectOrCreate?: Prisma.SalidaTransporteCreateOrConnectWithoutTransporteInput | Prisma.SalidaTransporteCreateOrConnectWithoutTransporteInput[];
    createMany?: Prisma.SalidaTransporteCreateManyTransporteInputEnvelope;
    connect?: Prisma.SalidaTransporteWhereUniqueInput | Prisma.SalidaTransporteWhereUniqueInput[];
};
export type SalidaTransporteUncheckedCreateNestedManyWithoutTransporteInput = {
    create?: Prisma.XOR<Prisma.SalidaTransporteCreateWithoutTransporteInput, Prisma.SalidaTransporteUncheckedCreateWithoutTransporteInput> | Prisma.SalidaTransporteCreateWithoutTransporteInput[] | Prisma.SalidaTransporteUncheckedCreateWithoutTransporteInput[];
    connectOrCreate?: Prisma.SalidaTransporteCreateOrConnectWithoutTransporteInput | Prisma.SalidaTransporteCreateOrConnectWithoutTransporteInput[];
    createMany?: Prisma.SalidaTransporteCreateManyTransporteInputEnvelope;
    connect?: Prisma.SalidaTransporteWhereUniqueInput | Prisma.SalidaTransporteWhereUniqueInput[];
};
export type SalidaTransporteUpdateManyWithoutTransporteNestedInput = {
    create?: Prisma.XOR<Prisma.SalidaTransporteCreateWithoutTransporteInput, Prisma.SalidaTransporteUncheckedCreateWithoutTransporteInput> | Prisma.SalidaTransporteCreateWithoutTransporteInput[] | Prisma.SalidaTransporteUncheckedCreateWithoutTransporteInput[];
    connectOrCreate?: Prisma.SalidaTransporteCreateOrConnectWithoutTransporteInput | Prisma.SalidaTransporteCreateOrConnectWithoutTransporteInput[];
    upsert?: Prisma.SalidaTransporteUpsertWithWhereUniqueWithoutTransporteInput | Prisma.SalidaTransporteUpsertWithWhereUniqueWithoutTransporteInput[];
    createMany?: Prisma.SalidaTransporteCreateManyTransporteInputEnvelope;
    set?: Prisma.SalidaTransporteWhereUniqueInput | Prisma.SalidaTransporteWhereUniqueInput[];
    disconnect?: Prisma.SalidaTransporteWhereUniqueInput | Prisma.SalidaTransporteWhereUniqueInput[];
    delete?: Prisma.SalidaTransporteWhereUniqueInput | Prisma.SalidaTransporteWhereUniqueInput[];
    connect?: Prisma.SalidaTransporteWhereUniqueInput | Prisma.SalidaTransporteWhereUniqueInput[];
    update?: Prisma.SalidaTransporteUpdateWithWhereUniqueWithoutTransporteInput | Prisma.SalidaTransporteUpdateWithWhereUniqueWithoutTransporteInput[];
    updateMany?: Prisma.SalidaTransporteUpdateManyWithWhereWithoutTransporteInput | Prisma.SalidaTransporteUpdateManyWithWhereWithoutTransporteInput[];
    deleteMany?: Prisma.SalidaTransporteScalarWhereInput | Prisma.SalidaTransporteScalarWhereInput[];
};
export type SalidaTransporteUncheckedUpdateManyWithoutTransporteNestedInput = {
    create?: Prisma.XOR<Prisma.SalidaTransporteCreateWithoutTransporteInput, Prisma.SalidaTransporteUncheckedCreateWithoutTransporteInput> | Prisma.SalidaTransporteCreateWithoutTransporteInput[] | Prisma.SalidaTransporteUncheckedCreateWithoutTransporteInput[];
    connectOrCreate?: Prisma.SalidaTransporteCreateOrConnectWithoutTransporteInput | Prisma.SalidaTransporteCreateOrConnectWithoutTransporteInput[];
    upsert?: Prisma.SalidaTransporteUpsertWithWhereUniqueWithoutTransporteInput | Prisma.SalidaTransporteUpsertWithWhereUniqueWithoutTransporteInput[];
    createMany?: Prisma.SalidaTransporteCreateManyTransporteInputEnvelope;
    set?: Prisma.SalidaTransporteWhereUniqueInput | Prisma.SalidaTransporteWhereUniqueInput[];
    disconnect?: Prisma.SalidaTransporteWhereUniqueInput | Prisma.SalidaTransporteWhereUniqueInput[];
    delete?: Prisma.SalidaTransporteWhereUniqueInput | Prisma.SalidaTransporteWhereUniqueInput[];
    connect?: Prisma.SalidaTransporteWhereUniqueInput | Prisma.SalidaTransporteWhereUniqueInput[];
    update?: Prisma.SalidaTransporteUpdateWithWhereUniqueWithoutTransporteInput | Prisma.SalidaTransporteUpdateWithWhereUniqueWithoutTransporteInput[];
    updateMany?: Prisma.SalidaTransporteUpdateManyWithWhereWithoutTransporteInput | Prisma.SalidaTransporteUpdateManyWithWhereWithoutTransporteInput[];
    deleteMany?: Prisma.SalidaTransporteScalarWhereInput | Prisma.SalidaTransporteScalarWhereInput[];
};
export type SalidaTransporteCreateNestedManyWithoutVehiculoInput = {
    create?: Prisma.XOR<Prisma.SalidaTransporteCreateWithoutVehiculoInput, Prisma.SalidaTransporteUncheckedCreateWithoutVehiculoInput> | Prisma.SalidaTransporteCreateWithoutVehiculoInput[] | Prisma.SalidaTransporteUncheckedCreateWithoutVehiculoInput[];
    connectOrCreate?: Prisma.SalidaTransporteCreateOrConnectWithoutVehiculoInput | Prisma.SalidaTransporteCreateOrConnectWithoutVehiculoInput[];
    createMany?: Prisma.SalidaTransporteCreateManyVehiculoInputEnvelope;
    connect?: Prisma.SalidaTransporteWhereUniqueInput | Prisma.SalidaTransporteWhereUniqueInput[];
};
export type SalidaTransporteUncheckedCreateNestedManyWithoutVehiculoInput = {
    create?: Prisma.XOR<Prisma.SalidaTransporteCreateWithoutVehiculoInput, Prisma.SalidaTransporteUncheckedCreateWithoutVehiculoInput> | Prisma.SalidaTransporteCreateWithoutVehiculoInput[] | Prisma.SalidaTransporteUncheckedCreateWithoutVehiculoInput[];
    connectOrCreate?: Prisma.SalidaTransporteCreateOrConnectWithoutVehiculoInput | Prisma.SalidaTransporteCreateOrConnectWithoutVehiculoInput[];
    createMany?: Prisma.SalidaTransporteCreateManyVehiculoInputEnvelope;
    connect?: Prisma.SalidaTransporteWhereUniqueInput | Prisma.SalidaTransporteWhereUniqueInput[];
};
export type SalidaTransporteUpdateManyWithoutVehiculoNestedInput = {
    create?: Prisma.XOR<Prisma.SalidaTransporteCreateWithoutVehiculoInput, Prisma.SalidaTransporteUncheckedCreateWithoutVehiculoInput> | Prisma.SalidaTransporteCreateWithoutVehiculoInput[] | Prisma.SalidaTransporteUncheckedCreateWithoutVehiculoInput[];
    connectOrCreate?: Prisma.SalidaTransporteCreateOrConnectWithoutVehiculoInput | Prisma.SalidaTransporteCreateOrConnectWithoutVehiculoInput[];
    upsert?: Prisma.SalidaTransporteUpsertWithWhereUniqueWithoutVehiculoInput | Prisma.SalidaTransporteUpsertWithWhereUniqueWithoutVehiculoInput[];
    createMany?: Prisma.SalidaTransporteCreateManyVehiculoInputEnvelope;
    set?: Prisma.SalidaTransporteWhereUniqueInput | Prisma.SalidaTransporteWhereUniqueInput[];
    disconnect?: Prisma.SalidaTransporteWhereUniqueInput | Prisma.SalidaTransporteWhereUniqueInput[];
    delete?: Prisma.SalidaTransporteWhereUniqueInput | Prisma.SalidaTransporteWhereUniqueInput[];
    connect?: Prisma.SalidaTransporteWhereUniqueInput | Prisma.SalidaTransporteWhereUniqueInput[];
    update?: Prisma.SalidaTransporteUpdateWithWhereUniqueWithoutVehiculoInput | Prisma.SalidaTransporteUpdateWithWhereUniqueWithoutVehiculoInput[];
    updateMany?: Prisma.SalidaTransporteUpdateManyWithWhereWithoutVehiculoInput | Prisma.SalidaTransporteUpdateManyWithWhereWithoutVehiculoInput[];
    deleteMany?: Prisma.SalidaTransporteScalarWhereInput | Prisma.SalidaTransporteScalarWhereInput[];
};
export type SalidaTransporteUncheckedUpdateManyWithoutVehiculoNestedInput = {
    create?: Prisma.XOR<Prisma.SalidaTransporteCreateWithoutVehiculoInput, Prisma.SalidaTransporteUncheckedCreateWithoutVehiculoInput> | Prisma.SalidaTransporteCreateWithoutVehiculoInput[] | Prisma.SalidaTransporteUncheckedCreateWithoutVehiculoInput[];
    connectOrCreate?: Prisma.SalidaTransporteCreateOrConnectWithoutVehiculoInput | Prisma.SalidaTransporteCreateOrConnectWithoutVehiculoInput[];
    upsert?: Prisma.SalidaTransporteUpsertWithWhereUniqueWithoutVehiculoInput | Prisma.SalidaTransporteUpsertWithWhereUniqueWithoutVehiculoInput[];
    createMany?: Prisma.SalidaTransporteCreateManyVehiculoInputEnvelope;
    set?: Prisma.SalidaTransporteWhereUniqueInput | Prisma.SalidaTransporteWhereUniqueInput[];
    disconnect?: Prisma.SalidaTransporteWhereUniqueInput | Prisma.SalidaTransporteWhereUniqueInput[];
    delete?: Prisma.SalidaTransporteWhereUniqueInput | Prisma.SalidaTransporteWhereUniqueInput[];
    connect?: Prisma.SalidaTransporteWhereUniqueInput | Prisma.SalidaTransporteWhereUniqueInput[];
    update?: Prisma.SalidaTransporteUpdateWithWhereUniqueWithoutVehiculoInput | Prisma.SalidaTransporteUpdateWithWhereUniqueWithoutVehiculoInput[];
    updateMany?: Prisma.SalidaTransporteUpdateManyWithWhereWithoutVehiculoInput | Prisma.SalidaTransporteUpdateManyWithWhereWithoutVehiculoInput[];
    deleteMany?: Prisma.SalidaTransporteScalarWhereInput | Prisma.SalidaTransporteScalarWhereInput[];
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type EnumEstadoSalidaFieldUpdateOperationsInput = {
    set?: $Enums.EstadoSalida;
};
export type SalidaTransporteCreateNestedOneWithoutReservasInput = {
    create?: Prisma.XOR<Prisma.SalidaTransporteCreateWithoutReservasInput, Prisma.SalidaTransporteUncheckedCreateWithoutReservasInput>;
    connectOrCreate?: Prisma.SalidaTransporteCreateOrConnectWithoutReservasInput;
    connect?: Prisma.SalidaTransporteWhereUniqueInput;
};
export type SalidaTransporteUpdateOneWithoutReservasNestedInput = {
    create?: Prisma.XOR<Prisma.SalidaTransporteCreateWithoutReservasInput, Prisma.SalidaTransporteUncheckedCreateWithoutReservasInput>;
    connectOrCreate?: Prisma.SalidaTransporteCreateOrConnectWithoutReservasInput;
    upsert?: Prisma.SalidaTransporteUpsertWithoutReservasInput;
    disconnect?: Prisma.SalidaTransporteWhereInput | boolean;
    delete?: Prisma.SalidaTransporteWhereInput | boolean;
    connect?: Prisma.SalidaTransporteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SalidaTransporteUpdateToOneWithWhereWithoutReservasInput, Prisma.SalidaTransporteUpdateWithoutReservasInput>, Prisma.SalidaTransporteUncheckedUpdateWithoutReservasInput>;
};
export type SalidaTransporteCreateWithoutTransporteInput = {
    id?: string;
    fechaHoraSalida: Date | string;
    fechaHoraLlegada?: Date | string | null;
    capacidad: number;
    minimoPasajeros?: number;
    precioPen: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd: runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: boolean;
    porcentajeAdelanto?: number;
    estado?: $Enums.EstadoSalida;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    vehiculo?: Prisma.VehiculoCreateNestedOneWithoutSalidasInput;
    reservas?: Prisma.ReservaCreateNestedManyWithoutSalidaTransporteInput;
};
export type SalidaTransporteUncheckedCreateWithoutTransporteInput = {
    id?: string;
    vehiculoId?: string | null;
    fechaHoraSalida: Date | string;
    fechaHoraLlegada?: Date | string | null;
    capacidad: number;
    minimoPasajeros?: number;
    precioPen: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd: runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: boolean;
    porcentajeAdelanto?: number;
    estado?: $Enums.EstadoSalida;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    reservas?: Prisma.ReservaUncheckedCreateNestedManyWithoutSalidaTransporteInput;
};
export type SalidaTransporteCreateOrConnectWithoutTransporteInput = {
    where: Prisma.SalidaTransporteWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalidaTransporteCreateWithoutTransporteInput, Prisma.SalidaTransporteUncheckedCreateWithoutTransporteInput>;
};
export type SalidaTransporteCreateManyTransporteInputEnvelope = {
    data: Prisma.SalidaTransporteCreateManyTransporteInput | Prisma.SalidaTransporteCreateManyTransporteInput[];
    skipDuplicates?: boolean;
};
export type SalidaTransporteUpsertWithWhereUniqueWithoutTransporteInput = {
    where: Prisma.SalidaTransporteWhereUniqueInput;
    update: Prisma.XOR<Prisma.SalidaTransporteUpdateWithoutTransporteInput, Prisma.SalidaTransporteUncheckedUpdateWithoutTransporteInput>;
    create: Prisma.XOR<Prisma.SalidaTransporteCreateWithoutTransporteInput, Prisma.SalidaTransporteUncheckedCreateWithoutTransporteInput>;
};
export type SalidaTransporteUpdateWithWhereUniqueWithoutTransporteInput = {
    where: Prisma.SalidaTransporteWhereUniqueInput;
    data: Prisma.XOR<Prisma.SalidaTransporteUpdateWithoutTransporteInput, Prisma.SalidaTransporteUncheckedUpdateWithoutTransporteInput>;
};
export type SalidaTransporteUpdateManyWithWhereWithoutTransporteInput = {
    where: Prisma.SalidaTransporteScalarWhereInput;
    data: Prisma.XOR<Prisma.SalidaTransporteUpdateManyMutationInput, Prisma.SalidaTransporteUncheckedUpdateManyWithoutTransporteInput>;
};
export type SalidaTransporteScalarWhereInput = {
    AND?: Prisma.SalidaTransporteScalarWhereInput | Prisma.SalidaTransporteScalarWhereInput[];
    OR?: Prisma.SalidaTransporteScalarWhereInput[];
    NOT?: Prisma.SalidaTransporteScalarWhereInput | Prisma.SalidaTransporteScalarWhereInput[];
    id?: Prisma.UuidFilter<"SalidaTransporte"> | string;
    transporteId?: Prisma.UuidFilter<"SalidaTransporte"> | string;
    vehiculoId?: Prisma.UuidNullableFilter<"SalidaTransporte"> | string | null;
    fechaHoraSalida?: Prisma.DateTimeFilter<"SalidaTransporte"> | Date | string;
    fechaHoraLlegada?: Prisma.DateTimeNullableFilter<"SalidaTransporte"> | Date | string | null;
    capacidad?: Prisma.IntFilter<"SalidaTransporte"> | number;
    minimoPasajeros?: Prisma.IntFilter<"SalidaTransporte"> | number;
    precioPen?: Prisma.DecimalFilter<"SalidaTransporte"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd?: Prisma.DecimalFilter<"SalidaTransporte"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: Prisma.BoolFilter<"SalidaTransporte"> | boolean;
    porcentajeAdelanto?: Prisma.IntFilter<"SalidaTransporte"> | number;
    estado?: Prisma.EnumEstadoSalidaFilter<"SalidaTransporte"> | $Enums.EstadoSalida;
    creadoEn?: Prisma.DateTimeFilter<"SalidaTransporte"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"SalidaTransporte"> | Date | string;
};
export type SalidaTransporteCreateWithoutVehiculoInput = {
    id?: string;
    fechaHoraSalida: Date | string;
    fechaHoraLlegada?: Date | string | null;
    capacidad: number;
    minimoPasajeros?: number;
    precioPen: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd: runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: boolean;
    porcentajeAdelanto?: number;
    estado?: $Enums.EstadoSalida;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    transporte: Prisma.TransporteCreateNestedOneWithoutSalidasInput;
    reservas?: Prisma.ReservaCreateNestedManyWithoutSalidaTransporteInput;
};
export type SalidaTransporteUncheckedCreateWithoutVehiculoInput = {
    id?: string;
    transporteId: string;
    fechaHoraSalida: Date | string;
    fechaHoraLlegada?: Date | string | null;
    capacidad: number;
    minimoPasajeros?: number;
    precioPen: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd: runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: boolean;
    porcentajeAdelanto?: number;
    estado?: $Enums.EstadoSalida;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    reservas?: Prisma.ReservaUncheckedCreateNestedManyWithoutSalidaTransporteInput;
};
export type SalidaTransporteCreateOrConnectWithoutVehiculoInput = {
    where: Prisma.SalidaTransporteWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalidaTransporteCreateWithoutVehiculoInput, Prisma.SalidaTransporteUncheckedCreateWithoutVehiculoInput>;
};
export type SalidaTransporteCreateManyVehiculoInputEnvelope = {
    data: Prisma.SalidaTransporteCreateManyVehiculoInput | Prisma.SalidaTransporteCreateManyVehiculoInput[];
    skipDuplicates?: boolean;
};
export type SalidaTransporteUpsertWithWhereUniqueWithoutVehiculoInput = {
    where: Prisma.SalidaTransporteWhereUniqueInput;
    update: Prisma.XOR<Prisma.SalidaTransporteUpdateWithoutVehiculoInput, Prisma.SalidaTransporteUncheckedUpdateWithoutVehiculoInput>;
    create: Prisma.XOR<Prisma.SalidaTransporteCreateWithoutVehiculoInput, Prisma.SalidaTransporteUncheckedCreateWithoutVehiculoInput>;
};
export type SalidaTransporteUpdateWithWhereUniqueWithoutVehiculoInput = {
    where: Prisma.SalidaTransporteWhereUniqueInput;
    data: Prisma.XOR<Prisma.SalidaTransporteUpdateWithoutVehiculoInput, Prisma.SalidaTransporteUncheckedUpdateWithoutVehiculoInput>;
};
export type SalidaTransporteUpdateManyWithWhereWithoutVehiculoInput = {
    where: Prisma.SalidaTransporteScalarWhereInput;
    data: Prisma.XOR<Prisma.SalidaTransporteUpdateManyMutationInput, Prisma.SalidaTransporteUncheckedUpdateManyWithoutVehiculoInput>;
};
export type SalidaTransporteCreateWithoutReservasInput = {
    id?: string;
    fechaHoraSalida: Date | string;
    fechaHoraLlegada?: Date | string | null;
    capacidad: number;
    minimoPasajeros?: number;
    precioPen: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd: runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: boolean;
    porcentajeAdelanto?: number;
    estado?: $Enums.EstadoSalida;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    transporte: Prisma.TransporteCreateNestedOneWithoutSalidasInput;
    vehiculo?: Prisma.VehiculoCreateNestedOneWithoutSalidasInput;
};
export type SalidaTransporteUncheckedCreateWithoutReservasInput = {
    id?: string;
    transporteId: string;
    vehiculoId?: string | null;
    fechaHoraSalida: Date | string;
    fechaHoraLlegada?: Date | string | null;
    capacidad: number;
    minimoPasajeros?: number;
    precioPen: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd: runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: boolean;
    porcentajeAdelanto?: number;
    estado?: $Enums.EstadoSalida;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type SalidaTransporteCreateOrConnectWithoutReservasInput = {
    where: Prisma.SalidaTransporteWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalidaTransporteCreateWithoutReservasInput, Prisma.SalidaTransporteUncheckedCreateWithoutReservasInput>;
};
export type SalidaTransporteUpsertWithoutReservasInput = {
    update: Prisma.XOR<Prisma.SalidaTransporteUpdateWithoutReservasInput, Prisma.SalidaTransporteUncheckedUpdateWithoutReservasInput>;
    create: Prisma.XOR<Prisma.SalidaTransporteCreateWithoutReservasInput, Prisma.SalidaTransporteUncheckedCreateWithoutReservasInput>;
    where?: Prisma.SalidaTransporteWhereInput;
};
export type SalidaTransporteUpdateToOneWithWhereWithoutReservasInput = {
    where?: Prisma.SalidaTransporteWhereInput;
    data: Prisma.XOR<Prisma.SalidaTransporteUpdateWithoutReservasInput, Prisma.SalidaTransporteUncheckedUpdateWithoutReservasInput>;
};
export type SalidaTransporteUpdateWithoutReservasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaHoraSalida?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaHoraLlegada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    capacidad?: Prisma.IntFieldUpdateOperationsInput | number;
    minimoPasajeros?: Prisma.IntFieldUpdateOperationsInput | number;
    precioPen?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    porcentajeAdelanto?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoSalidaFieldUpdateOperationsInput | $Enums.EstadoSalida;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transporte?: Prisma.TransporteUpdateOneRequiredWithoutSalidasNestedInput;
    vehiculo?: Prisma.VehiculoUpdateOneWithoutSalidasNestedInput;
};
export type SalidaTransporteUncheckedUpdateWithoutReservasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transporteId?: Prisma.StringFieldUpdateOperationsInput | string;
    vehiculoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaHoraSalida?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaHoraLlegada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    capacidad?: Prisma.IntFieldUpdateOperationsInput | number;
    minimoPasajeros?: Prisma.IntFieldUpdateOperationsInput | number;
    precioPen?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    porcentajeAdelanto?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoSalidaFieldUpdateOperationsInput | $Enums.EstadoSalida;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalidaTransporteCreateManyTransporteInput = {
    id?: string;
    vehiculoId?: string | null;
    fechaHoraSalida: Date | string;
    fechaHoraLlegada?: Date | string | null;
    capacidad: number;
    minimoPasajeros?: number;
    precioPen: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd: runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: boolean;
    porcentajeAdelanto?: number;
    estado?: $Enums.EstadoSalida;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type SalidaTransporteUpdateWithoutTransporteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaHoraSalida?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaHoraLlegada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    capacidad?: Prisma.IntFieldUpdateOperationsInput | number;
    minimoPasajeros?: Prisma.IntFieldUpdateOperationsInput | number;
    precioPen?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    porcentajeAdelanto?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoSalidaFieldUpdateOperationsInput | $Enums.EstadoSalida;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vehiculo?: Prisma.VehiculoUpdateOneWithoutSalidasNestedInput;
    reservas?: Prisma.ReservaUpdateManyWithoutSalidaTransporteNestedInput;
};
export type SalidaTransporteUncheckedUpdateWithoutTransporteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vehiculoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaHoraSalida?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaHoraLlegada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    capacidad?: Prisma.IntFieldUpdateOperationsInput | number;
    minimoPasajeros?: Prisma.IntFieldUpdateOperationsInput | number;
    precioPen?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    porcentajeAdelanto?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoSalidaFieldUpdateOperationsInput | $Enums.EstadoSalida;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reservas?: Prisma.ReservaUncheckedUpdateManyWithoutSalidaTransporteNestedInput;
};
export type SalidaTransporteUncheckedUpdateManyWithoutTransporteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vehiculoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaHoraSalida?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaHoraLlegada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    capacidad?: Prisma.IntFieldUpdateOperationsInput | number;
    minimoPasajeros?: Prisma.IntFieldUpdateOperationsInput | number;
    precioPen?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    porcentajeAdelanto?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoSalidaFieldUpdateOperationsInput | $Enums.EstadoSalida;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalidaTransporteCreateManyVehiculoInput = {
    id?: string;
    transporteId: string;
    fechaHoraSalida: Date | string;
    fechaHoraLlegada?: Date | string | null;
    capacidad: number;
    minimoPasajeros?: number;
    precioPen: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd: runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: boolean;
    porcentajeAdelanto?: number;
    estado?: $Enums.EstadoSalida;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
};
export type SalidaTransporteUpdateWithoutVehiculoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaHoraSalida?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaHoraLlegada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    capacidad?: Prisma.IntFieldUpdateOperationsInput | number;
    minimoPasajeros?: Prisma.IntFieldUpdateOperationsInput | number;
    precioPen?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    porcentajeAdelanto?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoSalidaFieldUpdateOperationsInput | $Enums.EstadoSalida;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transporte?: Prisma.TransporteUpdateOneRequiredWithoutSalidasNestedInput;
    reservas?: Prisma.ReservaUpdateManyWithoutSalidaTransporteNestedInput;
};
export type SalidaTransporteUncheckedUpdateWithoutVehiculoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transporteId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaHoraSalida?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaHoraLlegada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    capacidad?: Prisma.IntFieldUpdateOperationsInput | number;
    minimoPasajeros?: Prisma.IntFieldUpdateOperationsInput | number;
    precioPen?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    porcentajeAdelanto?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoSalidaFieldUpdateOperationsInput | $Enums.EstadoSalida;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reservas?: Prisma.ReservaUncheckedUpdateManyWithoutSalidaTransporteNestedInput;
};
export type SalidaTransporteUncheckedUpdateManyWithoutVehiculoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transporteId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaHoraSalida?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaHoraLlegada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    capacidad?: Prisma.IntFieldUpdateOperationsInput | number;
    minimoPasajeros?: Prisma.IntFieldUpdateOperationsInput | number;
    precioPen?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    porcentajeAdelanto?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoSalidaFieldUpdateOperationsInput | $Enums.EstadoSalida;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalidaTransporteCountOutputType = {
    reservas: number;
};
export type SalidaTransporteCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reservas?: boolean | SalidaTransporteCountOutputTypeCountReservasArgs;
};
export type SalidaTransporteCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalidaTransporteCountOutputTypeSelect<ExtArgs> | null;
};
export type SalidaTransporteCountOutputTypeCountReservasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReservaWhereInput;
};
export type SalidaTransporteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    transporteId?: boolean;
    vehiculoId?: boolean;
    fechaHoraSalida?: boolean;
    fechaHoraLlegada?: boolean;
    capacidad?: boolean;
    minimoPasajeros?: boolean;
    precioPen?: boolean;
    precioUsd?: boolean;
    permiteAdelanto?: boolean;
    porcentajeAdelanto?: boolean;
    estado?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    transporte?: boolean | Prisma.TransporteDefaultArgs<ExtArgs>;
    vehiculo?: boolean | Prisma.SalidaTransporte$vehiculoArgs<ExtArgs>;
    reservas?: boolean | Prisma.SalidaTransporte$reservasArgs<ExtArgs>;
    _count?: boolean | Prisma.SalidaTransporteCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["salidaTransporte"]>;
export type SalidaTransporteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    transporteId?: boolean;
    vehiculoId?: boolean;
    fechaHoraSalida?: boolean;
    fechaHoraLlegada?: boolean;
    capacidad?: boolean;
    minimoPasajeros?: boolean;
    precioPen?: boolean;
    precioUsd?: boolean;
    permiteAdelanto?: boolean;
    porcentajeAdelanto?: boolean;
    estado?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    transporte?: boolean | Prisma.TransporteDefaultArgs<ExtArgs>;
    vehiculo?: boolean | Prisma.SalidaTransporte$vehiculoArgs<ExtArgs>;
}, ExtArgs["result"]["salidaTransporte"]>;
export type SalidaTransporteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    transporteId?: boolean;
    vehiculoId?: boolean;
    fechaHoraSalida?: boolean;
    fechaHoraLlegada?: boolean;
    capacidad?: boolean;
    minimoPasajeros?: boolean;
    precioPen?: boolean;
    precioUsd?: boolean;
    permiteAdelanto?: boolean;
    porcentajeAdelanto?: boolean;
    estado?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    transporte?: boolean | Prisma.TransporteDefaultArgs<ExtArgs>;
    vehiculo?: boolean | Prisma.SalidaTransporte$vehiculoArgs<ExtArgs>;
}, ExtArgs["result"]["salidaTransporte"]>;
export type SalidaTransporteSelectScalar = {
    id?: boolean;
    transporteId?: boolean;
    vehiculoId?: boolean;
    fechaHoraSalida?: boolean;
    fechaHoraLlegada?: boolean;
    capacidad?: boolean;
    minimoPasajeros?: boolean;
    precioPen?: boolean;
    precioUsd?: boolean;
    permiteAdelanto?: boolean;
    porcentajeAdelanto?: boolean;
    estado?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
};
export type SalidaTransporteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "transporteId" | "vehiculoId" | "fechaHoraSalida" | "fechaHoraLlegada" | "capacidad" | "minimoPasajeros" | "precioPen" | "precioUsd" | "permiteAdelanto" | "porcentajeAdelanto" | "estado" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["salidaTransporte"]>;
export type SalidaTransporteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transporte?: boolean | Prisma.TransporteDefaultArgs<ExtArgs>;
    vehiculo?: boolean | Prisma.SalidaTransporte$vehiculoArgs<ExtArgs>;
    reservas?: boolean | Prisma.SalidaTransporte$reservasArgs<ExtArgs>;
    _count?: boolean | Prisma.SalidaTransporteCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SalidaTransporteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transporte?: boolean | Prisma.TransporteDefaultArgs<ExtArgs>;
    vehiculo?: boolean | Prisma.SalidaTransporte$vehiculoArgs<ExtArgs>;
};
export type SalidaTransporteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transporte?: boolean | Prisma.TransporteDefaultArgs<ExtArgs>;
    vehiculo?: boolean | Prisma.SalidaTransporte$vehiculoArgs<ExtArgs>;
};
export type $SalidaTransportePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SalidaTransporte";
    objects: {
        transporte: Prisma.$TransportePayload<ExtArgs>;
        vehiculo: Prisma.$VehiculoPayload<ExtArgs> | null;
        reservas: Prisma.$ReservaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        transporteId: string;
        vehiculoId: string | null;
        fechaHoraSalida: Date;
        fechaHoraLlegada: Date | null;
        capacidad: number;
        minimoPasajeros: number;
        precioPen: runtime.Decimal;
        precioUsd: runtime.Decimal;
        permiteAdelanto: boolean;
        porcentajeAdelanto: number;
        estado: $Enums.EstadoSalida;
        creadoEn: Date;
        actualizadoEn: Date;
    }, ExtArgs["result"]["salidaTransporte"]>;
    composites: {};
};
export type SalidaTransporteGetPayload<S extends boolean | null | undefined | SalidaTransporteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SalidaTransportePayload, S>;
export type SalidaTransporteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SalidaTransporteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SalidaTransporteCountAggregateInputType | true;
};
export interface SalidaTransporteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SalidaTransporte'];
        meta: {
            name: 'SalidaTransporte';
        };
    };
    findUnique<T extends SalidaTransporteFindUniqueArgs>(args: Prisma.SelectSubset<T, SalidaTransporteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SalidaTransporteClient<runtime.Types.Result.GetResult<Prisma.$SalidaTransportePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SalidaTransporteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SalidaTransporteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SalidaTransporteClient<runtime.Types.Result.GetResult<Prisma.$SalidaTransportePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SalidaTransporteFindFirstArgs>(args?: Prisma.SelectSubset<T, SalidaTransporteFindFirstArgs<ExtArgs>>): Prisma.Prisma__SalidaTransporteClient<runtime.Types.Result.GetResult<Prisma.$SalidaTransportePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SalidaTransporteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SalidaTransporteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SalidaTransporteClient<runtime.Types.Result.GetResult<Prisma.$SalidaTransportePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SalidaTransporteFindManyArgs>(args?: Prisma.SelectSubset<T, SalidaTransporteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalidaTransportePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SalidaTransporteCreateArgs>(args: Prisma.SelectSubset<T, SalidaTransporteCreateArgs<ExtArgs>>): Prisma.Prisma__SalidaTransporteClient<runtime.Types.Result.GetResult<Prisma.$SalidaTransportePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SalidaTransporteCreateManyArgs>(args?: Prisma.SelectSubset<T, SalidaTransporteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SalidaTransporteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SalidaTransporteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalidaTransportePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SalidaTransporteDeleteArgs>(args: Prisma.SelectSubset<T, SalidaTransporteDeleteArgs<ExtArgs>>): Prisma.Prisma__SalidaTransporteClient<runtime.Types.Result.GetResult<Prisma.$SalidaTransportePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SalidaTransporteUpdateArgs>(args: Prisma.SelectSubset<T, SalidaTransporteUpdateArgs<ExtArgs>>): Prisma.Prisma__SalidaTransporteClient<runtime.Types.Result.GetResult<Prisma.$SalidaTransportePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SalidaTransporteDeleteManyArgs>(args?: Prisma.SelectSubset<T, SalidaTransporteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SalidaTransporteUpdateManyArgs>(args: Prisma.SelectSubset<T, SalidaTransporteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SalidaTransporteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SalidaTransporteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalidaTransportePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SalidaTransporteUpsertArgs>(args: Prisma.SelectSubset<T, SalidaTransporteUpsertArgs<ExtArgs>>): Prisma.Prisma__SalidaTransporteClient<runtime.Types.Result.GetResult<Prisma.$SalidaTransportePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SalidaTransporteCountArgs>(args?: Prisma.Subset<T, SalidaTransporteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SalidaTransporteCountAggregateOutputType> : number>;
    aggregate<T extends SalidaTransporteAggregateArgs>(args: Prisma.Subset<T, SalidaTransporteAggregateArgs>): Prisma.PrismaPromise<GetSalidaTransporteAggregateType<T>>;
    groupBy<T extends SalidaTransporteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SalidaTransporteGroupByArgs['orderBy'];
    } : {
        orderBy?: SalidaTransporteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SalidaTransporteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalidaTransporteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SalidaTransporteFieldRefs;
}
export interface Prisma__SalidaTransporteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    transporte<T extends Prisma.TransporteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TransporteDefaultArgs<ExtArgs>>): Prisma.Prisma__TransporteClient<runtime.Types.Result.GetResult<Prisma.$TransportePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    vehiculo<T extends Prisma.SalidaTransporte$vehiculoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SalidaTransporte$vehiculoArgs<ExtArgs>>): Prisma.Prisma__VehiculoClient<runtime.Types.Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    reservas<T extends Prisma.SalidaTransporte$reservasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SalidaTransporte$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SalidaTransporteFieldRefs {
    readonly id: Prisma.FieldRef<"SalidaTransporte", 'String'>;
    readonly transporteId: Prisma.FieldRef<"SalidaTransporte", 'String'>;
    readonly vehiculoId: Prisma.FieldRef<"SalidaTransporte", 'String'>;
    readonly fechaHoraSalida: Prisma.FieldRef<"SalidaTransporte", 'DateTime'>;
    readonly fechaHoraLlegada: Prisma.FieldRef<"SalidaTransporte", 'DateTime'>;
    readonly capacidad: Prisma.FieldRef<"SalidaTransporte", 'Int'>;
    readonly minimoPasajeros: Prisma.FieldRef<"SalidaTransporte", 'Int'>;
    readonly precioPen: Prisma.FieldRef<"SalidaTransporte", 'Decimal'>;
    readonly precioUsd: Prisma.FieldRef<"SalidaTransporte", 'Decimal'>;
    readonly permiteAdelanto: Prisma.FieldRef<"SalidaTransporte", 'Boolean'>;
    readonly porcentajeAdelanto: Prisma.FieldRef<"SalidaTransporte", 'Int'>;
    readonly estado: Prisma.FieldRef<"SalidaTransporte", 'EstadoSalida'>;
    readonly creadoEn: Prisma.FieldRef<"SalidaTransporte", 'DateTime'>;
    readonly actualizadoEn: Prisma.FieldRef<"SalidaTransporte", 'DateTime'>;
}
export type SalidaTransporteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalidaTransporteSelect<ExtArgs> | null;
    omit?: Prisma.SalidaTransporteOmit<ExtArgs> | null;
    include?: Prisma.SalidaTransporteInclude<ExtArgs> | null;
    where: Prisma.SalidaTransporteWhereUniqueInput;
};
export type SalidaTransporteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalidaTransporteSelect<ExtArgs> | null;
    omit?: Prisma.SalidaTransporteOmit<ExtArgs> | null;
    include?: Prisma.SalidaTransporteInclude<ExtArgs> | null;
    where: Prisma.SalidaTransporteWhereUniqueInput;
};
export type SalidaTransporteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalidaTransporteSelect<ExtArgs> | null;
    omit?: Prisma.SalidaTransporteOmit<ExtArgs> | null;
    include?: Prisma.SalidaTransporteInclude<ExtArgs> | null;
    where?: Prisma.SalidaTransporteWhereInput;
    orderBy?: Prisma.SalidaTransporteOrderByWithRelationInput | Prisma.SalidaTransporteOrderByWithRelationInput[];
    cursor?: Prisma.SalidaTransporteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SalidaTransporteScalarFieldEnum | Prisma.SalidaTransporteScalarFieldEnum[];
};
export type SalidaTransporteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalidaTransporteSelect<ExtArgs> | null;
    omit?: Prisma.SalidaTransporteOmit<ExtArgs> | null;
    include?: Prisma.SalidaTransporteInclude<ExtArgs> | null;
    where?: Prisma.SalidaTransporteWhereInput;
    orderBy?: Prisma.SalidaTransporteOrderByWithRelationInput | Prisma.SalidaTransporteOrderByWithRelationInput[];
    cursor?: Prisma.SalidaTransporteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SalidaTransporteScalarFieldEnum | Prisma.SalidaTransporteScalarFieldEnum[];
};
export type SalidaTransporteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalidaTransporteSelect<ExtArgs> | null;
    omit?: Prisma.SalidaTransporteOmit<ExtArgs> | null;
    include?: Prisma.SalidaTransporteInclude<ExtArgs> | null;
    where?: Prisma.SalidaTransporteWhereInput;
    orderBy?: Prisma.SalidaTransporteOrderByWithRelationInput | Prisma.SalidaTransporteOrderByWithRelationInput[];
    cursor?: Prisma.SalidaTransporteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SalidaTransporteScalarFieldEnum | Prisma.SalidaTransporteScalarFieldEnum[];
};
export type SalidaTransporteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalidaTransporteSelect<ExtArgs> | null;
    omit?: Prisma.SalidaTransporteOmit<ExtArgs> | null;
    include?: Prisma.SalidaTransporteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SalidaTransporteCreateInput, Prisma.SalidaTransporteUncheckedCreateInput>;
};
export type SalidaTransporteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SalidaTransporteCreateManyInput | Prisma.SalidaTransporteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SalidaTransporteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalidaTransporteSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SalidaTransporteOmit<ExtArgs> | null;
    data: Prisma.SalidaTransporteCreateManyInput | Prisma.SalidaTransporteCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SalidaTransporteIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SalidaTransporteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalidaTransporteSelect<ExtArgs> | null;
    omit?: Prisma.SalidaTransporteOmit<ExtArgs> | null;
    include?: Prisma.SalidaTransporteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SalidaTransporteUpdateInput, Prisma.SalidaTransporteUncheckedUpdateInput>;
    where: Prisma.SalidaTransporteWhereUniqueInput;
};
export type SalidaTransporteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SalidaTransporteUpdateManyMutationInput, Prisma.SalidaTransporteUncheckedUpdateManyInput>;
    where?: Prisma.SalidaTransporteWhereInput;
    limit?: number;
};
export type SalidaTransporteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalidaTransporteSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SalidaTransporteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SalidaTransporteUpdateManyMutationInput, Prisma.SalidaTransporteUncheckedUpdateManyInput>;
    where?: Prisma.SalidaTransporteWhereInput;
    limit?: number;
    include?: Prisma.SalidaTransporteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SalidaTransporteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalidaTransporteSelect<ExtArgs> | null;
    omit?: Prisma.SalidaTransporteOmit<ExtArgs> | null;
    include?: Prisma.SalidaTransporteInclude<ExtArgs> | null;
    where: Prisma.SalidaTransporteWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalidaTransporteCreateInput, Prisma.SalidaTransporteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SalidaTransporteUpdateInput, Prisma.SalidaTransporteUncheckedUpdateInput>;
};
export type SalidaTransporteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalidaTransporteSelect<ExtArgs> | null;
    omit?: Prisma.SalidaTransporteOmit<ExtArgs> | null;
    include?: Prisma.SalidaTransporteInclude<ExtArgs> | null;
    where: Prisma.SalidaTransporteWhereUniqueInput;
};
export type SalidaTransporteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalidaTransporteWhereInput;
    limit?: number;
};
export type SalidaTransporte$vehiculoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculoSelect<ExtArgs> | null;
    omit?: Prisma.VehiculoOmit<ExtArgs> | null;
    include?: Prisma.VehiculoInclude<ExtArgs> | null;
    where?: Prisma.VehiculoWhereInput;
};
export type SalidaTransporte$reservasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservaSelect<ExtArgs> | null;
    omit?: Prisma.ReservaOmit<ExtArgs> | null;
    include?: Prisma.ReservaInclude<ExtArgs> | null;
    where?: Prisma.ReservaWhereInput;
    orderBy?: Prisma.ReservaOrderByWithRelationInput | Prisma.ReservaOrderByWithRelationInput[];
    cursor?: Prisma.ReservaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReservaScalarFieldEnum | Prisma.ReservaScalarFieldEnum[];
};
export type SalidaTransporteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalidaTransporteSelect<ExtArgs> | null;
    omit?: Prisma.SalidaTransporteOmit<ExtArgs> | null;
    include?: Prisma.SalidaTransporteInclude<ExtArgs> | null;
};
