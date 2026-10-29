ALTER TABLE "salidas_transporte" ALTER COLUMN "capacidad" DROP NOT NULL;
ALTER TABLE "salidas_tour" ALTER COLUMN "capacidad" DROP NOT NULL;
ALTER TABLE "plantillas_salida" ALTER COLUMN "capacidad" DROP NOT NULL;
ALTER TABLE "paradas_transporte" ALTER COLUMN "minutos" DROP NOT NULL;
