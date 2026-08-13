import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ImagenModel = runtime.Types.Result.DefaultSelection<Prisma.$ImagenPayload>;
export type AggregateImagen = {
    _count: ImagenCountAggregateOutputType | null;
    _avg: ImagenAvgAggregateOutputType | null;
    _sum: ImagenSumAggregateOutputType | null;
    _min: ImagenMinAggregateOutputType | null;
    _max: ImagenMaxAggregateOutputType | null;
};
export type ImagenAvgAggregateOutputType = {
    orden: number | null;
};
export type ImagenSumAggregateOutputType = {
    orden: number | null;
};
export type ImagenMinAggregateOutputType = {
    id: string | null;
    transporteId: string | null;
    tourId: string | null;
    url: string | null;
    textoAlterno: string | null;
    orden: number | null;
};
export type ImagenMaxAggregateOutputType = {
    id: string | null;
    transporteId: string | null;
    tourId: string | null;
    url: string | null;
    textoAlterno: string | null;
    orden: number | null;
};
export type ImagenCountAggregateOutputType = {
    id: number;
    transporteId: number;
    tourId: number;
    url: number;
    textoAlterno: number;
    orden: number;
    _all: number;
};
export type ImagenAvgAggregateInputType = {
    orden?: true;
};
export type ImagenSumAggregateInputType = {
    orden?: true;
};
export type ImagenMinAggregateInputType = {
    id?: true;
    transporteId?: true;
    tourId?: true;
    url?: true;
    textoAlterno?: true;
    orden?: true;
};
export type ImagenMaxAggregateInputType = {
    id?: true;
    transporteId?: true;
    tourId?: true;
    url?: true;
    textoAlterno?: true;
    orden?: true;
};
export type ImagenCountAggregateInputType = {
    id?: true;
    transporteId?: true;
    tourId?: true;
    url?: true;
    textoAlterno?: true;
    orden?: true;
    _all?: true;
};
export type ImagenAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImagenWhereInput;
    orderBy?: Prisma.ImagenOrderByWithRelationInput | Prisma.ImagenOrderByWithRelationInput[];
    cursor?: Prisma.ImagenWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ImagenCountAggregateInputType;
    _avg?: ImagenAvgAggregateInputType;
    _sum?: ImagenSumAggregateInputType;
    _min?: ImagenMinAggregateInputType;
    _max?: ImagenMaxAggregateInputType;
};
export type GetImagenAggregateType<T extends ImagenAggregateArgs> = {
    [P in keyof T & keyof AggregateImagen]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateImagen[P]> : Prisma.GetScalarType<T[P], AggregateImagen[P]>;
};
export type ImagenGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImagenWhereInput;
    orderBy?: Prisma.ImagenOrderByWithAggregationInput | Prisma.ImagenOrderByWithAggregationInput[];
    by: Prisma.ImagenScalarFieldEnum[] | Prisma.ImagenScalarFieldEnum;
    having?: Prisma.ImagenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ImagenCountAggregateInputType | true;
    _avg?: ImagenAvgAggregateInputType;
    _sum?: ImagenSumAggregateInputType;
    _min?: ImagenMinAggregateInputType;
    _max?: ImagenMaxAggregateInputType;
};
export type ImagenGroupByOutputType = {
    id: string;
    transporteId: string | null;
    tourId: string | null;
    url: string;
    textoAlterno: string | null;
    orden: number;
    _count: ImagenCountAggregateOutputType | null;
    _avg: ImagenAvgAggregateOutputType | null;
    _sum: ImagenSumAggregateOutputType | null;
    _min: ImagenMinAggregateOutputType | null;
    _max: ImagenMaxAggregateOutputType | null;
};
export type GetImagenGroupByPayload<T extends ImagenGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ImagenGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ImagenGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ImagenGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ImagenGroupByOutputType[P]>;
}>>;
export type ImagenWhereInput = {
    AND?: Prisma.ImagenWhereInput | Prisma.ImagenWhereInput[];
    OR?: Prisma.ImagenWhereInput[];
    NOT?: Prisma.ImagenWhereInput | Prisma.ImagenWhereInput[];
    id?: Prisma.UuidFilter<"Imagen"> | string;
    transporteId?: Prisma.UuidNullableFilter<"Imagen"> | string | null;
    tourId?: Prisma.UuidNullableFilter<"Imagen"> | string | null;
    url?: Prisma.StringFilter<"Imagen"> | string;
    textoAlterno?: Prisma.StringNullableFilter<"Imagen"> | string | null;
    orden?: Prisma.IntFilter<"Imagen"> | number;
    transporte?: Prisma.XOR<Prisma.TransporteNullableScalarRelationFilter, Prisma.TransporteWhereInput> | null;
    tour?: Prisma.XOR<Prisma.TourNullableScalarRelationFilter, Prisma.TourWhereInput> | null;
};
export type ImagenOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    transporteId?: Prisma.SortOrderInput | Prisma.SortOrder;
    tourId?: Prisma.SortOrderInput | Prisma.SortOrder;
    url?: Prisma.SortOrder;
    textoAlterno?: Prisma.SortOrderInput | Prisma.SortOrder;
    orden?: Prisma.SortOrder;
    transporte?: Prisma.TransporteOrderByWithRelationInput;
    tour?: Prisma.TourOrderByWithRelationInput;
};
export type ImagenWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ImagenWhereInput | Prisma.ImagenWhereInput[];
    OR?: Prisma.ImagenWhereInput[];
    NOT?: Prisma.ImagenWhereInput | Prisma.ImagenWhereInput[];
    transporteId?: Prisma.UuidNullableFilter<"Imagen"> | string | null;
    tourId?: Prisma.UuidNullableFilter<"Imagen"> | string | null;
    url?: Prisma.StringFilter<"Imagen"> | string;
    textoAlterno?: Prisma.StringNullableFilter<"Imagen"> | string | null;
    orden?: Prisma.IntFilter<"Imagen"> | number;
    transporte?: Prisma.XOR<Prisma.TransporteNullableScalarRelationFilter, Prisma.TransporteWhereInput> | null;
    tour?: Prisma.XOR<Prisma.TourNullableScalarRelationFilter, Prisma.TourWhereInput> | null;
}, "id">;
export type ImagenOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    transporteId?: Prisma.SortOrderInput | Prisma.SortOrder;
    tourId?: Prisma.SortOrderInput | Prisma.SortOrder;
    url?: Prisma.SortOrder;
    textoAlterno?: Prisma.SortOrderInput | Prisma.SortOrder;
    orden?: Prisma.SortOrder;
    _count?: Prisma.ImagenCountOrderByAggregateInput;
    _avg?: Prisma.ImagenAvgOrderByAggregateInput;
    _max?: Prisma.ImagenMaxOrderByAggregateInput;
    _min?: Prisma.ImagenMinOrderByAggregateInput;
    _sum?: Prisma.ImagenSumOrderByAggregateInput;
};
export type ImagenScalarWhereWithAggregatesInput = {
    AND?: Prisma.ImagenScalarWhereWithAggregatesInput | Prisma.ImagenScalarWhereWithAggregatesInput[];
    OR?: Prisma.ImagenScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ImagenScalarWhereWithAggregatesInput | Prisma.ImagenScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Imagen"> | string;
    transporteId?: Prisma.UuidNullableWithAggregatesFilter<"Imagen"> | string | null;
    tourId?: Prisma.UuidNullableWithAggregatesFilter<"Imagen"> | string | null;
    url?: Prisma.StringWithAggregatesFilter<"Imagen"> | string;
    textoAlterno?: Prisma.StringNullableWithAggregatesFilter<"Imagen"> | string | null;
    orden?: Prisma.IntWithAggregatesFilter<"Imagen"> | number;
};
export type ImagenCreateInput = {
    id?: string;
    url: string;
    textoAlterno?: string | null;
    orden?: number;
    transporte?: Prisma.TransporteCreateNestedOneWithoutImagenesInput;
    tour?: Prisma.TourCreateNestedOneWithoutImagenesInput;
};
export type ImagenUncheckedCreateInput = {
    id?: string;
    transporteId?: string | null;
    tourId?: string | null;
    url: string;
    textoAlterno?: string | null;
    orden?: number;
};
export type ImagenUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    textoAlterno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orden?: Prisma.IntFieldUpdateOperationsInput | number;
    transporte?: Prisma.TransporteUpdateOneWithoutImagenesNestedInput;
    tour?: Prisma.TourUpdateOneWithoutImagenesNestedInput;
};
export type ImagenUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transporteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tourId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    textoAlterno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orden?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ImagenCreateManyInput = {
    id?: string;
    transporteId?: string | null;
    tourId?: string | null;
    url: string;
    textoAlterno?: string | null;
    orden?: number;
};
export type ImagenUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    textoAlterno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orden?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ImagenUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transporteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tourId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    textoAlterno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orden?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ImagenListRelationFilter = {
    every?: Prisma.ImagenWhereInput;
    some?: Prisma.ImagenWhereInput;
    none?: Prisma.ImagenWhereInput;
};
export type ImagenOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ImagenCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    transporteId?: Prisma.SortOrder;
    tourId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    textoAlterno?: Prisma.SortOrder;
    orden?: Prisma.SortOrder;
};
export type ImagenAvgOrderByAggregateInput = {
    orden?: Prisma.SortOrder;
};
export type ImagenMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    transporteId?: Prisma.SortOrder;
    tourId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    textoAlterno?: Prisma.SortOrder;
    orden?: Prisma.SortOrder;
};
export type ImagenMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    transporteId?: Prisma.SortOrder;
    tourId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    textoAlterno?: Prisma.SortOrder;
    orden?: Prisma.SortOrder;
};
export type ImagenSumOrderByAggregateInput = {
    orden?: Prisma.SortOrder;
};
export type ImagenCreateNestedManyWithoutTransporteInput = {
    create?: Prisma.XOR<Prisma.ImagenCreateWithoutTransporteInput, Prisma.ImagenUncheckedCreateWithoutTransporteInput> | Prisma.ImagenCreateWithoutTransporteInput[] | Prisma.ImagenUncheckedCreateWithoutTransporteInput[];
    connectOrCreate?: Prisma.ImagenCreateOrConnectWithoutTransporteInput | Prisma.ImagenCreateOrConnectWithoutTransporteInput[];
    createMany?: Prisma.ImagenCreateManyTransporteInputEnvelope;
    connect?: Prisma.ImagenWhereUniqueInput | Prisma.ImagenWhereUniqueInput[];
};
export type ImagenUncheckedCreateNestedManyWithoutTransporteInput = {
    create?: Prisma.XOR<Prisma.ImagenCreateWithoutTransporteInput, Prisma.ImagenUncheckedCreateWithoutTransporteInput> | Prisma.ImagenCreateWithoutTransporteInput[] | Prisma.ImagenUncheckedCreateWithoutTransporteInput[];
    connectOrCreate?: Prisma.ImagenCreateOrConnectWithoutTransporteInput | Prisma.ImagenCreateOrConnectWithoutTransporteInput[];
    createMany?: Prisma.ImagenCreateManyTransporteInputEnvelope;
    connect?: Prisma.ImagenWhereUniqueInput | Prisma.ImagenWhereUniqueInput[];
};
export type ImagenUpdateManyWithoutTransporteNestedInput = {
    create?: Prisma.XOR<Prisma.ImagenCreateWithoutTransporteInput, Prisma.ImagenUncheckedCreateWithoutTransporteInput> | Prisma.ImagenCreateWithoutTransporteInput[] | Prisma.ImagenUncheckedCreateWithoutTransporteInput[];
    connectOrCreate?: Prisma.ImagenCreateOrConnectWithoutTransporteInput | Prisma.ImagenCreateOrConnectWithoutTransporteInput[];
    upsert?: Prisma.ImagenUpsertWithWhereUniqueWithoutTransporteInput | Prisma.ImagenUpsertWithWhereUniqueWithoutTransporteInput[];
    createMany?: Prisma.ImagenCreateManyTransporteInputEnvelope;
    set?: Prisma.ImagenWhereUniqueInput | Prisma.ImagenWhereUniqueInput[];
    disconnect?: Prisma.ImagenWhereUniqueInput | Prisma.ImagenWhereUniqueInput[];
    delete?: Prisma.ImagenWhereUniqueInput | Prisma.ImagenWhereUniqueInput[];
    connect?: Prisma.ImagenWhereUniqueInput | Prisma.ImagenWhereUniqueInput[];
    update?: Prisma.ImagenUpdateWithWhereUniqueWithoutTransporteInput | Prisma.ImagenUpdateWithWhereUniqueWithoutTransporteInput[];
    updateMany?: Prisma.ImagenUpdateManyWithWhereWithoutTransporteInput | Prisma.ImagenUpdateManyWithWhereWithoutTransporteInput[];
    deleteMany?: Prisma.ImagenScalarWhereInput | Prisma.ImagenScalarWhereInput[];
};
export type ImagenUncheckedUpdateManyWithoutTransporteNestedInput = {
    create?: Prisma.XOR<Prisma.ImagenCreateWithoutTransporteInput, Prisma.ImagenUncheckedCreateWithoutTransporteInput> | Prisma.ImagenCreateWithoutTransporteInput[] | Prisma.ImagenUncheckedCreateWithoutTransporteInput[];
    connectOrCreate?: Prisma.ImagenCreateOrConnectWithoutTransporteInput | Prisma.ImagenCreateOrConnectWithoutTransporteInput[];
    upsert?: Prisma.ImagenUpsertWithWhereUniqueWithoutTransporteInput | Prisma.ImagenUpsertWithWhereUniqueWithoutTransporteInput[];
    createMany?: Prisma.ImagenCreateManyTransporteInputEnvelope;
    set?: Prisma.ImagenWhereUniqueInput | Prisma.ImagenWhereUniqueInput[];
    disconnect?: Prisma.ImagenWhereUniqueInput | Prisma.ImagenWhereUniqueInput[];
    delete?: Prisma.ImagenWhereUniqueInput | Prisma.ImagenWhereUniqueInput[];
    connect?: Prisma.ImagenWhereUniqueInput | Prisma.ImagenWhereUniqueInput[];
    update?: Prisma.ImagenUpdateWithWhereUniqueWithoutTransporteInput | Prisma.ImagenUpdateWithWhereUniqueWithoutTransporteInput[];
    updateMany?: Prisma.ImagenUpdateManyWithWhereWithoutTransporteInput | Prisma.ImagenUpdateManyWithWhereWithoutTransporteInput[];
    deleteMany?: Prisma.ImagenScalarWhereInput | Prisma.ImagenScalarWhereInput[];
};
export type ImagenCreateNestedManyWithoutTourInput = {
    create?: Prisma.XOR<Prisma.ImagenCreateWithoutTourInput, Prisma.ImagenUncheckedCreateWithoutTourInput> | Prisma.ImagenCreateWithoutTourInput[] | Prisma.ImagenUncheckedCreateWithoutTourInput[];
    connectOrCreate?: Prisma.ImagenCreateOrConnectWithoutTourInput | Prisma.ImagenCreateOrConnectWithoutTourInput[];
    createMany?: Prisma.ImagenCreateManyTourInputEnvelope;
    connect?: Prisma.ImagenWhereUniqueInput | Prisma.ImagenWhereUniqueInput[];
};
export type ImagenUncheckedCreateNestedManyWithoutTourInput = {
    create?: Prisma.XOR<Prisma.ImagenCreateWithoutTourInput, Prisma.ImagenUncheckedCreateWithoutTourInput> | Prisma.ImagenCreateWithoutTourInput[] | Prisma.ImagenUncheckedCreateWithoutTourInput[];
    connectOrCreate?: Prisma.ImagenCreateOrConnectWithoutTourInput | Prisma.ImagenCreateOrConnectWithoutTourInput[];
    createMany?: Prisma.ImagenCreateManyTourInputEnvelope;
    connect?: Prisma.ImagenWhereUniqueInput | Prisma.ImagenWhereUniqueInput[];
};
export type ImagenUpdateManyWithoutTourNestedInput = {
    create?: Prisma.XOR<Prisma.ImagenCreateWithoutTourInput, Prisma.ImagenUncheckedCreateWithoutTourInput> | Prisma.ImagenCreateWithoutTourInput[] | Prisma.ImagenUncheckedCreateWithoutTourInput[];
    connectOrCreate?: Prisma.ImagenCreateOrConnectWithoutTourInput | Prisma.ImagenCreateOrConnectWithoutTourInput[];
    upsert?: Prisma.ImagenUpsertWithWhereUniqueWithoutTourInput | Prisma.ImagenUpsertWithWhereUniqueWithoutTourInput[];
    createMany?: Prisma.ImagenCreateManyTourInputEnvelope;
    set?: Prisma.ImagenWhereUniqueInput | Prisma.ImagenWhereUniqueInput[];
    disconnect?: Prisma.ImagenWhereUniqueInput | Prisma.ImagenWhereUniqueInput[];
    delete?: Prisma.ImagenWhereUniqueInput | Prisma.ImagenWhereUniqueInput[];
    connect?: Prisma.ImagenWhereUniqueInput | Prisma.ImagenWhereUniqueInput[];
    update?: Prisma.ImagenUpdateWithWhereUniqueWithoutTourInput | Prisma.ImagenUpdateWithWhereUniqueWithoutTourInput[];
    updateMany?: Prisma.ImagenUpdateManyWithWhereWithoutTourInput | Prisma.ImagenUpdateManyWithWhereWithoutTourInput[];
    deleteMany?: Prisma.ImagenScalarWhereInput | Prisma.ImagenScalarWhereInput[];
};
export type ImagenUncheckedUpdateManyWithoutTourNestedInput = {
    create?: Prisma.XOR<Prisma.ImagenCreateWithoutTourInput, Prisma.ImagenUncheckedCreateWithoutTourInput> | Prisma.ImagenCreateWithoutTourInput[] | Prisma.ImagenUncheckedCreateWithoutTourInput[];
    connectOrCreate?: Prisma.ImagenCreateOrConnectWithoutTourInput | Prisma.ImagenCreateOrConnectWithoutTourInput[];
    upsert?: Prisma.ImagenUpsertWithWhereUniqueWithoutTourInput | Prisma.ImagenUpsertWithWhereUniqueWithoutTourInput[];
    createMany?: Prisma.ImagenCreateManyTourInputEnvelope;
    set?: Prisma.ImagenWhereUniqueInput | Prisma.ImagenWhereUniqueInput[];
    disconnect?: Prisma.ImagenWhereUniqueInput | Prisma.ImagenWhereUniqueInput[];
    delete?: Prisma.ImagenWhereUniqueInput | Prisma.ImagenWhereUniqueInput[];
    connect?: Prisma.ImagenWhereUniqueInput | Prisma.ImagenWhereUniqueInput[];
    update?: Prisma.ImagenUpdateWithWhereUniqueWithoutTourInput | Prisma.ImagenUpdateWithWhereUniqueWithoutTourInput[];
    updateMany?: Prisma.ImagenUpdateManyWithWhereWithoutTourInput | Prisma.ImagenUpdateManyWithWhereWithoutTourInput[];
    deleteMany?: Prisma.ImagenScalarWhereInput | Prisma.ImagenScalarWhereInput[];
};
export type ImagenCreateWithoutTransporteInput = {
    id?: string;
    url: string;
    textoAlterno?: string | null;
    orden?: number;
    tour?: Prisma.TourCreateNestedOneWithoutImagenesInput;
};
export type ImagenUncheckedCreateWithoutTransporteInput = {
    id?: string;
    tourId?: string | null;
    url: string;
    textoAlterno?: string | null;
    orden?: number;
};
export type ImagenCreateOrConnectWithoutTransporteInput = {
    where: Prisma.ImagenWhereUniqueInput;
    create: Prisma.XOR<Prisma.ImagenCreateWithoutTransporteInput, Prisma.ImagenUncheckedCreateWithoutTransporteInput>;
};
export type ImagenCreateManyTransporteInputEnvelope = {
    data: Prisma.ImagenCreateManyTransporteInput | Prisma.ImagenCreateManyTransporteInput[];
    skipDuplicates?: boolean;
};
export type ImagenUpsertWithWhereUniqueWithoutTransporteInput = {
    where: Prisma.ImagenWhereUniqueInput;
    update: Prisma.XOR<Prisma.ImagenUpdateWithoutTransporteInput, Prisma.ImagenUncheckedUpdateWithoutTransporteInput>;
    create: Prisma.XOR<Prisma.ImagenCreateWithoutTransporteInput, Prisma.ImagenUncheckedCreateWithoutTransporteInput>;
};
export type ImagenUpdateWithWhereUniqueWithoutTransporteInput = {
    where: Prisma.ImagenWhereUniqueInput;
    data: Prisma.XOR<Prisma.ImagenUpdateWithoutTransporteInput, Prisma.ImagenUncheckedUpdateWithoutTransporteInput>;
};
export type ImagenUpdateManyWithWhereWithoutTransporteInput = {
    where: Prisma.ImagenScalarWhereInput;
    data: Prisma.XOR<Prisma.ImagenUpdateManyMutationInput, Prisma.ImagenUncheckedUpdateManyWithoutTransporteInput>;
};
export type ImagenScalarWhereInput = {
    AND?: Prisma.ImagenScalarWhereInput | Prisma.ImagenScalarWhereInput[];
    OR?: Prisma.ImagenScalarWhereInput[];
    NOT?: Prisma.ImagenScalarWhereInput | Prisma.ImagenScalarWhereInput[];
    id?: Prisma.UuidFilter<"Imagen"> | string;
    transporteId?: Prisma.UuidNullableFilter<"Imagen"> | string | null;
    tourId?: Prisma.UuidNullableFilter<"Imagen"> | string | null;
    url?: Prisma.StringFilter<"Imagen"> | string;
    textoAlterno?: Prisma.StringNullableFilter<"Imagen"> | string | null;
    orden?: Prisma.IntFilter<"Imagen"> | number;
};
export type ImagenCreateWithoutTourInput = {
    id?: string;
    url: string;
    textoAlterno?: string | null;
    orden?: number;
    transporte?: Prisma.TransporteCreateNestedOneWithoutImagenesInput;
};
export type ImagenUncheckedCreateWithoutTourInput = {
    id?: string;
    transporteId?: string | null;
    url: string;
    textoAlterno?: string | null;
    orden?: number;
};
export type ImagenCreateOrConnectWithoutTourInput = {
    where: Prisma.ImagenWhereUniqueInput;
    create: Prisma.XOR<Prisma.ImagenCreateWithoutTourInput, Prisma.ImagenUncheckedCreateWithoutTourInput>;
};
export type ImagenCreateManyTourInputEnvelope = {
    data: Prisma.ImagenCreateManyTourInput | Prisma.ImagenCreateManyTourInput[];
    skipDuplicates?: boolean;
};
export type ImagenUpsertWithWhereUniqueWithoutTourInput = {
    where: Prisma.ImagenWhereUniqueInput;
    update: Prisma.XOR<Prisma.ImagenUpdateWithoutTourInput, Prisma.ImagenUncheckedUpdateWithoutTourInput>;
    create: Prisma.XOR<Prisma.ImagenCreateWithoutTourInput, Prisma.ImagenUncheckedCreateWithoutTourInput>;
};
export type ImagenUpdateWithWhereUniqueWithoutTourInput = {
    where: Prisma.ImagenWhereUniqueInput;
    data: Prisma.XOR<Prisma.ImagenUpdateWithoutTourInput, Prisma.ImagenUncheckedUpdateWithoutTourInput>;
};
export type ImagenUpdateManyWithWhereWithoutTourInput = {
    where: Prisma.ImagenScalarWhereInput;
    data: Prisma.XOR<Prisma.ImagenUpdateManyMutationInput, Prisma.ImagenUncheckedUpdateManyWithoutTourInput>;
};
export type ImagenCreateManyTransporteInput = {
    id?: string;
    tourId?: string | null;
    url: string;
    textoAlterno?: string | null;
    orden?: number;
};
export type ImagenUpdateWithoutTransporteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    textoAlterno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orden?: Prisma.IntFieldUpdateOperationsInput | number;
    tour?: Prisma.TourUpdateOneWithoutImagenesNestedInput;
};
export type ImagenUncheckedUpdateWithoutTransporteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tourId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    textoAlterno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orden?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ImagenUncheckedUpdateManyWithoutTransporteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tourId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    textoAlterno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orden?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ImagenCreateManyTourInput = {
    id?: string;
    transporteId?: string | null;
    url: string;
    textoAlterno?: string | null;
    orden?: number;
};
export type ImagenUpdateWithoutTourInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    textoAlterno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orden?: Prisma.IntFieldUpdateOperationsInput | number;
    transporte?: Prisma.TransporteUpdateOneWithoutImagenesNestedInput;
};
export type ImagenUncheckedUpdateWithoutTourInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transporteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    textoAlterno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orden?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ImagenUncheckedUpdateManyWithoutTourInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transporteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    textoAlterno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orden?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ImagenSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    transporteId?: boolean;
    tourId?: boolean;
    url?: boolean;
    textoAlterno?: boolean;
    orden?: boolean;
    transporte?: boolean | Prisma.Imagen$transporteArgs<ExtArgs>;
    tour?: boolean | Prisma.Imagen$tourArgs<ExtArgs>;
}, ExtArgs["result"]["imagen"]>;
export type ImagenSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    transporteId?: boolean;
    tourId?: boolean;
    url?: boolean;
    textoAlterno?: boolean;
    orden?: boolean;
    transporte?: boolean | Prisma.Imagen$transporteArgs<ExtArgs>;
    tour?: boolean | Prisma.Imagen$tourArgs<ExtArgs>;
}, ExtArgs["result"]["imagen"]>;
export type ImagenSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    transporteId?: boolean;
    tourId?: boolean;
    url?: boolean;
    textoAlterno?: boolean;
    orden?: boolean;
    transporte?: boolean | Prisma.Imagen$transporteArgs<ExtArgs>;
    tour?: boolean | Prisma.Imagen$tourArgs<ExtArgs>;
}, ExtArgs["result"]["imagen"]>;
export type ImagenSelectScalar = {
    id?: boolean;
    transporteId?: boolean;
    tourId?: boolean;
    url?: boolean;
    textoAlterno?: boolean;
    orden?: boolean;
};
export type ImagenOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "transporteId" | "tourId" | "url" | "textoAlterno" | "orden", ExtArgs["result"]["imagen"]>;
export type ImagenInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transporte?: boolean | Prisma.Imagen$transporteArgs<ExtArgs>;
    tour?: boolean | Prisma.Imagen$tourArgs<ExtArgs>;
};
export type ImagenIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transporte?: boolean | Prisma.Imagen$transporteArgs<ExtArgs>;
    tour?: boolean | Prisma.Imagen$tourArgs<ExtArgs>;
};
export type ImagenIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transporte?: boolean | Prisma.Imagen$transporteArgs<ExtArgs>;
    tour?: boolean | Prisma.Imagen$tourArgs<ExtArgs>;
};
export type $ImagenPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Imagen";
    objects: {
        transporte: Prisma.$TransportePayload<ExtArgs> | null;
        tour: Prisma.$TourPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        transporteId: string | null;
        tourId: string | null;
        url: string;
        textoAlterno: string | null;
        orden: number;
    }, ExtArgs["result"]["imagen"]>;
    composites: {};
};
export type ImagenGetPayload<S extends boolean | null | undefined | ImagenDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ImagenPayload, S>;
export type ImagenCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ImagenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ImagenCountAggregateInputType | true;
};
export interface ImagenDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Imagen'];
        meta: {
            name: 'Imagen';
        };
    };
    findUnique<T extends ImagenFindUniqueArgs>(args: Prisma.SelectSubset<T, ImagenFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ImagenClient<runtime.Types.Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ImagenFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ImagenFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ImagenClient<runtime.Types.Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ImagenFindFirstArgs>(args?: Prisma.SelectSubset<T, ImagenFindFirstArgs<ExtArgs>>): Prisma.Prisma__ImagenClient<runtime.Types.Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ImagenFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ImagenFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ImagenClient<runtime.Types.Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ImagenFindManyArgs>(args?: Prisma.SelectSubset<T, ImagenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ImagenCreateArgs>(args: Prisma.SelectSubset<T, ImagenCreateArgs<ExtArgs>>): Prisma.Prisma__ImagenClient<runtime.Types.Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ImagenCreateManyArgs>(args?: Prisma.SelectSubset<T, ImagenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ImagenCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ImagenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ImagenDeleteArgs>(args: Prisma.SelectSubset<T, ImagenDeleteArgs<ExtArgs>>): Prisma.Prisma__ImagenClient<runtime.Types.Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ImagenUpdateArgs>(args: Prisma.SelectSubset<T, ImagenUpdateArgs<ExtArgs>>): Prisma.Prisma__ImagenClient<runtime.Types.Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ImagenDeleteManyArgs>(args?: Prisma.SelectSubset<T, ImagenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ImagenUpdateManyArgs>(args: Prisma.SelectSubset<T, ImagenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ImagenUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ImagenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ImagenUpsertArgs>(args: Prisma.SelectSubset<T, ImagenUpsertArgs<ExtArgs>>): Prisma.Prisma__ImagenClient<runtime.Types.Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ImagenCountArgs>(args?: Prisma.Subset<T, ImagenCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ImagenCountAggregateOutputType> : number>;
    aggregate<T extends ImagenAggregateArgs>(args: Prisma.Subset<T, ImagenAggregateArgs>): Prisma.PrismaPromise<GetImagenAggregateType<T>>;
    groupBy<T extends ImagenGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ImagenGroupByArgs['orderBy'];
    } : {
        orderBy?: ImagenGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ImagenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ImagenFieldRefs;
}
export interface Prisma__ImagenClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    transporte<T extends Prisma.Imagen$transporteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Imagen$transporteArgs<ExtArgs>>): Prisma.Prisma__TransporteClient<runtime.Types.Result.GetResult<Prisma.$TransportePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    tour<T extends Prisma.Imagen$tourArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Imagen$tourArgs<ExtArgs>>): Prisma.Prisma__TourClient<runtime.Types.Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ImagenFieldRefs {
    readonly id: Prisma.FieldRef<"Imagen", 'String'>;
    readonly transporteId: Prisma.FieldRef<"Imagen", 'String'>;
    readonly tourId: Prisma.FieldRef<"Imagen", 'String'>;
    readonly url: Prisma.FieldRef<"Imagen", 'String'>;
    readonly textoAlterno: Prisma.FieldRef<"Imagen", 'String'>;
    readonly orden: Prisma.FieldRef<"Imagen", 'Int'>;
}
export type ImagenFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImagenSelect<ExtArgs> | null;
    omit?: Prisma.ImagenOmit<ExtArgs> | null;
    include?: Prisma.ImagenInclude<ExtArgs> | null;
    where: Prisma.ImagenWhereUniqueInput;
};
export type ImagenFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImagenSelect<ExtArgs> | null;
    omit?: Prisma.ImagenOmit<ExtArgs> | null;
    include?: Prisma.ImagenInclude<ExtArgs> | null;
    where: Prisma.ImagenWhereUniqueInput;
};
export type ImagenFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImagenSelect<ExtArgs> | null;
    omit?: Prisma.ImagenOmit<ExtArgs> | null;
    include?: Prisma.ImagenInclude<ExtArgs> | null;
    where?: Prisma.ImagenWhereInput;
    orderBy?: Prisma.ImagenOrderByWithRelationInput | Prisma.ImagenOrderByWithRelationInput[];
    cursor?: Prisma.ImagenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ImagenScalarFieldEnum | Prisma.ImagenScalarFieldEnum[];
};
export type ImagenFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImagenSelect<ExtArgs> | null;
    omit?: Prisma.ImagenOmit<ExtArgs> | null;
    include?: Prisma.ImagenInclude<ExtArgs> | null;
    where?: Prisma.ImagenWhereInput;
    orderBy?: Prisma.ImagenOrderByWithRelationInput | Prisma.ImagenOrderByWithRelationInput[];
    cursor?: Prisma.ImagenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ImagenScalarFieldEnum | Prisma.ImagenScalarFieldEnum[];
};
export type ImagenFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImagenSelect<ExtArgs> | null;
    omit?: Prisma.ImagenOmit<ExtArgs> | null;
    include?: Prisma.ImagenInclude<ExtArgs> | null;
    where?: Prisma.ImagenWhereInput;
    orderBy?: Prisma.ImagenOrderByWithRelationInput | Prisma.ImagenOrderByWithRelationInput[];
    cursor?: Prisma.ImagenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ImagenScalarFieldEnum | Prisma.ImagenScalarFieldEnum[];
};
export type ImagenCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImagenSelect<ExtArgs> | null;
    omit?: Prisma.ImagenOmit<ExtArgs> | null;
    include?: Prisma.ImagenInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ImagenCreateInput, Prisma.ImagenUncheckedCreateInput>;
};
export type ImagenCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ImagenCreateManyInput | Prisma.ImagenCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ImagenCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImagenSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ImagenOmit<ExtArgs> | null;
    data: Prisma.ImagenCreateManyInput | Prisma.ImagenCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ImagenIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ImagenUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImagenSelect<ExtArgs> | null;
    omit?: Prisma.ImagenOmit<ExtArgs> | null;
    include?: Prisma.ImagenInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ImagenUpdateInput, Prisma.ImagenUncheckedUpdateInput>;
    where: Prisma.ImagenWhereUniqueInput;
};
export type ImagenUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ImagenUpdateManyMutationInput, Prisma.ImagenUncheckedUpdateManyInput>;
    where?: Prisma.ImagenWhereInput;
    limit?: number;
};
export type ImagenUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImagenSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ImagenOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ImagenUpdateManyMutationInput, Prisma.ImagenUncheckedUpdateManyInput>;
    where?: Prisma.ImagenWhereInput;
    limit?: number;
    include?: Prisma.ImagenIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ImagenUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImagenSelect<ExtArgs> | null;
    omit?: Prisma.ImagenOmit<ExtArgs> | null;
    include?: Prisma.ImagenInclude<ExtArgs> | null;
    where: Prisma.ImagenWhereUniqueInput;
    create: Prisma.XOR<Prisma.ImagenCreateInput, Prisma.ImagenUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ImagenUpdateInput, Prisma.ImagenUncheckedUpdateInput>;
};
export type ImagenDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImagenSelect<ExtArgs> | null;
    omit?: Prisma.ImagenOmit<ExtArgs> | null;
    include?: Prisma.ImagenInclude<ExtArgs> | null;
    where: Prisma.ImagenWhereUniqueInput;
};
export type ImagenDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImagenWhereInput;
    limit?: number;
};
export type Imagen$transporteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransporteSelect<ExtArgs> | null;
    omit?: Prisma.TransporteOmit<ExtArgs> | null;
    include?: Prisma.TransporteInclude<ExtArgs> | null;
    where?: Prisma.TransporteWhereInput;
};
export type Imagen$tourArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TourSelect<ExtArgs> | null;
    omit?: Prisma.TourOmit<ExtArgs> | null;
    include?: Prisma.TourInclude<ExtArgs> | null;
    where?: Prisma.TourWhereInput;
};
export type ImagenDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImagenSelect<ExtArgs> | null;
    omit?: Prisma.ImagenOmit<ExtArgs> | null;
    include?: Prisma.ImagenInclude<ExtArgs> | null;
};
