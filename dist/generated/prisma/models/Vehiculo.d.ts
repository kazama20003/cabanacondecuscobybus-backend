import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type VehiculoModel = runtime.Types.Result.DefaultSelection<Prisma.$VehiculoPayload>;
export type AggregateVehiculo = {
    _count: VehiculoCountAggregateOutputType | null;
    _avg: VehiculoAvgAggregateOutputType | null;
    _sum: VehiculoSumAggregateOutputType | null;
    _min: VehiculoMinAggregateOutputType | null;
    _max: VehiculoMaxAggregateOutputType | null;
};
export type VehiculoAvgAggregateOutputType = {
    capacidad: number | null;
};
export type VehiculoSumAggregateOutputType = {
    capacidad: number | null;
};
export type VehiculoMinAggregateOutputType = {
    id: string | null;
    placa: string | null;
    tipoPropiedad: $Enums.TipoVehiculo | null;
    proveedor: string | null;
    capacidad: number | null;
    activo: boolean | null;
    creadoEn: Date | null;
};
export type VehiculoMaxAggregateOutputType = {
    id: string | null;
    placa: string | null;
    tipoPropiedad: $Enums.TipoVehiculo | null;
    proveedor: string | null;
    capacidad: number | null;
    activo: boolean | null;
    creadoEn: Date | null;
};
export type VehiculoCountAggregateOutputType = {
    id: number;
    placa: number;
    tipoPropiedad: number;
    proveedor: number;
    capacidad: number;
    activo: number;
    creadoEn: number;
    _all: number;
};
export type VehiculoAvgAggregateInputType = {
    capacidad?: true;
};
export type VehiculoSumAggregateInputType = {
    capacidad?: true;
};
export type VehiculoMinAggregateInputType = {
    id?: true;
    placa?: true;
    tipoPropiedad?: true;
    proveedor?: true;
    capacidad?: true;
    activo?: true;
    creadoEn?: true;
};
export type VehiculoMaxAggregateInputType = {
    id?: true;
    placa?: true;
    tipoPropiedad?: true;
    proveedor?: true;
    capacidad?: true;
    activo?: true;
    creadoEn?: true;
};
export type VehiculoCountAggregateInputType = {
    id?: true;
    placa?: true;
    tipoPropiedad?: true;
    proveedor?: true;
    capacidad?: true;
    activo?: true;
    creadoEn?: true;
    _all?: true;
};
export type VehiculoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VehiculoWhereInput;
    orderBy?: Prisma.VehiculoOrderByWithRelationInput | Prisma.VehiculoOrderByWithRelationInput[];
    cursor?: Prisma.VehiculoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VehiculoCountAggregateInputType;
    _avg?: VehiculoAvgAggregateInputType;
    _sum?: VehiculoSumAggregateInputType;
    _min?: VehiculoMinAggregateInputType;
    _max?: VehiculoMaxAggregateInputType;
};
export type GetVehiculoAggregateType<T extends VehiculoAggregateArgs> = {
    [P in keyof T & keyof AggregateVehiculo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVehiculo[P]> : Prisma.GetScalarType<T[P], AggregateVehiculo[P]>;
};
export type VehiculoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VehiculoWhereInput;
    orderBy?: Prisma.VehiculoOrderByWithAggregationInput | Prisma.VehiculoOrderByWithAggregationInput[];
    by: Prisma.VehiculoScalarFieldEnum[] | Prisma.VehiculoScalarFieldEnum;
    having?: Prisma.VehiculoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VehiculoCountAggregateInputType | true;
    _avg?: VehiculoAvgAggregateInputType;
    _sum?: VehiculoSumAggregateInputType;
    _min?: VehiculoMinAggregateInputType;
    _max?: VehiculoMaxAggregateInputType;
};
export type VehiculoGroupByOutputType = {
    id: string;
    placa: string;
    tipoPropiedad: $Enums.TipoVehiculo;
    proveedor: string | null;
    capacidad: number;
    activo: boolean;
    creadoEn: Date;
    _count: VehiculoCountAggregateOutputType | null;
    _avg: VehiculoAvgAggregateOutputType | null;
    _sum: VehiculoSumAggregateOutputType | null;
    _min: VehiculoMinAggregateOutputType | null;
    _max: VehiculoMaxAggregateOutputType | null;
};
export type GetVehiculoGroupByPayload<T extends VehiculoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VehiculoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VehiculoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VehiculoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VehiculoGroupByOutputType[P]>;
}>>;
export type VehiculoWhereInput = {
    AND?: Prisma.VehiculoWhereInput | Prisma.VehiculoWhereInput[];
    OR?: Prisma.VehiculoWhereInput[];
    NOT?: Prisma.VehiculoWhereInput | Prisma.VehiculoWhereInput[];
    id?: Prisma.UuidFilter<"Vehiculo"> | string;
    placa?: Prisma.StringFilter<"Vehiculo"> | string;
    tipoPropiedad?: Prisma.EnumTipoVehiculoFilter<"Vehiculo"> | $Enums.TipoVehiculo;
    proveedor?: Prisma.StringNullableFilter<"Vehiculo"> | string | null;
    capacidad?: Prisma.IntFilter<"Vehiculo"> | number;
    activo?: Prisma.BoolFilter<"Vehiculo"> | boolean;
    creadoEn?: Prisma.DateTimeFilter<"Vehiculo"> | Date | string;
    salidas?: Prisma.SalidaTransporteListRelationFilter;
};
export type VehiculoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    placa?: Prisma.SortOrder;
    tipoPropiedad?: Prisma.SortOrder;
    proveedor?: Prisma.SortOrderInput | Prisma.SortOrder;
    capacidad?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    salidas?: Prisma.SalidaTransporteOrderByRelationAggregateInput;
};
export type VehiculoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    placa?: string;
    AND?: Prisma.VehiculoWhereInput | Prisma.VehiculoWhereInput[];
    OR?: Prisma.VehiculoWhereInput[];
    NOT?: Prisma.VehiculoWhereInput | Prisma.VehiculoWhereInput[];
    tipoPropiedad?: Prisma.EnumTipoVehiculoFilter<"Vehiculo"> | $Enums.TipoVehiculo;
    proveedor?: Prisma.StringNullableFilter<"Vehiculo"> | string | null;
    capacidad?: Prisma.IntFilter<"Vehiculo"> | number;
    activo?: Prisma.BoolFilter<"Vehiculo"> | boolean;
    creadoEn?: Prisma.DateTimeFilter<"Vehiculo"> | Date | string;
    salidas?: Prisma.SalidaTransporteListRelationFilter;
}, "id" | "placa">;
export type VehiculoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    placa?: Prisma.SortOrder;
    tipoPropiedad?: Prisma.SortOrder;
    proveedor?: Prisma.SortOrderInput | Prisma.SortOrder;
    capacidad?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
    _count?: Prisma.VehiculoCountOrderByAggregateInput;
    _avg?: Prisma.VehiculoAvgOrderByAggregateInput;
    _max?: Prisma.VehiculoMaxOrderByAggregateInput;
    _min?: Prisma.VehiculoMinOrderByAggregateInput;
    _sum?: Prisma.VehiculoSumOrderByAggregateInput;
};
export type VehiculoScalarWhereWithAggregatesInput = {
    AND?: Prisma.VehiculoScalarWhereWithAggregatesInput | Prisma.VehiculoScalarWhereWithAggregatesInput[];
    OR?: Prisma.VehiculoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VehiculoScalarWhereWithAggregatesInput | Prisma.VehiculoScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Vehiculo"> | string;
    placa?: Prisma.StringWithAggregatesFilter<"Vehiculo"> | string;
    tipoPropiedad?: Prisma.EnumTipoVehiculoWithAggregatesFilter<"Vehiculo"> | $Enums.TipoVehiculo;
    proveedor?: Prisma.StringNullableWithAggregatesFilter<"Vehiculo"> | string | null;
    capacidad?: Prisma.IntWithAggregatesFilter<"Vehiculo"> | number;
    activo?: Prisma.BoolWithAggregatesFilter<"Vehiculo"> | boolean;
    creadoEn?: Prisma.DateTimeWithAggregatesFilter<"Vehiculo"> | Date | string;
};
export type VehiculoCreateInput = {
    id?: string;
    placa: string;
    tipoPropiedad: $Enums.TipoVehiculo;
    proveedor?: string | null;
    capacidad: number;
    activo?: boolean;
    creadoEn?: Date | string;
    salidas?: Prisma.SalidaTransporteCreateNestedManyWithoutVehiculoInput;
};
export type VehiculoUncheckedCreateInput = {
    id?: string;
    placa: string;
    tipoPropiedad: $Enums.TipoVehiculo;
    proveedor?: string | null;
    capacidad: number;
    activo?: boolean;
    creadoEn?: Date | string;
    salidas?: Prisma.SalidaTransporteUncheckedCreateNestedManyWithoutVehiculoInput;
};
export type VehiculoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    placa?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoPropiedad?: Prisma.EnumTipoVehiculoFieldUpdateOperationsInput | $Enums.TipoVehiculo;
    proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidad?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    salidas?: Prisma.SalidaTransporteUpdateManyWithoutVehiculoNestedInput;
};
export type VehiculoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    placa?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoPropiedad?: Prisma.EnumTipoVehiculoFieldUpdateOperationsInput | $Enums.TipoVehiculo;
    proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidad?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    salidas?: Prisma.SalidaTransporteUncheckedUpdateManyWithoutVehiculoNestedInput;
};
export type VehiculoCreateManyInput = {
    id?: string;
    placa: string;
    tipoPropiedad: $Enums.TipoVehiculo;
    proveedor?: string | null;
    capacidad: number;
    activo?: boolean;
    creadoEn?: Date | string;
};
export type VehiculoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    placa?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoPropiedad?: Prisma.EnumTipoVehiculoFieldUpdateOperationsInput | $Enums.TipoVehiculo;
    proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidad?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VehiculoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    placa?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoPropiedad?: Prisma.EnumTipoVehiculoFieldUpdateOperationsInput | $Enums.TipoVehiculo;
    proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidad?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VehiculoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    placa?: Prisma.SortOrder;
    tipoPropiedad?: Prisma.SortOrder;
    proveedor?: Prisma.SortOrder;
    capacidad?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
};
export type VehiculoAvgOrderByAggregateInput = {
    capacidad?: Prisma.SortOrder;
};
export type VehiculoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    placa?: Prisma.SortOrder;
    tipoPropiedad?: Prisma.SortOrder;
    proveedor?: Prisma.SortOrder;
    capacidad?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
};
export type VehiculoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    placa?: Prisma.SortOrder;
    tipoPropiedad?: Prisma.SortOrder;
    proveedor?: Prisma.SortOrder;
    capacidad?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    creadoEn?: Prisma.SortOrder;
};
export type VehiculoSumOrderByAggregateInput = {
    capacidad?: Prisma.SortOrder;
};
export type VehiculoNullableScalarRelationFilter = {
    is?: Prisma.VehiculoWhereInput | null;
    isNot?: Prisma.VehiculoWhereInput | null;
};
export type EnumTipoVehiculoFieldUpdateOperationsInput = {
    set?: $Enums.TipoVehiculo;
};
export type VehiculoCreateNestedOneWithoutSalidasInput = {
    create?: Prisma.XOR<Prisma.VehiculoCreateWithoutSalidasInput, Prisma.VehiculoUncheckedCreateWithoutSalidasInput>;
    connectOrCreate?: Prisma.VehiculoCreateOrConnectWithoutSalidasInput;
    connect?: Prisma.VehiculoWhereUniqueInput;
};
export type VehiculoUpdateOneWithoutSalidasNestedInput = {
    create?: Prisma.XOR<Prisma.VehiculoCreateWithoutSalidasInput, Prisma.VehiculoUncheckedCreateWithoutSalidasInput>;
    connectOrCreate?: Prisma.VehiculoCreateOrConnectWithoutSalidasInput;
    upsert?: Prisma.VehiculoUpsertWithoutSalidasInput;
    disconnect?: Prisma.VehiculoWhereInput | boolean;
    delete?: Prisma.VehiculoWhereInput | boolean;
    connect?: Prisma.VehiculoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VehiculoUpdateToOneWithWhereWithoutSalidasInput, Prisma.VehiculoUpdateWithoutSalidasInput>, Prisma.VehiculoUncheckedUpdateWithoutSalidasInput>;
};
export type VehiculoCreateWithoutSalidasInput = {
    id?: string;
    placa: string;
    tipoPropiedad: $Enums.TipoVehiculo;
    proveedor?: string | null;
    capacidad: number;
    activo?: boolean;
    creadoEn?: Date | string;
};
export type VehiculoUncheckedCreateWithoutSalidasInput = {
    id?: string;
    placa: string;
    tipoPropiedad: $Enums.TipoVehiculo;
    proveedor?: string | null;
    capacidad: number;
    activo?: boolean;
    creadoEn?: Date | string;
};
export type VehiculoCreateOrConnectWithoutSalidasInput = {
    where: Prisma.VehiculoWhereUniqueInput;
    create: Prisma.XOR<Prisma.VehiculoCreateWithoutSalidasInput, Prisma.VehiculoUncheckedCreateWithoutSalidasInput>;
};
export type VehiculoUpsertWithoutSalidasInput = {
    update: Prisma.XOR<Prisma.VehiculoUpdateWithoutSalidasInput, Prisma.VehiculoUncheckedUpdateWithoutSalidasInput>;
    create: Prisma.XOR<Prisma.VehiculoCreateWithoutSalidasInput, Prisma.VehiculoUncheckedCreateWithoutSalidasInput>;
    where?: Prisma.VehiculoWhereInput;
};
export type VehiculoUpdateToOneWithWhereWithoutSalidasInput = {
    where?: Prisma.VehiculoWhereInput;
    data: Prisma.XOR<Prisma.VehiculoUpdateWithoutSalidasInput, Prisma.VehiculoUncheckedUpdateWithoutSalidasInput>;
};
export type VehiculoUpdateWithoutSalidasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    placa?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoPropiedad?: Prisma.EnumTipoVehiculoFieldUpdateOperationsInput | $Enums.TipoVehiculo;
    proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidad?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VehiculoUncheckedUpdateWithoutSalidasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    placa?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoPropiedad?: Prisma.EnumTipoVehiculoFieldUpdateOperationsInput | $Enums.TipoVehiculo;
    proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidad?: Prisma.IntFieldUpdateOperationsInput | number;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creadoEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VehiculoCountOutputType = {
    salidas: number;
};
export type VehiculoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    salidas?: boolean | VehiculoCountOutputTypeCountSalidasArgs;
};
export type VehiculoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculoCountOutputTypeSelect<ExtArgs> | null;
};
export type VehiculoCountOutputTypeCountSalidasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalidaTransporteWhereInput;
};
export type VehiculoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    placa?: boolean;
    tipoPropiedad?: boolean;
    proveedor?: boolean;
    capacidad?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
    salidas?: boolean | Prisma.Vehiculo$salidasArgs<ExtArgs>;
    _count?: boolean | Prisma.VehiculoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vehiculo"]>;
export type VehiculoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    placa?: boolean;
    tipoPropiedad?: boolean;
    proveedor?: boolean;
    capacidad?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
}, ExtArgs["result"]["vehiculo"]>;
export type VehiculoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    placa?: boolean;
    tipoPropiedad?: boolean;
    proveedor?: boolean;
    capacidad?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
}, ExtArgs["result"]["vehiculo"]>;
export type VehiculoSelectScalar = {
    id?: boolean;
    placa?: boolean;
    tipoPropiedad?: boolean;
    proveedor?: boolean;
    capacidad?: boolean;
    activo?: boolean;
    creadoEn?: boolean;
};
export type VehiculoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "placa" | "tipoPropiedad" | "proveedor" | "capacidad" | "activo" | "creadoEn", ExtArgs["result"]["vehiculo"]>;
export type VehiculoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    salidas?: boolean | Prisma.Vehiculo$salidasArgs<ExtArgs>;
    _count?: boolean | Prisma.VehiculoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type VehiculoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type VehiculoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $VehiculoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Vehiculo";
    objects: {
        salidas: Prisma.$SalidaTransportePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        placa: string;
        tipoPropiedad: $Enums.TipoVehiculo;
        proveedor: string | null;
        capacidad: number;
        activo: boolean;
        creadoEn: Date;
    }, ExtArgs["result"]["vehiculo"]>;
    composites: {};
};
export type VehiculoGetPayload<S extends boolean | null | undefined | VehiculoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VehiculoPayload, S>;
export type VehiculoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VehiculoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VehiculoCountAggregateInputType | true;
};
export interface VehiculoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Vehiculo'];
        meta: {
            name: 'Vehiculo';
        };
    };
    findUnique<T extends VehiculoFindUniqueArgs>(args: Prisma.SelectSubset<T, VehiculoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VehiculoClient<runtime.Types.Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VehiculoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VehiculoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VehiculoClient<runtime.Types.Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VehiculoFindFirstArgs>(args?: Prisma.SelectSubset<T, VehiculoFindFirstArgs<ExtArgs>>): Prisma.Prisma__VehiculoClient<runtime.Types.Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VehiculoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VehiculoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VehiculoClient<runtime.Types.Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VehiculoFindManyArgs>(args?: Prisma.SelectSubset<T, VehiculoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VehiculoCreateArgs>(args: Prisma.SelectSubset<T, VehiculoCreateArgs<ExtArgs>>): Prisma.Prisma__VehiculoClient<runtime.Types.Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VehiculoCreateManyArgs>(args?: Prisma.SelectSubset<T, VehiculoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends VehiculoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VehiculoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends VehiculoDeleteArgs>(args: Prisma.SelectSubset<T, VehiculoDeleteArgs<ExtArgs>>): Prisma.Prisma__VehiculoClient<runtime.Types.Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VehiculoUpdateArgs>(args: Prisma.SelectSubset<T, VehiculoUpdateArgs<ExtArgs>>): Prisma.Prisma__VehiculoClient<runtime.Types.Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VehiculoDeleteManyArgs>(args?: Prisma.SelectSubset<T, VehiculoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VehiculoUpdateManyArgs>(args: Prisma.SelectSubset<T, VehiculoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends VehiculoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VehiculoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends VehiculoUpsertArgs>(args: Prisma.SelectSubset<T, VehiculoUpsertArgs<ExtArgs>>): Prisma.Prisma__VehiculoClient<runtime.Types.Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VehiculoCountArgs>(args?: Prisma.Subset<T, VehiculoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VehiculoCountAggregateOutputType> : number>;
    aggregate<T extends VehiculoAggregateArgs>(args: Prisma.Subset<T, VehiculoAggregateArgs>): Prisma.PrismaPromise<GetVehiculoAggregateType<T>>;
    groupBy<T extends VehiculoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VehiculoGroupByArgs['orderBy'];
    } : {
        orderBy?: VehiculoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VehiculoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehiculoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VehiculoFieldRefs;
}
export interface Prisma__VehiculoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    salidas<T extends Prisma.Vehiculo$salidasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Vehiculo$salidasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalidaTransportePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VehiculoFieldRefs {
    readonly id: Prisma.FieldRef<"Vehiculo", 'String'>;
    readonly placa: Prisma.FieldRef<"Vehiculo", 'String'>;
    readonly tipoPropiedad: Prisma.FieldRef<"Vehiculo", 'TipoVehiculo'>;
    readonly proveedor: Prisma.FieldRef<"Vehiculo", 'String'>;
    readonly capacidad: Prisma.FieldRef<"Vehiculo", 'Int'>;
    readonly activo: Prisma.FieldRef<"Vehiculo", 'Boolean'>;
    readonly creadoEn: Prisma.FieldRef<"Vehiculo", 'DateTime'>;
}
export type VehiculoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculoSelect<ExtArgs> | null;
    omit?: Prisma.VehiculoOmit<ExtArgs> | null;
    include?: Prisma.VehiculoInclude<ExtArgs> | null;
    where: Prisma.VehiculoWhereUniqueInput;
};
export type VehiculoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculoSelect<ExtArgs> | null;
    omit?: Prisma.VehiculoOmit<ExtArgs> | null;
    include?: Prisma.VehiculoInclude<ExtArgs> | null;
    where: Prisma.VehiculoWhereUniqueInput;
};
export type VehiculoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculoSelect<ExtArgs> | null;
    omit?: Prisma.VehiculoOmit<ExtArgs> | null;
    include?: Prisma.VehiculoInclude<ExtArgs> | null;
    where?: Prisma.VehiculoWhereInput;
    orderBy?: Prisma.VehiculoOrderByWithRelationInput | Prisma.VehiculoOrderByWithRelationInput[];
    cursor?: Prisma.VehiculoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VehiculoScalarFieldEnum | Prisma.VehiculoScalarFieldEnum[];
};
export type VehiculoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculoSelect<ExtArgs> | null;
    omit?: Prisma.VehiculoOmit<ExtArgs> | null;
    include?: Prisma.VehiculoInclude<ExtArgs> | null;
    where?: Prisma.VehiculoWhereInput;
    orderBy?: Prisma.VehiculoOrderByWithRelationInput | Prisma.VehiculoOrderByWithRelationInput[];
    cursor?: Prisma.VehiculoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VehiculoScalarFieldEnum | Prisma.VehiculoScalarFieldEnum[];
};
export type VehiculoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculoSelect<ExtArgs> | null;
    omit?: Prisma.VehiculoOmit<ExtArgs> | null;
    include?: Prisma.VehiculoInclude<ExtArgs> | null;
    where?: Prisma.VehiculoWhereInput;
    orderBy?: Prisma.VehiculoOrderByWithRelationInput | Prisma.VehiculoOrderByWithRelationInput[];
    cursor?: Prisma.VehiculoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VehiculoScalarFieldEnum | Prisma.VehiculoScalarFieldEnum[];
};
export type VehiculoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculoSelect<ExtArgs> | null;
    omit?: Prisma.VehiculoOmit<ExtArgs> | null;
    include?: Prisma.VehiculoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VehiculoCreateInput, Prisma.VehiculoUncheckedCreateInput>;
};
export type VehiculoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VehiculoCreateManyInput | Prisma.VehiculoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VehiculoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VehiculoOmit<ExtArgs> | null;
    data: Prisma.VehiculoCreateManyInput | Prisma.VehiculoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VehiculoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculoSelect<ExtArgs> | null;
    omit?: Prisma.VehiculoOmit<ExtArgs> | null;
    include?: Prisma.VehiculoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VehiculoUpdateInput, Prisma.VehiculoUncheckedUpdateInput>;
    where: Prisma.VehiculoWhereUniqueInput;
};
export type VehiculoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VehiculoUpdateManyMutationInput, Prisma.VehiculoUncheckedUpdateManyInput>;
    where?: Prisma.VehiculoWhereInput;
    limit?: number;
};
export type VehiculoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VehiculoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VehiculoUpdateManyMutationInput, Prisma.VehiculoUncheckedUpdateManyInput>;
    where?: Prisma.VehiculoWhereInput;
    limit?: number;
};
export type VehiculoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculoSelect<ExtArgs> | null;
    omit?: Prisma.VehiculoOmit<ExtArgs> | null;
    include?: Prisma.VehiculoInclude<ExtArgs> | null;
    where: Prisma.VehiculoWhereUniqueInput;
    create: Prisma.XOR<Prisma.VehiculoCreateInput, Prisma.VehiculoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VehiculoUpdateInput, Prisma.VehiculoUncheckedUpdateInput>;
};
export type VehiculoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculoSelect<ExtArgs> | null;
    omit?: Prisma.VehiculoOmit<ExtArgs> | null;
    include?: Prisma.VehiculoInclude<ExtArgs> | null;
    where: Prisma.VehiculoWhereUniqueInput;
};
export type VehiculoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VehiculoWhereInput;
    limit?: number;
};
export type Vehiculo$salidasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VehiculoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculoSelect<ExtArgs> | null;
    omit?: Prisma.VehiculoOmit<ExtArgs> | null;
    include?: Prisma.VehiculoInclude<ExtArgs> | null;
};
