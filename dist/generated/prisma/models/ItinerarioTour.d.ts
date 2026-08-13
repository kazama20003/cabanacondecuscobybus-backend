import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ItinerarioTourModel = runtime.Types.Result.DefaultSelection<Prisma.$ItinerarioTourPayload>;
export type AggregateItinerarioTour = {
    _count: ItinerarioTourCountAggregateOutputType | null;
    _avg: ItinerarioTourAvgAggregateOutputType | null;
    _sum: ItinerarioTourSumAggregateOutputType | null;
    _min: ItinerarioTourMinAggregateOutputType | null;
    _max: ItinerarioTourMaxAggregateOutputType | null;
};
export type ItinerarioTourAvgAggregateOutputType = {
    orden: number | null;
    latitud: runtime.Decimal | null;
    longitud: runtime.Decimal | null;
};
export type ItinerarioTourSumAggregateOutputType = {
    orden: number | null;
    latitud: runtime.Decimal | null;
    longitud: runtime.Decimal | null;
};
export type ItinerarioTourMinAggregateOutputType = {
    id: string | null;
    tourId: string | null;
    orden: number | null;
    titulo: string | null;
    descripcion: string | null;
    latitud: runtime.Decimal | null;
    longitud: runtime.Decimal | null;
};
export type ItinerarioTourMaxAggregateOutputType = {
    id: string | null;
    tourId: string | null;
    orden: number | null;
    titulo: string | null;
    descripcion: string | null;
    latitud: runtime.Decimal | null;
    longitud: runtime.Decimal | null;
};
export type ItinerarioTourCountAggregateOutputType = {
    id: number;
    tourId: number;
    orden: number;
    titulo: number;
    descripcion: number;
    latitud: number;
    longitud: number;
    _all: number;
};
export type ItinerarioTourAvgAggregateInputType = {
    orden?: true;
    latitud?: true;
    longitud?: true;
};
export type ItinerarioTourSumAggregateInputType = {
    orden?: true;
    latitud?: true;
    longitud?: true;
};
export type ItinerarioTourMinAggregateInputType = {
    id?: true;
    tourId?: true;
    orden?: true;
    titulo?: true;
    descripcion?: true;
    latitud?: true;
    longitud?: true;
};
export type ItinerarioTourMaxAggregateInputType = {
    id?: true;
    tourId?: true;
    orden?: true;
    titulo?: true;
    descripcion?: true;
    latitud?: true;
    longitud?: true;
};
export type ItinerarioTourCountAggregateInputType = {
    id?: true;
    tourId?: true;
    orden?: true;
    titulo?: true;
    descripcion?: true;
    latitud?: true;
    longitud?: true;
    _all?: true;
};
export type ItinerarioTourAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItinerarioTourWhereInput;
    orderBy?: Prisma.ItinerarioTourOrderByWithRelationInput | Prisma.ItinerarioTourOrderByWithRelationInput[];
    cursor?: Prisma.ItinerarioTourWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ItinerarioTourCountAggregateInputType;
    _avg?: ItinerarioTourAvgAggregateInputType;
    _sum?: ItinerarioTourSumAggregateInputType;
    _min?: ItinerarioTourMinAggregateInputType;
    _max?: ItinerarioTourMaxAggregateInputType;
};
export type GetItinerarioTourAggregateType<T extends ItinerarioTourAggregateArgs> = {
    [P in keyof T & keyof AggregateItinerarioTour]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateItinerarioTour[P]> : Prisma.GetScalarType<T[P], AggregateItinerarioTour[P]>;
};
export type ItinerarioTourGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItinerarioTourWhereInput;
    orderBy?: Prisma.ItinerarioTourOrderByWithAggregationInput | Prisma.ItinerarioTourOrderByWithAggregationInput[];
    by: Prisma.ItinerarioTourScalarFieldEnum[] | Prisma.ItinerarioTourScalarFieldEnum;
    having?: Prisma.ItinerarioTourScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ItinerarioTourCountAggregateInputType | true;
    _avg?: ItinerarioTourAvgAggregateInputType;
    _sum?: ItinerarioTourSumAggregateInputType;
    _min?: ItinerarioTourMinAggregateInputType;
    _max?: ItinerarioTourMaxAggregateInputType;
};
export type ItinerarioTourGroupByOutputType = {
    id: string;
    tourId: string;
    orden: number;
    titulo: string;
    descripcion: string;
    latitud: runtime.Decimal | null;
    longitud: runtime.Decimal | null;
    _count: ItinerarioTourCountAggregateOutputType | null;
    _avg: ItinerarioTourAvgAggregateOutputType | null;
    _sum: ItinerarioTourSumAggregateOutputType | null;
    _min: ItinerarioTourMinAggregateOutputType | null;
    _max: ItinerarioTourMaxAggregateOutputType | null;
};
export type GetItinerarioTourGroupByPayload<T extends ItinerarioTourGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ItinerarioTourGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ItinerarioTourGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ItinerarioTourGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ItinerarioTourGroupByOutputType[P]>;
}>>;
export type ItinerarioTourWhereInput = {
    AND?: Prisma.ItinerarioTourWhereInput | Prisma.ItinerarioTourWhereInput[];
    OR?: Prisma.ItinerarioTourWhereInput[];
    NOT?: Prisma.ItinerarioTourWhereInput | Prisma.ItinerarioTourWhereInput[];
    id?: Prisma.UuidFilter<"ItinerarioTour"> | string;
    tourId?: Prisma.UuidFilter<"ItinerarioTour"> | string;
    orden?: Prisma.IntFilter<"ItinerarioTour"> | number;
    titulo?: Prisma.StringFilter<"ItinerarioTour"> | string;
    descripcion?: Prisma.StringFilter<"ItinerarioTour"> | string;
    latitud?: Prisma.DecimalNullableFilter<"ItinerarioTour"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.DecimalNullableFilter<"ItinerarioTour"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tour?: Prisma.XOR<Prisma.TourScalarRelationFilter, Prisma.TourWhereInput>;
};
export type ItinerarioTourOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tourId?: Prisma.SortOrder;
    orden?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    latitud?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitud?: Prisma.SortOrderInput | Prisma.SortOrder;
    tour?: Prisma.TourOrderByWithRelationInput;
};
export type ItinerarioTourWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tourId_orden?: Prisma.ItinerarioTourTourIdOrdenCompoundUniqueInput;
    AND?: Prisma.ItinerarioTourWhereInput | Prisma.ItinerarioTourWhereInput[];
    OR?: Prisma.ItinerarioTourWhereInput[];
    NOT?: Prisma.ItinerarioTourWhereInput | Prisma.ItinerarioTourWhereInput[];
    tourId?: Prisma.UuidFilter<"ItinerarioTour"> | string;
    orden?: Prisma.IntFilter<"ItinerarioTour"> | number;
    titulo?: Prisma.StringFilter<"ItinerarioTour"> | string;
    descripcion?: Prisma.StringFilter<"ItinerarioTour"> | string;
    latitud?: Prisma.DecimalNullableFilter<"ItinerarioTour"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.DecimalNullableFilter<"ItinerarioTour"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tour?: Prisma.XOR<Prisma.TourScalarRelationFilter, Prisma.TourWhereInput>;
}, "id" | "tourId_orden">;
export type ItinerarioTourOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tourId?: Prisma.SortOrder;
    orden?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    latitud?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitud?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ItinerarioTourCountOrderByAggregateInput;
    _avg?: Prisma.ItinerarioTourAvgOrderByAggregateInput;
    _max?: Prisma.ItinerarioTourMaxOrderByAggregateInput;
    _min?: Prisma.ItinerarioTourMinOrderByAggregateInput;
    _sum?: Prisma.ItinerarioTourSumOrderByAggregateInput;
};
export type ItinerarioTourScalarWhereWithAggregatesInput = {
    AND?: Prisma.ItinerarioTourScalarWhereWithAggregatesInput | Prisma.ItinerarioTourScalarWhereWithAggregatesInput[];
    OR?: Prisma.ItinerarioTourScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ItinerarioTourScalarWhereWithAggregatesInput | Prisma.ItinerarioTourScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ItinerarioTour"> | string;
    tourId?: Prisma.UuidWithAggregatesFilter<"ItinerarioTour"> | string;
    orden?: Prisma.IntWithAggregatesFilter<"ItinerarioTour"> | number;
    titulo?: Prisma.StringWithAggregatesFilter<"ItinerarioTour"> | string;
    descripcion?: Prisma.StringWithAggregatesFilter<"ItinerarioTour"> | string;
    latitud?: Prisma.DecimalNullableWithAggregatesFilter<"ItinerarioTour"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.DecimalNullableWithAggregatesFilter<"ItinerarioTour"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ItinerarioTourCreateInput = {
    id?: string;
    orden: number;
    titulo: string;
    descripcion: string;
    latitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tour: Prisma.TourCreateNestedOneWithoutItinerariosInput;
};
export type ItinerarioTourUncheckedCreateInput = {
    id?: string;
    tourId: string;
    orden: number;
    titulo: string;
    descripcion: string;
    latitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ItinerarioTourUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orden?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    latitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tour?: Prisma.TourUpdateOneRequiredWithoutItinerariosNestedInput;
};
export type ItinerarioTourUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tourId?: Prisma.StringFieldUpdateOperationsInput | string;
    orden?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    latitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ItinerarioTourCreateManyInput = {
    id?: string;
    tourId: string;
    orden: number;
    titulo: string;
    descripcion: string;
    latitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ItinerarioTourUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orden?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    latitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ItinerarioTourUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tourId?: Prisma.StringFieldUpdateOperationsInput | string;
    orden?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    latitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ItinerarioTourListRelationFilter = {
    every?: Prisma.ItinerarioTourWhereInput;
    some?: Prisma.ItinerarioTourWhereInput;
    none?: Prisma.ItinerarioTourWhereInput;
};
export type ItinerarioTourOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ItinerarioTourTourIdOrdenCompoundUniqueInput = {
    tourId: string;
    orden: number;
};
export type ItinerarioTourCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tourId?: Prisma.SortOrder;
    orden?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
};
export type ItinerarioTourAvgOrderByAggregateInput = {
    orden?: Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
};
export type ItinerarioTourMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tourId?: Prisma.SortOrder;
    orden?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
};
export type ItinerarioTourMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tourId?: Prisma.SortOrder;
    orden?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
};
export type ItinerarioTourSumOrderByAggregateInput = {
    orden?: Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
};
export type ItinerarioTourCreateNestedManyWithoutTourInput = {
    create?: Prisma.XOR<Prisma.ItinerarioTourCreateWithoutTourInput, Prisma.ItinerarioTourUncheckedCreateWithoutTourInput> | Prisma.ItinerarioTourCreateWithoutTourInput[] | Prisma.ItinerarioTourUncheckedCreateWithoutTourInput[];
    connectOrCreate?: Prisma.ItinerarioTourCreateOrConnectWithoutTourInput | Prisma.ItinerarioTourCreateOrConnectWithoutTourInput[];
    createMany?: Prisma.ItinerarioTourCreateManyTourInputEnvelope;
    connect?: Prisma.ItinerarioTourWhereUniqueInput | Prisma.ItinerarioTourWhereUniqueInput[];
};
export type ItinerarioTourUncheckedCreateNestedManyWithoutTourInput = {
    create?: Prisma.XOR<Prisma.ItinerarioTourCreateWithoutTourInput, Prisma.ItinerarioTourUncheckedCreateWithoutTourInput> | Prisma.ItinerarioTourCreateWithoutTourInput[] | Prisma.ItinerarioTourUncheckedCreateWithoutTourInput[];
    connectOrCreate?: Prisma.ItinerarioTourCreateOrConnectWithoutTourInput | Prisma.ItinerarioTourCreateOrConnectWithoutTourInput[];
    createMany?: Prisma.ItinerarioTourCreateManyTourInputEnvelope;
    connect?: Prisma.ItinerarioTourWhereUniqueInput | Prisma.ItinerarioTourWhereUniqueInput[];
};
export type ItinerarioTourUpdateManyWithoutTourNestedInput = {
    create?: Prisma.XOR<Prisma.ItinerarioTourCreateWithoutTourInput, Prisma.ItinerarioTourUncheckedCreateWithoutTourInput> | Prisma.ItinerarioTourCreateWithoutTourInput[] | Prisma.ItinerarioTourUncheckedCreateWithoutTourInput[];
    connectOrCreate?: Prisma.ItinerarioTourCreateOrConnectWithoutTourInput | Prisma.ItinerarioTourCreateOrConnectWithoutTourInput[];
    upsert?: Prisma.ItinerarioTourUpsertWithWhereUniqueWithoutTourInput | Prisma.ItinerarioTourUpsertWithWhereUniqueWithoutTourInput[];
    createMany?: Prisma.ItinerarioTourCreateManyTourInputEnvelope;
    set?: Prisma.ItinerarioTourWhereUniqueInput | Prisma.ItinerarioTourWhereUniqueInput[];
    disconnect?: Prisma.ItinerarioTourWhereUniqueInput | Prisma.ItinerarioTourWhereUniqueInput[];
    delete?: Prisma.ItinerarioTourWhereUniqueInput | Prisma.ItinerarioTourWhereUniqueInput[];
    connect?: Prisma.ItinerarioTourWhereUniqueInput | Prisma.ItinerarioTourWhereUniqueInput[];
    update?: Prisma.ItinerarioTourUpdateWithWhereUniqueWithoutTourInput | Prisma.ItinerarioTourUpdateWithWhereUniqueWithoutTourInput[];
    updateMany?: Prisma.ItinerarioTourUpdateManyWithWhereWithoutTourInput | Prisma.ItinerarioTourUpdateManyWithWhereWithoutTourInput[];
    deleteMany?: Prisma.ItinerarioTourScalarWhereInput | Prisma.ItinerarioTourScalarWhereInput[];
};
export type ItinerarioTourUncheckedUpdateManyWithoutTourNestedInput = {
    create?: Prisma.XOR<Prisma.ItinerarioTourCreateWithoutTourInput, Prisma.ItinerarioTourUncheckedCreateWithoutTourInput> | Prisma.ItinerarioTourCreateWithoutTourInput[] | Prisma.ItinerarioTourUncheckedCreateWithoutTourInput[];
    connectOrCreate?: Prisma.ItinerarioTourCreateOrConnectWithoutTourInput | Prisma.ItinerarioTourCreateOrConnectWithoutTourInput[];
    upsert?: Prisma.ItinerarioTourUpsertWithWhereUniqueWithoutTourInput | Prisma.ItinerarioTourUpsertWithWhereUniqueWithoutTourInput[];
    createMany?: Prisma.ItinerarioTourCreateManyTourInputEnvelope;
    set?: Prisma.ItinerarioTourWhereUniqueInput | Prisma.ItinerarioTourWhereUniqueInput[];
    disconnect?: Prisma.ItinerarioTourWhereUniqueInput | Prisma.ItinerarioTourWhereUniqueInput[];
    delete?: Prisma.ItinerarioTourWhereUniqueInput | Prisma.ItinerarioTourWhereUniqueInput[];
    connect?: Prisma.ItinerarioTourWhereUniqueInput | Prisma.ItinerarioTourWhereUniqueInput[];
    update?: Prisma.ItinerarioTourUpdateWithWhereUniqueWithoutTourInput | Prisma.ItinerarioTourUpdateWithWhereUniqueWithoutTourInput[];
    updateMany?: Prisma.ItinerarioTourUpdateManyWithWhereWithoutTourInput | Prisma.ItinerarioTourUpdateManyWithWhereWithoutTourInput[];
    deleteMany?: Prisma.ItinerarioTourScalarWhereInput | Prisma.ItinerarioTourScalarWhereInput[];
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type ItinerarioTourCreateWithoutTourInput = {
    id?: string;
    orden: number;
    titulo: string;
    descripcion: string;
    latitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ItinerarioTourUncheckedCreateWithoutTourInput = {
    id?: string;
    orden: number;
    titulo: string;
    descripcion: string;
    latitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ItinerarioTourCreateOrConnectWithoutTourInput = {
    where: Prisma.ItinerarioTourWhereUniqueInput;
    create: Prisma.XOR<Prisma.ItinerarioTourCreateWithoutTourInput, Prisma.ItinerarioTourUncheckedCreateWithoutTourInput>;
};
export type ItinerarioTourCreateManyTourInputEnvelope = {
    data: Prisma.ItinerarioTourCreateManyTourInput | Prisma.ItinerarioTourCreateManyTourInput[];
    skipDuplicates?: boolean;
};
export type ItinerarioTourUpsertWithWhereUniqueWithoutTourInput = {
    where: Prisma.ItinerarioTourWhereUniqueInput;
    update: Prisma.XOR<Prisma.ItinerarioTourUpdateWithoutTourInput, Prisma.ItinerarioTourUncheckedUpdateWithoutTourInput>;
    create: Prisma.XOR<Prisma.ItinerarioTourCreateWithoutTourInput, Prisma.ItinerarioTourUncheckedCreateWithoutTourInput>;
};
export type ItinerarioTourUpdateWithWhereUniqueWithoutTourInput = {
    where: Prisma.ItinerarioTourWhereUniqueInput;
    data: Prisma.XOR<Prisma.ItinerarioTourUpdateWithoutTourInput, Prisma.ItinerarioTourUncheckedUpdateWithoutTourInput>;
};
export type ItinerarioTourUpdateManyWithWhereWithoutTourInput = {
    where: Prisma.ItinerarioTourScalarWhereInput;
    data: Prisma.XOR<Prisma.ItinerarioTourUpdateManyMutationInput, Prisma.ItinerarioTourUncheckedUpdateManyWithoutTourInput>;
};
export type ItinerarioTourScalarWhereInput = {
    AND?: Prisma.ItinerarioTourScalarWhereInput | Prisma.ItinerarioTourScalarWhereInput[];
    OR?: Prisma.ItinerarioTourScalarWhereInput[];
    NOT?: Prisma.ItinerarioTourScalarWhereInput | Prisma.ItinerarioTourScalarWhereInput[];
    id?: Prisma.UuidFilter<"ItinerarioTour"> | string;
    tourId?: Prisma.UuidFilter<"ItinerarioTour"> | string;
    orden?: Prisma.IntFilter<"ItinerarioTour"> | number;
    titulo?: Prisma.StringFilter<"ItinerarioTour"> | string;
    descripcion?: Prisma.StringFilter<"ItinerarioTour"> | string;
    latitud?: Prisma.DecimalNullableFilter<"ItinerarioTour"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.DecimalNullableFilter<"ItinerarioTour"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ItinerarioTourCreateManyTourInput = {
    id?: string;
    orden: number;
    titulo: string;
    descripcion: string;
    latitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ItinerarioTourUpdateWithoutTourInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orden?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    latitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ItinerarioTourUncheckedUpdateWithoutTourInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orden?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    latitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ItinerarioTourUncheckedUpdateManyWithoutTourInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orden?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    latitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ItinerarioTourSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tourId?: boolean;
    orden?: boolean;
    titulo?: boolean;
    descripcion?: boolean;
    latitud?: boolean;
    longitud?: boolean;
    tour?: boolean | Prisma.TourDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["itinerarioTour"]>;
export type ItinerarioTourSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tourId?: boolean;
    orden?: boolean;
    titulo?: boolean;
    descripcion?: boolean;
    latitud?: boolean;
    longitud?: boolean;
    tour?: boolean | Prisma.TourDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["itinerarioTour"]>;
export type ItinerarioTourSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tourId?: boolean;
    orden?: boolean;
    titulo?: boolean;
    descripcion?: boolean;
    latitud?: boolean;
    longitud?: boolean;
    tour?: boolean | Prisma.TourDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["itinerarioTour"]>;
export type ItinerarioTourSelectScalar = {
    id?: boolean;
    tourId?: boolean;
    orden?: boolean;
    titulo?: boolean;
    descripcion?: boolean;
    latitud?: boolean;
    longitud?: boolean;
};
export type ItinerarioTourOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tourId" | "orden" | "titulo" | "descripcion" | "latitud" | "longitud", ExtArgs["result"]["itinerarioTour"]>;
export type ItinerarioTourInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tour?: boolean | Prisma.TourDefaultArgs<ExtArgs>;
};
export type ItinerarioTourIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tour?: boolean | Prisma.TourDefaultArgs<ExtArgs>;
};
export type ItinerarioTourIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tour?: boolean | Prisma.TourDefaultArgs<ExtArgs>;
};
export type $ItinerarioTourPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ItinerarioTour";
    objects: {
        tour: Prisma.$TourPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tourId: string;
        orden: number;
        titulo: string;
        descripcion: string;
        latitud: runtime.Decimal | null;
        longitud: runtime.Decimal | null;
    }, ExtArgs["result"]["itinerarioTour"]>;
    composites: {};
};
export type ItinerarioTourGetPayload<S extends boolean | null | undefined | ItinerarioTourDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ItinerarioTourPayload, S>;
export type ItinerarioTourCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ItinerarioTourFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ItinerarioTourCountAggregateInputType | true;
};
export interface ItinerarioTourDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ItinerarioTour'];
        meta: {
            name: 'ItinerarioTour';
        };
    };
    findUnique<T extends ItinerarioTourFindUniqueArgs>(args: Prisma.SelectSubset<T, ItinerarioTourFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ItinerarioTourClient<runtime.Types.Result.GetResult<Prisma.$ItinerarioTourPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ItinerarioTourFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ItinerarioTourFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ItinerarioTourClient<runtime.Types.Result.GetResult<Prisma.$ItinerarioTourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ItinerarioTourFindFirstArgs>(args?: Prisma.SelectSubset<T, ItinerarioTourFindFirstArgs<ExtArgs>>): Prisma.Prisma__ItinerarioTourClient<runtime.Types.Result.GetResult<Prisma.$ItinerarioTourPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ItinerarioTourFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ItinerarioTourFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ItinerarioTourClient<runtime.Types.Result.GetResult<Prisma.$ItinerarioTourPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ItinerarioTourFindManyArgs>(args?: Prisma.SelectSubset<T, ItinerarioTourFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItinerarioTourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ItinerarioTourCreateArgs>(args: Prisma.SelectSubset<T, ItinerarioTourCreateArgs<ExtArgs>>): Prisma.Prisma__ItinerarioTourClient<runtime.Types.Result.GetResult<Prisma.$ItinerarioTourPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ItinerarioTourCreateManyArgs>(args?: Prisma.SelectSubset<T, ItinerarioTourCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ItinerarioTourCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ItinerarioTourCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItinerarioTourPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ItinerarioTourDeleteArgs>(args: Prisma.SelectSubset<T, ItinerarioTourDeleteArgs<ExtArgs>>): Prisma.Prisma__ItinerarioTourClient<runtime.Types.Result.GetResult<Prisma.$ItinerarioTourPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ItinerarioTourUpdateArgs>(args: Prisma.SelectSubset<T, ItinerarioTourUpdateArgs<ExtArgs>>): Prisma.Prisma__ItinerarioTourClient<runtime.Types.Result.GetResult<Prisma.$ItinerarioTourPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ItinerarioTourDeleteManyArgs>(args?: Prisma.SelectSubset<T, ItinerarioTourDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ItinerarioTourUpdateManyArgs>(args: Prisma.SelectSubset<T, ItinerarioTourUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ItinerarioTourUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ItinerarioTourUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItinerarioTourPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ItinerarioTourUpsertArgs>(args: Prisma.SelectSubset<T, ItinerarioTourUpsertArgs<ExtArgs>>): Prisma.Prisma__ItinerarioTourClient<runtime.Types.Result.GetResult<Prisma.$ItinerarioTourPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ItinerarioTourCountArgs>(args?: Prisma.Subset<T, ItinerarioTourCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ItinerarioTourCountAggregateOutputType> : number>;
    aggregate<T extends ItinerarioTourAggregateArgs>(args: Prisma.Subset<T, ItinerarioTourAggregateArgs>): Prisma.PrismaPromise<GetItinerarioTourAggregateType<T>>;
    groupBy<T extends ItinerarioTourGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ItinerarioTourGroupByArgs['orderBy'];
    } : {
        orderBy?: ItinerarioTourGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ItinerarioTourGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItinerarioTourGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ItinerarioTourFieldRefs;
}
export interface Prisma__ItinerarioTourClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tour<T extends Prisma.TourDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TourDefaultArgs<ExtArgs>>): Prisma.Prisma__TourClient<runtime.Types.Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ItinerarioTourFieldRefs {
    readonly id: Prisma.FieldRef<"ItinerarioTour", 'String'>;
    readonly tourId: Prisma.FieldRef<"ItinerarioTour", 'String'>;
    readonly orden: Prisma.FieldRef<"ItinerarioTour", 'Int'>;
    readonly titulo: Prisma.FieldRef<"ItinerarioTour", 'String'>;
    readonly descripcion: Prisma.FieldRef<"ItinerarioTour", 'String'>;
    readonly latitud: Prisma.FieldRef<"ItinerarioTour", 'Decimal'>;
    readonly longitud: Prisma.FieldRef<"ItinerarioTour", 'Decimal'>;
}
export type ItinerarioTourFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItinerarioTourSelect<ExtArgs> | null;
    omit?: Prisma.ItinerarioTourOmit<ExtArgs> | null;
    include?: Prisma.ItinerarioTourInclude<ExtArgs> | null;
    where: Prisma.ItinerarioTourWhereUniqueInput;
};
export type ItinerarioTourFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItinerarioTourSelect<ExtArgs> | null;
    omit?: Prisma.ItinerarioTourOmit<ExtArgs> | null;
    include?: Prisma.ItinerarioTourInclude<ExtArgs> | null;
    where: Prisma.ItinerarioTourWhereUniqueInput;
};
export type ItinerarioTourFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItinerarioTourSelect<ExtArgs> | null;
    omit?: Prisma.ItinerarioTourOmit<ExtArgs> | null;
    include?: Prisma.ItinerarioTourInclude<ExtArgs> | null;
    where?: Prisma.ItinerarioTourWhereInput;
    orderBy?: Prisma.ItinerarioTourOrderByWithRelationInput | Prisma.ItinerarioTourOrderByWithRelationInput[];
    cursor?: Prisma.ItinerarioTourWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ItinerarioTourScalarFieldEnum | Prisma.ItinerarioTourScalarFieldEnum[];
};
export type ItinerarioTourFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItinerarioTourSelect<ExtArgs> | null;
    omit?: Prisma.ItinerarioTourOmit<ExtArgs> | null;
    include?: Prisma.ItinerarioTourInclude<ExtArgs> | null;
    where?: Prisma.ItinerarioTourWhereInput;
    orderBy?: Prisma.ItinerarioTourOrderByWithRelationInput | Prisma.ItinerarioTourOrderByWithRelationInput[];
    cursor?: Prisma.ItinerarioTourWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ItinerarioTourScalarFieldEnum | Prisma.ItinerarioTourScalarFieldEnum[];
};
export type ItinerarioTourFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItinerarioTourSelect<ExtArgs> | null;
    omit?: Prisma.ItinerarioTourOmit<ExtArgs> | null;
    include?: Prisma.ItinerarioTourInclude<ExtArgs> | null;
    where?: Prisma.ItinerarioTourWhereInput;
    orderBy?: Prisma.ItinerarioTourOrderByWithRelationInput | Prisma.ItinerarioTourOrderByWithRelationInput[];
    cursor?: Prisma.ItinerarioTourWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ItinerarioTourScalarFieldEnum | Prisma.ItinerarioTourScalarFieldEnum[];
};
export type ItinerarioTourCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItinerarioTourSelect<ExtArgs> | null;
    omit?: Prisma.ItinerarioTourOmit<ExtArgs> | null;
    include?: Prisma.ItinerarioTourInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ItinerarioTourCreateInput, Prisma.ItinerarioTourUncheckedCreateInput>;
};
export type ItinerarioTourCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ItinerarioTourCreateManyInput | Prisma.ItinerarioTourCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ItinerarioTourCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItinerarioTourSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ItinerarioTourOmit<ExtArgs> | null;
    data: Prisma.ItinerarioTourCreateManyInput | Prisma.ItinerarioTourCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ItinerarioTourIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ItinerarioTourUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItinerarioTourSelect<ExtArgs> | null;
    omit?: Prisma.ItinerarioTourOmit<ExtArgs> | null;
    include?: Prisma.ItinerarioTourInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ItinerarioTourUpdateInput, Prisma.ItinerarioTourUncheckedUpdateInput>;
    where: Prisma.ItinerarioTourWhereUniqueInput;
};
export type ItinerarioTourUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ItinerarioTourUpdateManyMutationInput, Prisma.ItinerarioTourUncheckedUpdateManyInput>;
    where?: Prisma.ItinerarioTourWhereInput;
    limit?: number;
};
export type ItinerarioTourUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItinerarioTourSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ItinerarioTourOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ItinerarioTourUpdateManyMutationInput, Prisma.ItinerarioTourUncheckedUpdateManyInput>;
    where?: Prisma.ItinerarioTourWhereInput;
    limit?: number;
    include?: Prisma.ItinerarioTourIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ItinerarioTourUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItinerarioTourSelect<ExtArgs> | null;
    omit?: Prisma.ItinerarioTourOmit<ExtArgs> | null;
    include?: Prisma.ItinerarioTourInclude<ExtArgs> | null;
    where: Prisma.ItinerarioTourWhereUniqueInput;
    create: Prisma.XOR<Prisma.ItinerarioTourCreateInput, Prisma.ItinerarioTourUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ItinerarioTourUpdateInput, Prisma.ItinerarioTourUncheckedUpdateInput>;
};
export type ItinerarioTourDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItinerarioTourSelect<ExtArgs> | null;
    omit?: Prisma.ItinerarioTourOmit<ExtArgs> | null;
    include?: Prisma.ItinerarioTourInclude<ExtArgs> | null;
    where: Prisma.ItinerarioTourWhereUniqueInput;
};
export type ItinerarioTourDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItinerarioTourWhereInput;
    limit?: number;
};
export type ItinerarioTourDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItinerarioTourSelect<ExtArgs> | null;
    omit?: Prisma.ItinerarioTourOmit<ExtArgs> | null;
    include?: Prisma.ItinerarioTourInclude<ExtArgs> | null;
};
