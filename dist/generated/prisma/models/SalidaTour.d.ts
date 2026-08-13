import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SalidaTourModel = runtime.Types.Result.DefaultSelection<Prisma.$SalidaTourPayload>;
export type AggregateSalidaTour = {
    _count: SalidaTourCountAggregateOutputType | null;
    _avg: SalidaTourAvgAggregateOutputType | null;
    _sum: SalidaTourSumAggregateOutputType | null;
    _min: SalidaTourMinAggregateOutputType | null;
    _max: SalidaTourMaxAggregateOutputType | null;
};
export type SalidaTourAvgAggregateOutputType = {
    capacidad: number | null;
    minimoPasajeros: number | null;
    precioPen: runtime.Decimal | null;
    precioUsd: runtime.Decimal | null;
    porcentajeAdelanto: number | null;
};
export type SalidaTourSumAggregateOutputType = {
    capacidad: number | null;
    minimoPasajeros: number | null;
    precioPen: runtime.Decimal | null;
    precioUsd: runtime.Decimal | null;
    porcentajeAdelanto: number | null;
};
export type SalidaTourMinAggregateOutputType = {
    id: string | null;
    tourId: string | null;
    fechaHoraSalida: Date | null;
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
export type SalidaTourMaxAggregateOutputType = {
    id: string | null;
    tourId: string | null;
    fechaHoraSalida: Date | null;
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
export type SalidaTourCountAggregateOutputType = {
    id: number;
    tourId: number;
    fechaHoraSalida: number;
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
export type SalidaTourAvgAggregateInputType = {
    capacidad?: true;
    minimoPasajeros?: true;
    precioPen?: true;
    precioUsd?: true;
    porcentajeAdelanto?: true;
};
export type SalidaTourSumAggregateInputType = {
    capacidad?: true;
    minimoPasajeros?: true;
    precioPen?: true;
    precioUsd?: true;
    porcentajeAdelanto?: true;
};
export type SalidaTourMinAggregateInputType = {
    id?: true;
    tourId?: true;
    fechaHoraSalida?: true;
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
export type SalidaTourMaxAggregateInputType = {
    id?: true;
    tourId?: true;
    fechaHoraSalida?: true;
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
export type SalidaTourCountAggregateInputType = {
    id?: true;
    tourId?: true;
    fechaHoraSalida?: true;
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
export type SalidaTourAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalidaTourWhereInput;
    orderBy?: Prisma.SalidaTourOrderByWithRelationInput | Prisma.SalidaTourOrderByWithRelationInput[];
    cursor?: Prisma.SalidaTourWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SalidaTourCountAggregateInputType;
    _avg?: SalidaTourAvgAggregateInputType;
    _sum?: SalidaTourSumAggregateInputType;
    _min?: SalidaTourMinAggregateInputType;
    _max?: SalidaTourMaxAggregateInputType;
};
export type GetSalidaTourAggregateType<T extends SalidaTourAggregateArgs> = {
    [P in keyof T & keyof AggregateSalidaTour]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSalidaTour[P]> : Prisma.GetScalarType<T[P], AggregateSalidaTour[P]>;
};
export type SalidaTourGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalidaTourWhereInput;
    orderBy?: Prisma.SalidaTourOrderByWithAggregationInput | Prisma.SalidaTourOrderByWithAggregationInput[];
    by: Prisma.SalidaTourScalarFieldEnum[] | Prisma.SalidaTourScalarFieldEnum;
    having?: Prisma.SalidaTourScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SalidaTourCountAggregateInputType | true;
    _avg?: SalidaTourAvgAggregateInputType;
    _sum?: SalidaTourSumAggregateInputType;
    _min?: SalidaTourMinAggregateInputType;
    _max?: SalidaTourMaxAggregateInputType;
};
export type SalidaTourGroupByOutputType = {
    id: string;
    tourId: string;
    fechaHoraSalida: Date;
    capacidad: number;
    minimoPasajeros: number;
    precioPen: runtime.Decimal;
    precioUsd: runtime.Decimal;
    permiteAdelanto: boolean;
    porcentajeAdelanto: number;
    estado: $Enums.EstadoSalida;
    creadoEn: Date;
    actualizadoEn: Date;
    _count: SalidaTourCountAggregateOutputType | null;
    _avg: SalidaTourAvgAggregateOutputType | null;
    _sum: SalidaTourSumAggregateOutputType | null;
    _min: SalidaTourMinAggregateOutputType | null;
    _max: SalidaTourMaxAggregateOutputType | null;
};
export type GetSalidaTourGroupByPayload<T extends SalidaTourGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SalidaTourGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SalidaTourGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SalidaTourGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SalidaTourGroupByOutputType[P]>;
}>>;
export type SalidaTourWhereInput = {
    AND?: Prisma.SalidaTourWhereInput | Prisma.SalidaTourWhereInput[];
    OR?: Prisma.SalidaTourWhereInput[];
    NOT?: Prisma.SalidaTourWhereInput | Prisma.SalidaTourWhereInput[];
    id?: Prisma.UuidFilter<"SalidaTour"> | string;
    tourId?: Prisma.UuidFilter<"SalidaTour"> | string;
    fechaHoraSalida?: Prisma.DateTimeFilter<"SalidaTour"> | Date | string;
    capacidad?: Prisma.IntFilter<"SalidaTour"> | number;
    minimoPasajeros?: Prisma.IntFilter<"SalidaTour"> | number;
    precioPen?: Prisma.DecimalFilter<"SalidaTour"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd?: Prisma.DecimalFilter<"SalidaTour"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: Prisma.BoolFilter<"SalidaTour"> | boolean;
    porcentajeAdelanto?: Prisma.IntFilter<"SalidaTour"> | number;
    estado?: Prisma.EnumEstadoSalidaFilter<"SalidaTour"> | $Enums.EstadoSalida;
    creadoEn?: Prisma.DateTimeFilter<"SalidaTour"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"SalidaTour"> | Date | string;
    tour?: Prisma.XOR<Prisma.TourScalarRelationFilter, Prisma.TourWhereInput>;
    reservas?: Prisma.ReservaListRelationFilter;
};
export type SalidaTourOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tourId?: Prisma.SortOrder;
    fechaHoraSalida?: Prisma.SortOrder;
    capacidad?: Prisma.SortOrder;
    minimoPasajeros?: Prisma.SortOrder;
    precioPen?: Prisma.SortOrder;
    precioUsd?: Prisma.SortOrder;
    permiteAdelanto?: Prisma.SortOrder;
    porcentajeAdelanto?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    tour?: Prisma.TourOrderByWithRelationInput;
    reservas?: Prisma.ReservaOrderByRelationAggregateInput;
};
export type SalidaTourWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SalidaTourWhereInput | Prisma.SalidaTourWhereInput[];
    OR?: Prisma.SalidaTourWhereInput[];
    NOT?: Prisma.SalidaTourWhereInput | Prisma.SalidaTourWhereInput[];
    tourId?: Prisma.UuidFilter<"SalidaTour"> | string;
    fechaHoraSalida?: Prisma.DateTimeFilter<"SalidaTour"> | Date | string;
    capacidad?: Prisma.IntFilter<"SalidaTour"> | number;
    minimoPasajeros?: Prisma.IntFilter<"SalidaTour"> | number;
    precioPen?: Prisma.DecimalFilter<"SalidaTour"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd?: Prisma.DecimalFilter<"SalidaTour"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: Prisma.BoolFilter<"SalidaTour"> | boolean;
    porcentajeAdelanto?: Prisma.IntFilter<"SalidaTour"> | number;
    estado?: Prisma.EnumEstadoSalidaFilter<"SalidaTour"> | $Enums.EstadoSalida;
    creadoEn?: Prisma.DateTimeFilter<"SalidaTour"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"SalidaTour"> | Date | string;
    tour?: Prisma.XOR<Prisma.TourScalarRelationFilter, Prisma.TourWhereInput>;
    reservas?: Prisma.ReservaListRelationFilter;
}, "id">;
export type SalidaTourOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tourId?: Prisma.SortOrder;
    fechaHoraSalida?: Prisma.SortOrder;
    capacidad?: Prisma.SortOrder;
    minimoPasajeros?: Prisma.SortOrder;
    precioPen?: Prisma.SortOrder;
    precioUsd?: Prisma.SortOrder;
    permiteAdelanto?: Prisma.SortOrder;
    porcentajeAdelanto?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    actualizadoEn?: Prisma.SortOrder;
    _count?: Prisma.SalidaTourCountOrderByAggregateInput;
    _avg?: Prisma.SalidaTourAvgOrderByAggregateInput;
    _max?: Prisma.SalidaTourMaxOrderByAggregateInput;
    _min?: Prisma.SalidaTourMinOrderByAggregateInput;
    _sum?: Prisma.SalidaTourSumOrderByAggregateInput;
};
export type SalidaTourScalarWhereWithAggregatesInput = {
    AND?: Prisma.SalidaTourScalarWhereWithAggregatesInput | Prisma.SalidaTourScalarWhereWithAggregatesInput[];
    OR?: Prisma.SalidaTourScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SalidaTourScalarWhereWithAggregatesInput | Prisma.SalidaTourScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"SalidaTour"> | string;
    tourId?: Prisma.UuidWithAggregatesFilter<"SalidaTour"> | string;
    fechaHoraSalida?: Prisma.DateTimeWithAggregatesFilter<"SalidaTour"> | Date | string;
    capacidad?: Prisma.IntWithAggregatesFilter<"SalidaTour"> | number;
    minimoPasajeros?: Prisma.IntWithAggregatesFilter<"SalidaTour"> | number;
    precioPen?: Prisma.DecimalWithAggregatesFilter<"SalidaTour"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd?: Prisma.DecimalWithAggregatesFilter<"SalidaTour"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: Prisma.BoolWithAggregatesFilter<"SalidaTour"> | boolean;
    porcentajeAdelanto?: Prisma.IntWithAggregatesFilter<"SalidaTour"> | number;
    estado?: Prisma.EnumEstadoSalidaWithAggregatesFilter<"SalidaTour"> | $Enums.EstadoSalida;
    creadoEn?: Prisma.DateTimeWithAggregatesFilter<"SalidaTour"> | Date | string;
    actualizadoEn?: Prisma.DateTimeWithAggregatesFilter<"SalidaTour"> | Date | string;
};
export type SalidaTourCreateInput = {
    id?: string;
    fechaHoraSalida: Date | string;
    capacidad: number;
    minimoPasajeros?: number;
    precioPen: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd: runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: boolean;
    porcentajeAdelanto?: number;
    estado?: $Enums.EstadoSalida;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    tour: Prisma.TourCreateNestedOneWithoutSalidasInput;
    reservas?: Prisma.ReservaCreateNestedManyWithoutSalidaTourInput;
};
export type SalidaTourUncheckedCreateInput = {
    id?: string;
    tourId: string;
    fechaHoraSalida: Date | string;
    capacidad: number;
    minimoPasajeros?: number;
    precioPen: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd: runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: boolean;
    porcentajeAdelanto?: number;
    estado?: $Enums.EstadoSalida;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    reservas?: Prisma.ReservaUncheckedCreateNestedManyWithoutSalidaTourInput;
};
export type SalidaTourUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaHoraSalida?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    capacidad?: Prisma.IntFieldUpdateOperationsInput | number;
    minimoPasajeros?: Prisma.IntFieldUpdateOperationsInput | number;
    precioPen?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    porcentajeAdelanto?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoSalidaFieldUpdateOperationsInput | $Enums.EstadoSalida;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tour?: Prisma.TourUpdateOneRequiredWithoutSalidasNestedInput;
    reservas?: Prisma.ReservaUpdateManyWithoutSalidaTourNestedInput;
};
export type SalidaTourUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tourId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaHoraSalida?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    capacidad?: Prisma.IntFieldUpdateOperationsInput | number;
    minimoPasajeros?: Prisma.IntFieldUpdateOperationsInput | number;
    precioPen?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    porcentajeAdelanto?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoSalidaFieldUpdateOperationsInput | $Enums.EstadoSalida;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reservas?: Prisma.ReservaUncheckedUpdateManyWithoutSalidaTourNestedInput;
};
export type SalidaTourCreateManyInput = {
    id?: string;
    tourId: string;
    fechaHoraSalida: Date | string;
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
export type SalidaTourUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaHoraSalida?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
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
export type SalidaTourUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tourId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaHoraSalida?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
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
export type SalidaTourListRelationFilter = {
    every?: Prisma.SalidaTourWhereInput;
    some?: Prisma.SalidaTourWhereInput;
    none?: Prisma.SalidaTourWhereInput;
};
export type SalidaTourOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SalidaTourCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tourId?: Prisma.SortOrder;
    fechaHoraSalida?: Prisma.SortOrder;
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
export type SalidaTourAvgOrderByAggregateInput = {
    capacidad?: Prisma.SortOrder;
    minimoPasajeros?: Prisma.SortOrder;
    precioPen?: Prisma.SortOrder;
    precioUsd?: Prisma.SortOrder;
    porcentajeAdelanto?: Prisma.SortOrder;
};
export type SalidaTourMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tourId?: Prisma.SortOrder;
    fechaHoraSalida?: Prisma.SortOrder;
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
export type SalidaTourMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tourId?: Prisma.SortOrder;
    fechaHoraSalida?: Prisma.SortOrder;
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
export type SalidaTourSumOrderByAggregateInput = {
    capacidad?: Prisma.SortOrder;
    minimoPasajeros?: Prisma.SortOrder;
    precioPen?: Prisma.SortOrder;
    precioUsd?: Prisma.SortOrder;
    porcentajeAdelanto?: Prisma.SortOrder;
};
export type SalidaTourNullableScalarRelationFilter = {
    is?: Prisma.SalidaTourWhereInput | null;
    isNot?: Prisma.SalidaTourWhereInput | null;
};
export type SalidaTourCreateNestedManyWithoutTourInput = {
    create?: Prisma.XOR<Prisma.SalidaTourCreateWithoutTourInput, Prisma.SalidaTourUncheckedCreateWithoutTourInput> | Prisma.SalidaTourCreateWithoutTourInput[] | Prisma.SalidaTourUncheckedCreateWithoutTourInput[];
    connectOrCreate?: Prisma.SalidaTourCreateOrConnectWithoutTourInput | Prisma.SalidaTourCreateOrConnectWithoutTourInput[];
    createMany?: Prisma.SalidaTourCreateManyTourInputEnvelope;
    connect?: Prisma.SalidaTourWhereUniqueInput | Prisma.SalidaTourWhereUniqueInput[];
};
export type SalidaTourUncheckedCreateNestedManyWithoutTourInput = {
    create?: Prisma.XOR<Prisma.SalidaTourCreateWithoutTourInput, Prisma.SalidaTourUncheckedCreateWithoutTourInput> | Prisma.SalidaTourCreateWithoutTourInput[] | Prisma.SalidaTourUncheckedCreateWithoutTourInput[];
    connectOrCreate?: Prisma.SalidaTourCreateOrConnectWithoutTourInput | Prisma.SalidaTourCreateOrConnectWithoutTourInput[];
    createMany?: Prisma.SalidaTourCreateManyTourInputEnvelope;
    connect?: Prisma.SalidaTourWhereUniqueInput | Prisma.SalidaTourWhereUniqueInput[];
};
export type SalidaTourUpdateManyWithoutTourNestedInput = {
    create?: Prisma.XOR<Prisma.SalidaTourCreateWithoutTourInput, Prisma.SalidaTourUncheckedCreateWithoutTourInput> | Prisma.SalidaTourCreateWithoutTourInput[] | Prisma.SalidaTourUncheckedCreateWithoutTourInput[];
    connectOrCreate?: Prisma.SalidaTourCreateOrConnectWithoutTourInput | Prisma.SalidaTourCreateOrConnectWithoutTourInput[];
    upsert?: Prisma.SalidaTourUpsertWithWhereUniqueWithoutTourInput | Prisma.SalidaTourUpsertWithWhereUniqueWithoutTourInput[];
    createMany?: Prisma.SalidaTourCreateManyTourInputEnvelope;
    set?: Prisma.SalidaTourWhereUniqueInput | Prisma.SalidaTourWhereUniqueInput[];
    disconnect?: Prisma.SalidaTourWhereUniqueInput | Prisma.SalidaTourWhereUniqueInput[];
    delete?: Prisma.SalidaTourWhereUniqueInput | Prisma.SalidaTourWhereUniqueInput[];
    connect?: Prisma.SalidaTourWhereUniqueInput | Prisma.SalidaTourWhereUniqueInput[];
    update?: Prisma.SalidaTourUpdateWithWhereUniqueWithoutTourInput | Prisma.SalidaTourUpdateWithWhereUniqueWithoutTourInput[];
    updateMany?: Prisma.SalidaTourUpdateManyWithWhereWithoutTourInput | Prisma.SalidaTourUpdateManyWithWhereWithoutTourInput[];
    deleteMany?: Prisma.SalidaTourScalarWhereInput | Prisma.SalidaTourScalarWhereInput[];
};
export type SalidaTourUncheckedUpdateManyWithoutTourNestedInput = {
    create?: Prisma.XOR<Prisma.SalidaTourCreateWithoutTourInput, Prisma.SalidaTourUncheckedCreateWithoutTourInput> | Prisma.SalidaTourCreateWithoutTourInput[] | Prisma.SalidaTourUncheckedCreateWithoutTourInput[];
    connectOrCreate?: Prisma.SalidaTourCreateOrConnectWithoutTourInput | Prisma.SalidaTourCreateOrConnectWithoutTourInput[];
    upsert?: Prisma.SalidaTourUpsertWithWhereUniqueWithoutTourInput | Prisma.SalidaTourUpsertWithWhereUniqueWithoutTourInput[];
    createMany?: Prisma.SalidaTourCreateManyTourInputEnvelope;
    set?: Prisma.SalidaTourWhereUniqueInput | Prisma.SalidaTourWhereUniqueInput[];
    disconnect?: Prisma.SalidaTourWhereUniqueInput | Prisma.SalidaTourWhereUniqueInput[];
    delete?: Prisma.SalidaTourWhereUniqueInput | Prisma.SalidaTourWhereUniqueInput[];
    connect?: Prisma.SalidaTourWhereUniqueInput | Prisma.SalidaTourWhereUniqueInput[];
    update?: Prisma.SalidaTourUpdateWithWhereUniqueWithoutTourInput | Prisma.SalidaTourUpdateWithWhereUniqueWithoutTourInput[];
    updateMany?: Prisma.SalidaTourUpdateManyWithWhereWithoutTourInput | Prisma.SalidaTourUpdateManyWithWhereWithoutTourInput[];
    deleteMany?: Prisma.SalidaTourScalarWhereInput | Prisma.SalidaTourScalarWhereInput[];
};
export type SalidaTourCreateNestedOneWithoutReservasInput = {
    create?: Prisma.XOR<Prisma.SalidaTourCreateWithoutReservasInput, Prisma.SalidaTourUncheckedCreateWithoutReservasInput>;
    connectOrCreate?: Prisma.SalidaTourCreateOrConnectWithoutReservasInput;
    connect?: Prisma.SalidaTourWhereUniqueInput;
};
export type SalidaTourUpdateOneWithoutReservasNestedInput = {
    create?: Prisma.XOR<Prisma.SalidaTourCreateWithoutReservasInput, Prisma.SalidaTourUncheckedCreateWithoutReservasInput>;
    connectOrCreate?: Prisma.SalidaTourCreateOrConnectWithoutReservasInput;
    upsert?: Prisma.SalidaTourUpsertWithoutReservasInput;
    disconnect?: Prisma.SalidaTourWhereInput | boolean;
    delete?: Prisma.SalidaTourWhereInput | boolean;
    connect?: Prisma.SalidaTourWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SalidaTourUpdateToOneWithWhereWithoutReservasInput, Prisma.SalidaTourUpdateWithoutReservasInput>, Prisma.SalidaTourUncheckedUpdateWithoutReservasInput>;
};
export type SalidaTourCreateWithoutTourInput = {
    id?: string;
    fechaHoraSalida: Date | string;
    capacidad: number;
    minimoPasajeros?: number;
    precioPen: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd: runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: boolean;
    porcentajeAdelanto?: number;
    estado?: $Enums.EstadoSalida;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    reservas?: Prisma.ReservaCreateNestedManyWithoutSalidaTourInput;
};
export type SalidaTourUncheckedCreateWithoutTourInput = {
    id?: string;
    fechaHoraSalida: Date | string;
    capacidad: number;
    minimoPasajeros?: number;
    precioPen: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd: runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: boolean;
    porcentajeAdelanto?: number;
    estado?: $Enums.EstadoSalida;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    reservas?: Prisma.ReservaUncheckedCreateNestedManyWithoutSalidaTourInput;
};
export type SalidaTourCreateOrConnectWithoutTourInput = {
    where: Prisma.SalidaTourWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalidaTourCreateWithoutTourInput, Prisma.SalidaTourUncheckedCreateWithoutTourInput>;
};
export type SalidaTourCreateManyTourInputEnvelope = {
    data: Prisma.SalidaTourCreateManyTourInput | Prisma.SalidaTourCreateManyTourInput[];
    skipDuplicates?: boolean;
};
export type SalidaTourUpsertWithWhereUniqueWithoutTourInput = {
    where: Prisma.SalidaTourWhereUniqueInput;
    update: Prisma.XOR<Prisma.SalidaTourUpdateWithoutTourInput, Prisma.SalidaTourUncheckedUpdateWithoutTourInput>;
    create: Prisma.XOR<Prisma.SalidaTourCreateWithoutTourInput, Prisma.SalidaTourUncheckedCreateWithoutTourInput>;
};
export type SalidaTourUpdateWithWhereUniqueWithoutTourInput = {
    where: Prisma.SalidaTourWhereUniqueInput;
    data: Prisma.XOR<Prisma.SalidaTourUpdateWithoutTourInput, Prisma.SalidaTourUncheckedUpdateWithoutTourInput>;
};
export type SalidaTourUpdateManyWithWhereWithoutTourInput = {
    where: Prisma.SalidaTourScalarWhereInput;
    data: Prisma.XOR<Prisma.SalidaTourUpdateManyMutationInput, Prisma.SalidaTourUncheckedUpdateManyWithoutTourInput>;
};
export type SalidaTourScalarWhereInput = {
    AND?: Prisma.SalidaTourScalarWhereInput | Prisma.SalidaTourScalarWhereInput[];
    OR?: Prisma.SalidaTourScalarWhereInput[];
    NOT?: Prisma.SalidaTourScalarWhereInput | Prisma.SalidaTourScalarWhereInput[];
    id?: Prisma.UuidFilter<"SalidaTour"> | string;
    tourId?: Prisma.UuidFilter<"SalidaTour"> | string;
    fechaHoraSalida?: Prisma.DateTimeFilter<"SalidaTour"> | Date | string;
    capacidad?: Prisma.IntFilter<"SalidaTour"> | number;
    minimoPasajeros?: Prisma.IntFilter<"SalidaTour"> | number;
    precioPen?: Prisma.DecimalFilter<"SalidaTour"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd?: Prisma.DecimalFilter<"SalidaTour"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: Prisma.BoolFilter<"SalidaTour"> | boolean;
    porcentajeAdelanto?: Prisma.IntFilter<"SalidaTour"> | number;
    estado?: Prisma.EnumEstadoSalidaFilter<"SalidaTour"> | $Enums.EstadoSalida;
    creadoEn?: Prisma.DateTimeFilter<"SalidaTour"> | Date | string;
    actualizadoEn?: Prisma.DateTimeFilter<"SalidaTour"> | Date | string;
};
export type SalidaTourCreateWithoutReservasInput = {
    id?: string;
    fechaHoraSalida: Date | string;
    capacidad: number;
    minimoPasajeros?: number;
    precioPen: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd: runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: boolean;
    porcentajeAdelanto?: number;
    estado?: $Enums.EstadoSalida;
    creadoEn?: Date | string;
    actualizadoEn?: Date | string;
    tour: Prisma.TourCreateNestedOneWithoutSalidasInput;
};
export type SalidaTourUncheckedCreateWithoutReservasInput = {
    id?: string;
    tourId: string;
    fechaHoraSalida: Date | string;
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
export type SalidaTourCreateOrConnectWithoutReservasInput = {
    where: Prisma.SalidaTourWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalidaTourCreateWithoutReservasInput, Prisma.SalidaTourUncheckedCreateWithoutReservasInput>;
};
export type SalidaTourUpsertWithoutReservasInput = {
    update: Prisma.XOR<Prisma.SalidaTourUpdateWithoutReservasInput, Prisma.SalidaTourUncheckedUpdateWithoutReservasInput>;
    create: Prisma.XOR<Prisma.SalidaTourCreateWithoutReservasInput, Prisma.SalidaTourUncheckedCreateWithoutReservasInput>;
    where?: Prisma.SalidaTourWhereInput;
};
export type SalidaTourUpdateToOneWithWhereWithoutReservasInput = {
    where?: Prisma.SalidaTourWhereInput;
    data: Prisma.XOR<Prisma.SalidaTourUpdateWithoutReservasInput, Prisma.SalidaTourUncheckedUpdateWithoutReservasInput>;
};
export type SalidaTourUpdateWithoutReservasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaHoraSalida?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    capacidad?: Prisma.IntFieldUpdateOperationsInput | number;
    minimoPasajeros?: Prisma.IntFieldUpdateOperationsInput | number;
    precioPen?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    porcentajeAdelanto?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoSalidaFieldUpdateOperationsInput | $Enums.EstadoSalida;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tour?: Prisma.TourUpdateOneRequiredWithoutSalidasNestedInput;
};
export type SalidaTourUncheckedUpdateWithoutReservasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tourId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaHoraSalida?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
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
export type SalidaTourCreateManyTourInput = {
    id?: string;
    fechaHoraSalida: Date | string;
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
export type SalidaTourUpdateWithoutTourInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaHoraSalida?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    capacidad?: Prisma.IntFieldUpdateOperationsInput | number;
    minimoPasajeros?: Prisma.IntFieldUpdateOperationsInput | number;
    precioPen?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    porcentajeAdelanto?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoSalidaFieldUpdateOperationsInput | $Enums.EstadoSalida;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reservas?: Prisma.ReservaUpdateManyWithoutSalidaTourNestedInput;
};
export type SalidaTourUncheckedUpdateWithoutTourInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaHoraSalida?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    capacidad?: Prisma.IntFieldUpdateOperationsInput | number;
    minimoPasajeros?: Prisma.IntFieldUpdateOperationsInput | number;
    precioPen?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUsd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    permiteAdelanto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    porcentajeAdelanto?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.EnumEstadoSalidaFieldUpdateOperationsInput | $Enums.EstadoSalida;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualizadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reservas?: Prisma.ReservaUncheckedUpdateManyWithoutSalidaTourNestedInput;
};
export type SalidaTourUncheckedUpdateManyWithoutTourInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaHoraSalida?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
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
export type SalidaTourCountOutputType = {
    reservas: number;
};
export type SalidaTourCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reservas?: boolean | SalidaTourCountOutputTypeCountReservasArgs;
};
export type SalidaTourCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalidaTourCountOutputTypeSelect<ExtArgs> | null;
};
export type SalidaTourCountOutputTypeCountReservasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReservaWhereInput;
};
export type SalidaTourSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tourId?: boolean;
    fechaHoraSalida?: boolean;
    capacidad?: boolean;
    minimoPasajeros?: boolean;
    precioPen?: boolean;
    precioUsd?: boolean;
    permiteAdelanto?: boolean;
    porcentajeAdelanto?: boolean;
    estado?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    tour?: boolean | Prisma.TourDefaultArgs<ExtArgs>;
    reservas?: boolean | Prisma.SalidaTour$reservasArgs<ExtArgs>;
    _count?: boolean | Prisma.SalidaTourCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["salidaTour"]>;
export type SalidaTourSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tourId?: boolean;
    fechaHoraSalida?: boolean;
    capacidad?: boolean;
    minimoPasajeros?: boolean;
    precioPen?: boolean;
    precioUsd?: boolean;
    permiteAdelanto?: boolean;
    porcentajeAdelanto?: boolean;
    estado?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    tour?: boolean | Prisma.TourDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["salidaTour"]>;
export type SalidaTourSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tourId?: boolean;
    fechaHoraSalida?: boolean;
    capacidad?: boolean;
    minimoPasajeros?: boolean;
    precioPen?: boolean;
    precioUsd?: boolean;
    permiteAdelanto?: boolean;
    porcentajeAdelanto?: boolean;
    estado?: boolean;
    creadoEn?: boolean;
    actualizadoEn?: boolean;
    tour?: boolean | Prisma.TourDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["salidaTour"]>;
export type SalidaTourSelectScalar = {
    id?: boolean;
    tourId?: boolean;
    fechaHoraSalida?: boolean;
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
export type SalidaTourOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tourId" | "fechaHoraSalida" | "capacidad" | "minimoPasajeros" | "precioPen" | "precioUsd" | "permiteAdelanto" | "porcentajeAdelanto" | "estado" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["salidaTour"]>;
export type SalidaTourInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tour?: boolean | Prisma.TourDefaultArgs<ExtArgs>;
    reservas?: boolean | Prisma.SalidaTour$reservasArgs<ExtArgs>;
    _count?: boolean | Prisma.SalidaTourCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SalidaTourIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tour?: boolean | Prisma.TourDefaultArgs<ExtArgs>;
};
export type SalidaTourIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tour?: boolean | Prisma.TourDefaultArgs<ExtArgs>;
};
export type $SalidaTourPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SalidaTour";
    objects: {
        tour: Prisma.$TourPayload<ExtArgs>;
        reservas: Prisma.$ReservaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tourId: string;
        fechaHoraSalida: Date;
        capacidad: number;
        minimoPasajeros: number;
        precioPen: runtime.Decimal;
        precioUsd: runtime.Decimal;
        permiteAdelanto: boolean;
        porcentajeAdelanto: number;
        estado: $Enums.EstadoSalida;
        creadoEn: Date;
        actualizadoEn: Date;
    }, ExtArgs["result"]["salidaTour"]>;
    composites: {};
};
export type SalidaTourGetPayload<S extends boolean | null | undefined | SalidaTourDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SalidaTourPayload, S>;
export type SalidaTourCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SalidaTourFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SalidaTourCountAggregateInputType | true;
};
export interface SalidaTourDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SalidaTour'];
        meta: {
            name: 'SalidaTour';
        };
    };
    findUnique<T extends SalidaTourFindUniqueArgs>(args: Prisma.SelectSubset<T, SalidaTourFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SalidaTourClient<runtime.Types.Result.GetResult<Prisma.$SalidaTourPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SalidaTourFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SalidaTourFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SalidaTourClient<runtime.Types.Result.GetResult<Prisma.$SalidaTourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SalidaTourFindFirstArgs>(args?: Prisma.SelectSubset<T, SalidaTourFindFirstArgs<ExtArgs>>): Prisma.Prisma__SalidaTourClient<runtime.Types.Result.GetResult<Prisma.$SalidaTourPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SalidaTourFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SalidaTourFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SalidaTourClient<runtime.Types.Result.GetResult<Prisma.$SalidaTourPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SalidaTourFindManyArgs>(args?: Prisma.SelectSubset<T, SalidaTourFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalidaTourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SalidaTourCreateArgs>(args: Prisma.SelectSubset<T, SalidaTourCreateArgs<ExtArgs>>): Prisma.Prisma__SalidaTourClient<runtime.Types.Result.GetResult<Prisma.$SalidaTourPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SalidaTourCreateManyArgs>(args?: Prisma.SelectSubset<T, SalidaTourCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SalidaTourCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SalidaTourCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalidaTourPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SalidaTourDeleteArgs>(args: Prisma.SelectSubset<T, SalidaTourDeleteArgs<ExtArgs>>): Prisma.Prisma__SalidaTourClient<runtime.Types.Result.GetResult<Prisma.$SalidaTourPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SalidaTourUpdateArgs>(args: Prisma.SelectSubset<T, SalidaTourUpdateArgs<ExtArgs>>): Prisma.Prisma__SalidaTourClient<runtime.Types.Result.GetResult<Prisma.$SalidaTourPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SalidaTourDeleteManyArgs>(args?: Prisma.SelectSubset<T, SalidaTourDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SalidaTourUpdateManyArgs>(args: Prisma.SelectSubset<T, SalidaTourUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SalidaTourUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SalidaTourUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalidaTourPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SalidaTourUpsertArgs>(args: Prisma.SelectSubset<T, SalidaTourUpsertArgs<ExtArgs>>): Prisma.Prisma__SalidaTourClient<runtime.Types.Result.GetResult<Prisma.$SalidaTourPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SalidaTourCountArgs>(args?: Prisma.Subset<T, SalidaTourCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SalidaTourCountAggregateOutputType> : number>;
    aggregate<T extends SalidaTourAggregateArgs>(args: Prisma.Subset<T, SalidaTourAggregateArgs>): Prisma.PrismaPromise<GetSalidaTourAggregateType<T>>;
    groupBy<T extends SalidaTourGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SalidaTourGroupByArgs['orderBy'];
    } : {
        orderBy?: SalidaTourGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SalidaTourGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalidaTourGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SalidaTourFieldRefs;
}
export interface Prisma__SalidaTourClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tour<T extends Prisma.TourDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TourDefaultArgs<ExtArgs>>): Prisma.Prisma__TourClient<runtime.Types.Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    reservas<T extends Prisma.SalidaTour$reservasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SalidaTour$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SalidaTourFieldRefs {
    readonly id: Prisma.FieldRef<"SalidaTour", 'String'>;
    readonly tourId: Prisma.FieldRef<"SalidaTour", 'String'>;
    readonly fechaHoraSalida: Prisma.FieldRef<"SalidaTour", 'DateTime'>;
    readonly capacidad: Prisma.FieldRef<"SalidaTour", 'Int'>;
    readonly minimoPasajeros: Prisma.FieldRef<"SalidaTour", 'Int'>;
    readonly precioPen: Prisma.FieldRef<"SalidaTour", 'Decimal'>;
    readonly precioUsd: Prisma.FieldRef<"SalidaTour", 'Decimal'>;
    readonly permiteAdelanto: Prisma.FieldRef<"SalidaTour", 'Boolean'>;
    readonly porcentajeAdelanto: Prisma.FieldRef<"SalidaTour", 'Int'>;
    readonly estado: Prisma.FieldRef<"SalidaTour", 'EstadoSalida'>;
    readonly creadoEn: Prisma.FieldRef<"SalidaTour", 'DateTime'>;
    readonly actualizadoEn: Prisma.FieldRef<"SalidaTour", 'DateTime'>;
}
export type SalidaTourFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalidaTourSelect<ExtArgs> | null;
    omit?: Prisma.SalidaTourOmit<ExtArgs> | null;
    include?: Prisma.SalidaTourInclude<ExtArgs> | null;
    where: Prisma.SalidaTourWhereUniqueInput;
};
export type SalidaTourFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalidaTourSelect<ExtArgs> | null;
    omit?: Prisma.SalidaTourOmit<ExtArgs> | null;
    include?: Prisma.SalidaTourInclude<ExtArgs> | null;
    where: Prisma.SalidaTourWhereUniqueInput;
};
export type SalidaTourFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalidaTourSelect<ExtArgs> | null;
    omit?: Prisma.SalidaTourOmit<ExtArgs> | null;
    include?: Prisma.SalidaTourInclude<ExtArgs> | null;
    where?: Prisma.SalidaTourWhereInput;
    orderBy?: Prisma.SalidaTourOrderByWithRelationInput | Prisma.SalidaTourOrderByWithRelationInput[];
    cursor?: Prisma.SalidaTourWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SalidaTourScalarFieldEnum | Prisma.SalidaTourScalarFieldEnum[];
};
export type SalidaTourFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalidaTourSelect<ExtArgs> | null;
    omit?: Prisma.SalidaTourOmit<ExtArgs> | null;
    include?: Prisma.SalidaTourInclude<ExtArgs> | null;
    where?: Prisma.SalidaTourWhereInput;
    orderBy?: Prisma.SalidaTourOrderByWithRelationInput | Prisma.SalidaTourOrderByWithRelationInput[];
    cursor?: Prisma.SalidaTourWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SalidaTourScalarFieldEnum | Prisma.SalidaTourScalarFieldEnum[];
};
export type SalidaTourFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalidaTourSelect<ExtArgs> | null;
    omit?: Prisma.SalidaTourOmit<ExtArgs> | null;
    include?: Prisma.SalidaTourInclude<ExtArgs> | null;
    where?: Prisma.SalidaTourWhereInput;
    orderBy?: Prisma.SalidaTourOrderByWithRelationInput | Prisma.SalidaTourOrderByWithRelationInput[];
    cursor?: Prisma.SalidaTourWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SalidaTourScalarFieldEnum | Prisma.SalidaTourScalarFieldEnum[];
};
export type SalidaTourCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalidaTourSelect<ExtArgs> | null;
    omit?: Prisma.SalidaTourOmit<ExtArgs> | null;
    include?: Prisma.SalidaTourInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SalidaTourCreateInput, Prisma.SalidaTourUncheckedCreateInput>;
};
export type SalidaTourCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SalidaTourCreateManyInput | Prisma.SalidaTourCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SalidaTourCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalidaTourSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SalidaTourOmit<ExtArgs> | null;
    data: Prisma.SalidaTourCreateManyInput | Prisma.SalidaTourCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SalidaTourIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SalidaTourUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalidaTourSelect<ExtArgs> | null;
    omit?: Prisma.SalidaTourOmit<ExtArgs> | null;
    include?: Prisma.SalidaTourInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SalidaTourUpdateInput, Prisma.SalidaTourUncheckedUpdateInput>;
    where: Prisma.SalidaTourWhereUniqueInput;
};
export type SalidaTourUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SalidaTourUpdateManyMutationInput, Prisma.SalidaTourUncheckedUpdateManyInput>;
    where?: Prisma.SalidaTourWhereInput;
    limit?: number;
};
export type SalidaTourUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalidaTourSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SalidaTourOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SalidaTourUpdateManyMutationInput, Prisma.SalidaTourUncheckedUpdateManyInput>;
    where?: Prisma.SalidaTourWhereInput;
    limit?: number;
    include?: Prisma.SalidaTourIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SalidaTourUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalidaTourSelect<ExtArgs> | null;
    omit?: Prisma.SalidaTourOmit<ExtArgs> | null;
    include?: Prisma.SalidaTourInclude<ExtArgs> | null;
    where: Prisma.SalidaTourWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalidaTourCreateInput, Prisma.SalidaTourUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SalidaTourUpdateInput, Prisma.SalidaTourUncheckedUpdateInput>;
};
export type SalidaTourDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalidaTourSelect<ExtArgs> | null;
    omit?: Prisma.SalidaTourOmit<ExtArgs> | null;
    include?: Prisma.SalidaTourInclude<ExtArgs> | null;
    where: Prisma.SalidaTourWhereUniqueInput;
};
export type SalidaTourDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalidaTourWhereInput;
    limit?: number;
};
export type SalidaTour$reservasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SalidaTourDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalidaTourSelect<ExtArgs> | null;
    omit?: Prisma.SalidaTourOmit<ExtArgs> | null;
    include?: Prisma.SalidaTourInclude<ExtArgs> | null;
};
