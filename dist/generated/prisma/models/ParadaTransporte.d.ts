import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ParadaTransporteModel = runtime.Types.Result.DefaultSelection<Prisma.$ParadaTransportePayload>;
export type AggregateParadaTransporte = {
    _count: ParadaTransporteCountAggregateOutputType | null;
    _avg: ParadaTransporteAvgAggregateOutputType | null;
    _sum: ParadaTransporteSumAggregateOutputType | null;
    _min: ParadaTransporteMinAggregateOutputType | null;
    _max: ParadaTransporteMaxAggregateOutputType | null;
};
export type ParadaTransporteAvgAggregateOutputType = {
    orden: number | null;
    latitud: runtime.Decimal | null;
    longitud: runtime.Decimal | null;
    minutos: number | null;
};
export type ParadaTransporteSumAggregateOutputType = {
    orden: number | null;
    latitud: runtime.Decimal | null;
    longitud: runtime.Decimal | null;
    minutos: number | null;
};
export type ParadaTransporteMinAggregateOutputType = {
    id: string | null;
    transporteId: string | null;
    orden: number | null;
    nombre: string | null;
    latitud: runtime.Decimal | null;
    longitud: runtime.Decimal | null;
    minutos: number | null;
};
export type ParadaTransporteMaxAggregateOutputType = {
    id: string | null;
    transporteId: string | null;
    orden: number | null;
    nombre: string | null;
    latitud: runtime.Decimal | null;
    longitud: runtime.Decimal | null;
    minutos: number | null;
};
export type ParadaTransporteCountAggregateOutputType = {
    id: number;
    transporteId: number;
    orden: number;
    nombre: number;
    latitud: number;
    longitud: number;
    minutos: number;
    _all: number;
};
export type ParadaTransporteAvgAggregateInputType = {
    orden?: true;
    latitud?: true;
    longitud?: true;
    minutos?: true;
};
export type ParadaTransporteSumAggregateInputType = {
    orden?: true;
    latitud?: true;
    longitud?: true;
    minutos?: true;
};
export type ParadaTransporteMinAggregateInputType = {
    id?: true;
    transporteId?: true;
    orden?: true;
    nombre?: true;
    latitud?: true;
    longitud?: true;
    minutos?: true;
};
export type ParadaTransporteMaxAggregateInputType = {
    id?: true;
    transporteId?: true;
    orden?: true;
    nombre?: true;
    latitud?: true;
    longitud?: true;
    minutos?: true;
};
export type ParadaTransporteCountAggregateInputType = {
    id?: true;
    transporteId?: true;
    orden?: true;
    nombre?: true;
    latitud?: true;
    longitud?: true;
    minutos?: true;
    _all?: true;
};
export type ParadaTransporteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParadaTransporteWhereInput;
    orderBy?: Prisma.ParadaTransporteOrderByWithRelationInput | Prisma.ParadaTransporteOrderByWithRelationInput[];
    cursor?: Prisma.ParadaTransporteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ParadaTransporteCountAggregateInputType;
    _avg?: ParadaTransporteAvgAggregateInputType;
    _sum?: ParadaTransporteSumAggregateInputType;
    _min?: ParadaTransporteMinAggregateInputType;
    _max?: ParadaTransporteMaxAggregateInputType;
};
export type GetParadaTransporteAggregateType<T extends ParadaTransporteAggregateArgs> = {
    [P in keyof T & keyof AggregateParadaTransporte]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateParadaTransporte[P]> : Prisma.GetScalarType<T[P], AggregateParadaTransporte[P]>;
};
export type ParadaTransporteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParadaTransporteWhereInput;
    orderBy?: Prisma.ParadaTransporteOrderByWithAggregationInput | Prisma.ParadaTransporteOrderByWithAggregationInput[];
    by: Prisma.ParadaTransporteScalarFieldEnum[] | Prisma.ParadaTransporteScalarFieldEnum;
    having?: Prisma.ParadaTransporteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ParadaTransporteCountAggregateInputType | true;
    _avg?: ParadaTransporteAvgAggregateInputType;
    _sum?: ParadaTransporteSumAggregateInputType;
    _min?: ParadaTransporteMinAggregateInputType;
    _max?: ParadaTransporteMaxAggregateInputType;
};
export type ParadaTransporteGroupByOutputType = {
    id: string;
    transporteId: string;
    orden: number;
    nombre: string;
    latitud: runtime.Decimal;
    longitud: runtime.Decimal;
    minutos: number;
    _count: ParadaTransporteCountAggregateOutputType | null;
    _avg: ParadaTransporteAvgAggregateOutputType | null;
    _sum: ParadaTransporteSumAggregateOutputType | null;
    _min: ParadaTransporteMinAggregateOutputType | null;
    _max: ParadaTransporteMaxAggregateOutputType | null;
};
export type GetParadaTransporteGroupByPayload<T extends ParadaTransporteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ParadaTransporteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ParadaTransporteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ParadaTransporteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ParadaTransporteGroupByOutputType[P]>;
}>>;
export type ParadaTransporteWhereInput = {
    AND?: Prisma.ParadaTransporteWhereInput | Prisma.ParadaTransporteWhereInput[];
    OR?: Prisma.ParadaTransporteWhereInput[];
    NOT?: Prisma.ParadaTransporteWhereInput | Prisma.ParadaTransporteWhereInput[];
    id?: Prisma.UuidFilter<"ParadaTransporte"> | string;
    transporteId?: Prisma.UuidFilter<"ParadaTransporte"> | string;
    orden?: Prisma.IntFilter<"ParadaTransporte"> | number;
    nombre?: Prisma.StringFilter<"ParadaTransporte"> | string;
    latitud?: Prisma.DecimalFilter<"ParadaTransporte"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud?: Prisma.DecimalFilter<"ParadaTransporte"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minutos?: Prisma.IntFilter<"ParadaTransporte"> | number;
    transporte?: Prisma.XOR<Prisma.TransporteScalarRelationFilter, Prisma.TransporteWhereInput>;
};
export type ParadaTransporteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    transporteId?: Prisma.SortOrder;
    orden?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
    minutos?: Prisma.SortOrder;
    transporte?: Prisma.TransporteOrderByWithRelationInput;
};
export type ParadaTransporteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    transporteId_orden?: Prisma.ParadaTransporteTransporteIdOrdenCompoundUniqueInput;
    AND?: Prisma.ParadaTransporteWhereInput | Prisma.ParadaTransporteWhereInput[];
    OR?: Prisma.ParadaTransporteWhereInput[];
    NOT?: Prisma.ParadaTransporteWhereInput | Prisma.ParadaTransporteWhereInput[];
    transporteId?: Prisma.UuidFilter<"ParadaTransporte"> | string;
    orden?: Prisma.IntFilter<"ParadaTransporte"> | number;
    nombre?: Prisma.StringFilter<"ParadaTransporte"> | string;
    latitud?: Prisma.DecimalFilter<"ParadaTransporte"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud?: Prisma.DecimalFilter<"ParadaTransporte"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minutos?: Prisma.IntFilter<"ParadaTransporte"> | number;
    transporte?: Prisma.XOR<Prisma.TransporteScalarRelationFilter, Prisma.TransporteWhereInput>;
}, "id" | "transporteId_orden">;
export type ParadaTransporteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    transporteId?: Prisma.SortOrder;
    orden?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
    minutos?: Prisma.SortOrder;
    _count?: Prisma.ParadaTransporteCountOrderByAggregateInput;
    _avg?: Prisma.ParadaTransporteAvgOrderByAggregateInput;
    _max?: Prisma.ParadaTransporteMaxOrderByAggregateInput;
    _min?: Prisma.ParadaTransporteMinOrderByAggregateInput;
    _sum?: Prisma.ParadaTransporteSumOrderByAggregateInput;
};
export type ParadaTransporteScalarWhereWithAggregatesInput = {
    AND?: Prisma.ParadaTransporteScalarWhereWithAggregatesInput | Prisma.ParadaTransporteScalarWhereWithAggregatesInput[];
    OR?: Prisma.ParadaTransporteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ParadaTransporteScalarWhereWithAggregatesInput | Prisma.ParadaTransporteScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ParadaTransporte"> | string;
    transporteId?: Prisma.UuidWithAggregatesFilter<"ParadaTransporte"> | string;
    orden?: Prisma.IntWithAggregatesFilter<"ParadaTransporte"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"ParadaTransporte"> | string;
    latitud?: Prisma.DecimalWithAggregatesFilter<"ParadaTransporte"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud?: Prisma.DecimalWithAggregatesFilter<"ParadaTransporte"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minutos?: Prisma.IntWithAggregatesFilter<"ParadaTransporte"> | number;
};
export type ParadaTransporteCreateInput = {
    id?: string;
    orden: number;
    nombre: string;
    latitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minutos: number;
    transporte: Prisma.TransporteCreateNestedOneWithoutParadasInput;
};
export type ParadaTransporteUncheckedCreateInput = {
    id?: string;
    transporteId: string;
    orden: number;
    nombre: string;
    latitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minutos: number;
};
export type ParadaTransporteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orden?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    latitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minutos?: Prisma.IntFieldUpdateOperationsInput | number;
    transporte?: Prisma.TransporteUpdateOneRequiredWithoutParadasNestedInput;
};
export type ParadaTransporteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transporteId?: Prisma.StringFieldUpdateOperationsInput | string;
    orden?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    latitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minutos?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ParadaTransporteCreateManyInput = {
    id?: string;
    transporteId: string;
    orden: number;
    nombre: string;
    latitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minutos: number;
};
export type ParadaTransporteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orden?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    latitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minutos?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ParadaTransporteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transporteId?: Prisma.StringFieldUpdateOperationsInput | string;
    orden?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    latitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minutos?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ParadaTransporteListRelationFilter = {
    every?: Prisma.ParadaTransporteWhereInput;
    some?: Prisma.ParadaTransporteWhereInput;
    none?: Prisma.ParadaTransporteWhereInput;
};
export type ParadaTransporteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ParadaTransporteTransporteIdOrdenCompoundUniqueInput = {
    transporteId: string;
    orden: number;
};
export type ParadaTransporteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    transporteId?: Prisma.SortOrder;
    orden?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
    minutos?: Prisma.SortOrder;
};
export type ParadaTransporteAvgOrderByAggregateInput = {
    orden?: Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
    minutos?: Prisma.SortOrder;
};
export type ParadaTransporteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    transporteId?: Prisma.SortOrder;
    orden?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
    minutos?: Prisma.SortOrder;
};
export type ParadaTransporteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    transporteId?: Prisma.SortOrder;
    orden?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
    minutos?: Prisma.SortOrder;
};
export type ParadaTransporteSumOrderByAggregateInput = {
    orden?: Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
    minutos?: Prisma.SortOrder;
};
export type ParadaTransporteCreateNestedManyWithoutTransporteInput = {
    create?: Prisma.XOR<Prisma.ParadaTransporteCreateWithoutTransporteInput, Prisma.ParadaTransporteUncheckedCreateWithoutTransporteInput> | Prisma.ParadaTransporteCreateWithoutTransporteInput[] | Prisma.ParadaTransporteUncheckedCreateWithoutTransporteInput[];
    connectOrCreate?: Prisma.ParadaTransporteCreateOrConnectWithoutTransporteInput | Prisma.ParadaTransporteCreateOrConnectWithoutTransporteInput[];
    createMany?: Prisma.ParadaTransporteCreateManyTransporteInputEnvelope;
    connect?: Prisma.ParadaTransporteWhereUniqueInput | Prisma.ParadaTransporteWhereUniqueInput[];
};
export type ParadaTransporteUncheckedCreateNestedManyWithoutTransporteInput = {
    create?: Prisma.XOR<Prisma.ParadaTransporteCreateWithoutTransporteInput, Prisma.ParadaTransporteUncheckedCreateWithoutTransporteInput> | Prisma.ParadaTransporteCreateWithoutTransporteInput[] | Prisma.ParadaTransporteUncheckedCreateWithoutTransporteInput[];
    connectOrCreate?: Prisma.ParadaTransporteCreateOrConnectWithoutTransporteInput | Prisma.ParadaTransporteCreateOrConnectWithoutTransporteInput[];
    createMany?: Prisma.ParadaTransporteCreateManyTransporteInputEnvelope;
    connect?: Prisma.ParadaTransporteWhereUniqueInput | Prisma.ParadaTransporteWhereUniqueInput[];
};
export type ParadaTransporteUpdateManyWithoutTransporteNestedInput = {
    create?: Prisma.XOR<Prisma.ParadaTransporteCreateWithoutTransporteInput, Prisma.ParadaTransporteUncheckedCreateWithoutTransporteInput> | Prisma.ParadaTransporteCreateWithoutTransporteInput[] | Prisma.ParadaTransporteUncheckedCreateWithoutTransporteInput[];
    connectOrCreate?: Prisma.ParadaTransporteCreateOrConnectWithoutTransporteInput | Prisma.ParadaTransporteCreateOrConnectWithoutTransporteInput[];
    upsert?: Prisma.ParadaTransporteUpsertWithWhereUniqueWithoutTransporteInput | Prisma.ParadaTransporteUpsertWithWhereUniqueWithoutTransporteInput[];
    createMany?: Prisma.ParadaTransporteCreateManyTransporteInputEnvelope;
    set?: Prisma.ParadaTransporteWhereUniqueInput | Prisma.ParadaTransporteWhereUniqueInput[];
    disconnect?: Prisma.ParadaTransporteWhereUniqueInput | Prisma.ParadaTransporteWhereUniqueInput[];
    delete?: Prisma.ParadaTransporteWhereUniqueInput | Prisma.ParadaTransporteWhereUniqueInput[];
    connect?: Prisma.ParadaTransporteWhereUniqueInput | Prisma.ParadaTransporteWhereUniqueInput[];
    update?: Prisma.ParadaTransporteUpdateWithWhereUniqueWithoutTransporteInput | Prisma.ParadaTransporteUpdateWithWhereUniqueWithoutTransporteInput[];
    updateMany?: Prisma.ParadaTransporteUpdateManyWithWhereWithoutTransporteInput | Prisma.ParadaTransporteUpdateManyWithWhereWithoutTransporteInput[];
    deleteMany?: Prisma.ParadaTransporteScalarWhereInput | Prisma.ParadaTransporteScalarWhereInput[];
};
export type ParadaTransporteUncheckedUpdateManyWithoutTransporteNestedInput = {
    create?: Prisma.XOR<Prisma.ParadaTransporteCreateWithoutTransporteInput, Prisma.ParadaTransporteUncheckedCreateWithoutTransporteInput> | Prisma.ParadaTransporteCreateWithoutTransporteInput[] | Prisma.ParadaTransporteUncheckedCreateWithoutTransporteInput[];
    connectOrCreate?: Prisma.ParadaTransporteCreateOrConnectWithoutTransporteInput | Prisma.ParadaTransporteCreateOrConnectWithoutTransporteInput[];
    upsert?: Prisma.ParadaTransporteUpsertWithWhereUniqueWithoutTransporteInput | Prisma.ParadaTransporteUpsertWithWhereUniqueWithoutTransporteInput[];
    createMany?: Prisma.ParadaTransporteCreateManyTransporteInputEnvelope;
    set?: Prisma.ParadaTransporteWhereUniqueInput | Prisma.ParadaTransporteWhereUniqueInput[];
    disconnect?: Prisma.ParadaTransporteWhereUniqueInput | Prisma.ParadaTransporteWhereUniqueInput[];
    delete?: Prisma.ParadaTransporteWhereUniqueInput | Prisma.ParadaTransporteWhereUniqueInput[];
    connect?: Prisma.ParadaTransporteWhereUniqueInput | Prisma.ParadaTransporteWhereUniqueInput[];
    update?: Prisma.ParadaTransporteUpdateWithWhereUniqueWithoutTransporteInput | Prisma.ParadaTransporteUpdateWithWhereUniqueWithoutTransporteInput[];
    updateMany?: Prisma.ParadaTransporteUpdateManyWithWhereWithoutTransporteInput | Prisma.ParadaTransporteUpdateManyWithWhereWithoutTransporteInput[];
    deleteMany?: Prisma.ParadaTransporteScalarWhereInput | Prisma.ParadaTransporteScalarWhereInput[];
};
export type ParadaTransporteCreateWithoutTransporteInput = {
    id?: string;
    orden: number;
    nombre: string;
    latitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minutos: number;
};
export type ParadaTransporteUncheckedCreateWithoutTransporteInput = {
    id?: string;
    orden: number;
    nombre: string;
    latitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minutos: number;
};
export type ParadaTransporteCreateOrConnectWithoutTransporteInput = {
    where: Prisma.ParadaTransporteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParadaTransporteCreateWithoutTransporteInput, Prisma.ParadaTransporteUncheckedCreateWithoutTransporteInput>;
};
export type ParadaTransporteCreateManyTransporteInputEnvelope = {
    data: Prisma.ParadaTransporteCreateManyTransporteInput | Prisma.ParadaTransporteCreateManyTransporteInput[];
    skipDuplicates?: boolean;
};
export type ParadaTransporteUpsertWithWhereUniqueWithoutTransporteInput = {
    where: Prisma.ParadaTransporteWhereUniqueInput;
    update: Prisma.XOR<Prisma.ParadaTransporteUpdateWithoutTransporteInput, Prisma.ParadaTransporteUncheckedUpdateWithoutTransporteInput>;
    create: Prisma.XOR<Prisma.ParadaTransporteCreateWithoutTransporteInput, Prisma.ParadaTransporteUncheckedCreateWithoutTransporteInput>;
};
export type ParadaTransporteUpdateWithWhereUniqueWithoutTransporteInput = {
    where: Prisma.ParadaTransporteWhereUniqueInput;
    data: Prisma.XOR<Prisma.ParadaTransporteUpdateWithoutTransporteInput, Prisma.ParadaTransporteUncheckedUpdateWithoutTransporteInput>;
};
export type ParadaTransporteUpdateManyWithWhereWithoutTransporteInput = {
    where: Prisma.ParadaTransporteScalarWhereInput;
    data: Prisma.XOR<Prisma.ParadaTransporteUpdateManyMutationInput, Prisma.ParadaTransporteUncheckedUpdateManyWithoutTransporteInput>;
};
export type ParadaTransporteScalarWhereInput = {
    AND?: Prisma.ParadaTransporteScalarWhereInput | Prisma.ParadaTransporteScalarWhereInput[];
    OR?: Prisma.ParadaTransporteScalarWhereInput[];
    NOT?: Prisma.ParadaTransporteScalarWhereInput | Prisma.ParadaTransporteScalarWhereInput[];
    id?: Prisma.UuidFilter<"ParadaTransporte"> | string;
    transporteId?: Prisma.UuidFilter<"ParadaTransporte"> | string;
    orden?: Prisma.IntFilter<"ParadaTransporte"> | number;
    nombre?: Prisma.StringFilter<"ParadaTransporte"> | string;
    latitud?: Prisma.DecimalFilter<"ParadaTransporte"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud?: Prisma.DecimalFilter<"ParadaTransporte"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minutos?: Prisma.IntFilter<"ParadaTransporte"> | number;
};
export type ParadaTransporteCreateManyTransporteInput = {
    id?: string;
    orden: number;
    nombre: string;
    latitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minutos: number;
};
export type ParadaTransporteUpdateWithoutTransporteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orden?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    latitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minutos?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ParadaTransporteUncheckedUpdateWithoutTransporteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orden?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    latitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minutos?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ParadaTransporteUncheckedUpdateManyWithoutTransporteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orden?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    latitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minutos?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ParadaTransporteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    transporteId?: boolean;
    orden?: boolean;
    nombre?: boolean;
    latitud?: boolean;
    longitud?: boolean;
    minutos?: boolean;
    transporte?: boolean | Prisma.TransporteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paradaTransporte"]>;
export type ParadaTransporteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    transporteId?: boolean;
    orden?: boolean;
    nombre?: boolean;
    latitud?: boolean;
    longitud?: boolean;
    minutos?: boolean;
    transporte?: boolean | Prisma.TransporteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paradaTransporte"]>;
export type ParadaTransporteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    transporteId?: boolean;
    orden?: boolean;
    nombre?: boolean;
    latitud?: boolean;
    longitud?: boolean;
    minutos?: boolean;
    transporte?: boolean | Prisma.TransporteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paradaTransporte"]>;
export type ParadaTransporteSelectScalar = {
    id?: boolean;
    transporteId?: boolean;
    orden?: boolean;
    nombre?: boolean;
    latitud?: boolean;
    longitud?: boolean;
    minutos?: boolean;
};
export type ParadaTransporteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "transporteId" | "orden" | "nombre" | "latitud" | "longitud" | "minutos", ExtArgs["result"]["paradaTransporte"]>;
export type ParadaTransporteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transporte?: boolean | Prisma.TransporteDefaultArgs<ExtArgs>;
};
export type ParadaTransporteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transporte?: boolean | Prisma.TransporteDefaultArgs<ExtArgs>;
};
export type ParadaTransporteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transporte?: boolean | Prisma.TransporteDefaultArgs<ExtArgs>;
};
export type $ParadaTransportePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ParadaTransporte";
    objects: {
        transporte: Prisma.$TransportePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        transporteId: string;
        orden: number;
        nombre: string;
        latitud: runtime.Decimal;
        longitud: runtime.Decimal;
        minutos: number;
    }, ExtArgs["result"]["paradaTransporte"]>;
    composites: {};
};
export type ParadaTransporteGetPayload<S extends boolean | null | undefined | ParadaTransporteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ParadaTransportePayload, S>;
export type ParadaTransporteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ParadaTransporteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ParadaTransporteCountAggregateInputType | true;
};
export interface ParadaTransporteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ParadaTransporte'];
        meta: {
            name: 'ParadaTransporte';
        };
    };
    findUnique<T extends ParadaTransporteFindUniqueArgs>(args: Prisma.SelectSubset<T, ParadaTransporteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ParadaTransporteClient<runtime.Types.Result.GetResult<Prisma.$ParadaTransportePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ParadaTransporteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ParadaTransporteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParadaTransporteClient<runtime.Types.Result.GetResult<Prisma.$ParadaTransportePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ParadaTransporteFindFirstArgs>(args?: Prisma.SelectSubset<T, ParadaTransporteFindFirstArgs<ExtArgs>>): Prisma.Prisma__ParadaTransporteClient<runtime.Types.Result.GetResult<Prisma.$ParadaTransportePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ParadaTransporteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ParadaTransporteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParadaTransporteClient<runtime.Types.Result.GetResult<Prisma.$ParadaTransportePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ParadaTransporteFindManyArgs>(args?: Prisma.SelectSubset<T, ParadaTransporteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParadaTransportePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ParadaTransporteCreateArgs>(args: Prisma.SelectSubset<T, ParadaTransporteCreateArgs<ExtArgs>>): Prisma.Prisma__ParadaTransporteClient<runtime.Types.Result.GetResult<Prisma.$ParadaTransportePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ParadaTransporteCreateManyArgs>(args?: Prisma.SelectSubset<T, ParadaTransporteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ParadaTransporteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ParadaTransporteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParadaTransportePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ParadaTransporteDeleteArgs>(args: Prisma.SelectSubset<T, ParadaTransporteDeleteArgs<ExtArgs>>): Prisma.Prisma__ParadaTransporteClient<runtime.Types.Result.GetResult<Prisma.$ParadaTransportePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ParadaTransporteUpdateArgs>(args: Prisma.SelectSubset<T, ParadaTransporteUpdateArgs<ExtArgs>>): Prisma.Prisma__ParadaTransporteClient<runtime.Types.Result.GetResult<Prisma.$ParadaTransportePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ParadaTransporteDeleteManyArgs>(args?: Prisma.SelectSubset<T, ParadaTransporteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ParadaTransporteUpdateManyArgs>(args: Prisma.SelectSubset<T, ParadaTransporteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ParadaTransporteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ParadaTransporteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParadaTransportePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ParadaTransporteUpsertArgs>(args: Prisma.SelectSubset<T, ParadaTransporteUpsertArgs<ExtArgs>>): Prisma.Prisma__ParadaTransporteClient<runtime.Types.Result.GetResult<Prisma.$ParadaTransportePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ParadaTransporteCountArgs>(args?: Prisma.Subset<T, ParadaTransporteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ParadaTransporteCountAggregateOutputType> : number>;
    aggregate<T extends ParadaTransporteAggregateArgs>(args: Prisma.Subset<T, ParadaTransporteAggregateArgs>): Prisma.PrismaPromise<GetParadaTransporteAggregateType<T>>;
    groupBy<T extends ParadaTransporteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ParadaTransporteGroupByArgs['orderBy'];
    } : {
        orderBy?: ParadaTransporteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ParadaTransporteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParadaTransporteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ParadaTransporteFieldRefs;
}
export interface Prisma__ParadaTransporteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    transporte<T extends Prisma.TransporteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TransporteDefaultArgs<ExtArgs>>): Prisma.Prisma__TransporteClient<runtime.Types.Result.GetResult<Prisma.$TransportePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ParadaTransporteFieldRefs {
    readonly id: Prisma.FieldRef<"ParadaTransporte", 'String'>;
    readonly transporteId: Prisma.FieldRef<"ParadaTransporte", 'String'>;
    readonly orden: Prisma.FieldRef<"ParadaTransporte", 'Int'>;
    readonly nombre: Prisma.FieldRef<"ParadaTransporte", 'String'>;
    readonly latitud: Prisma.FieldRef<"ParadaTransporte", 'Decimal'>;
    readonly longitud: Prisma.FieldRef<"ParadaTransporte", 'Decimal'>;
    readonly minutos: Prisma.FieldRef<"ParadaTransporte", 'Int'>;
}
export type ParadaTransporteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParadaTransporteSelect<ExtArgs> | null;
    omit?: Prisma.ParadaTransporteOmit<ExtArgs> | null;
    include?: Prisma.ParadaTransporteInclude<ExtArgs> | null;
    where: Prisma.ParadaTransporteWhereUniqueInput;
};
export type ParadaTransporteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParadaTransporteSelect<ExtArgs> | null;
    omit?: Prisma.ParadaTransporteOmit<ExtArgs> | null;
    include?: Prisma.ParadaTransporteInclude<ExtArgs> | null;
    where: Prisma.ParadaTransporteWhereUniqueInput;
};
export type ParadaTransporteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParadaTransporteSelect<ExtArgs> | null;
    omit?: Prisma.ParadaTransporteOmit<ExtArgs> | null;
    include?: Prisma.ParadaTransporteInclude<ExtArgs> | null;
    where?: Prisma.ParadaTransporteWhereInput;
    orderBy?: Prisma.ParadaTransporteOrderByWithRelationInput | Prisma.ParadaTransporteOrderByWithRelationInput[];
    cursor?: Prisma.ParadaTransporteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParadaTransporteScalarFieldEnum | Prisma.ParadaTransporteScalarFieldEnum[];
};
export type ParadaTransporteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParadaTransporteSelect<ExtArgs> | null;
    omit?: Prisma.ParadaTransporteOmit<ExtArgs> | null;
    include?: Prisma.ParadaTransporteInclude<ExtArgs> | null;
    where?: Prisma.ParadaTransporteWhereInput;
    orderBy?: Prisma.ParadaTransporteOrderByWithRelationInput | Prisma.ParadaTransporteOrderByWithRelationInput[];
    cursor?: Prisma.ParadaTransporteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParadaTransporteScalarFieldEnum | Prisma.ParadaTransporteScalarFieldEnum[];
};
export type ParadaTransporteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParadaTransporteSelect<ExtArgs> | null;
    omit?: Prisma.ParadaTransporteOmit<ExtArgs> | null;
    include?: Prisma.ParadaTransporteInclude<ExtArgs> | null;
    where?: Prisma.ParadaTransporteWhereInput;
    orderBy?: Prisma.ParadaTransporteOrderByWithRelationInput | Prisma.ParadaTransporteOrderByWithRelationInput[];
    cursor?: Prisma.ParadaTransporteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParadaTransporteScalarFieldEnum | Prisma.ParadaTransporteScalarFieldEnum[];
};
export type ParadaTransporteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParadaTransporteSelect<ExtArgs> | null;
    omit?: Prisma.ParadaTransporteOmit<ExtArgs> | null;
    include?: Prisma.ParadaTransporteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParadaTransporteCreateInput, Prisma.ParadaTransporteUncheckedCreateInput>;
};
export type ParadaTransporteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ParadaTransporteCreateManyInput | Prisma.ParadaTransporteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ParadaTransporteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParadaTransporteSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ParadaTransporteOmit<ExtArgs> | null;
    data: Prisma.ParadaTransporteCreateManyInput | Prisma.ParadaTransporteCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ParadaTransporteIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ParadaTransporteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParadaTransporteSelect<ExtArgs> | null;
    omit?: Prisma.ParadaTransporteOmit<ExtArgs> | null;
    include?: Prisma.ParadaTransporteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParadaTransporteUpdateInput, Prisma.ParadaTransporteUncheckedUpdateInput>;
    where: Prisma.ParadaTransporteWhereUniqueInput;
};
export type ParadaTransporteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ParadaTransporteUpdateManyMutationInput, Prisma.ParadaTransporteUncheckedUpdateManyInput>;
    where?: Prisma.ParadaTransporteWhereInput;
    limit?: number;
};
export type ParadaTransporteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParadaTransporteSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ParadaTransporteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParadaTransporteUpdateManyMutationInput, Prisma.ParadaTransporteUncheckedUpdateManyInput>;
    where?: Prisma.ParadaTransporteWhereInput;
    limit?: number;
    include?: Prisma.ParadaTransporteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ParadaTransporteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParadaTransporteSelect<ExtArgs> | null;
    omit?: Prisma.ParadaTransporteOmit<ExtArgs> | null;
    include?: Prisma.ParadaTransporteInclude<ExtArgs> | null;
    where: Prisma.ParadaTransporteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParadaTransporteCreateInput, Prisma.ParadaTransporteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ParadaTransporteUpdateInput, Prisma.ParadaTransporteUncheckedUpdateInput>;
};
export type ParadaTransporteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParadaTransporteSelect<ExtArgs> | null;
    omit?: Prisma.ParadaTransporteOmit<ExtArgs> | null;
    include?: Prisma.ParadaTransporteInclude<ExtArgs> | null;
    where: Prisma.ParadaTransporteWhereUniqueInput;
};
export type ParadaTransporteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParadaTransporteWhereInput;
    limit?: number;
};
export type ParadaTransporteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParadaTransporteSelect<ExtArgs> | null;
    omit?: Prisma.ParadaTransporteOmit<ExtArgs> | null;
    include?: Prisma.ParadaTransporteInclude<ExtArgs> | null;
};
