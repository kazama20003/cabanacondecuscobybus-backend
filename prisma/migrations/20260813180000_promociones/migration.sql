-- CreateEnum
CREATE TYPE "TipoPromocion" AS ENUM ('OFERTA', 'DESCUENTO', 'EVENTO_ESPECIAL', 'ANIVERSARIO');

-- CreateEnum
CREATE TYPE "ObjetivoPromocion" AS ENUM ('TODOS', 'TRANSPORTES', 'TOURS');

-- AlterTable
ALTER TABLE "reservas" ADD COLUMN     "monto_descuento" DECIMAL(10,2) NOT NULL DEFAULT 0,
ADD COLUMN     "promocion_id" UUID;

-- CreateTable
CREATE TABLE "promociones" (
    "id" UUID NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT,
    "tipo" "TipoPromocion" NOT NULL,
    "objetivo" "ObjetivoPromocion" NOT NULL DEFAULT 'TODOS',
    "codigo" TEXT,
    "porcentaje_descuento" INTEGER,
    "monto_descuento" DECIMAL(10,2),
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_fin" TIMESTAMP(3) NOT NULL,
    "limite_usos" INTEGER,
    "usos" INTEGER NOT NULL DEFAULT 0,
    "imagen_url" TEXT,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizado_en" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "promociones_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "promociones_codigo_key" ON "promociones"("codigo");

-- CreateIndex
CREATE INDEX "promociones_activo_fecha_inicio_fecha_fin_idx" ON "promociones"("activo", "fecha_inicio", "fecha_fin");

-- AddForeignKey
ALTER TABLE "reservas" ADD CONSTRAINT "reservas_promocion_id_fkey" FOREIGN KEY ("promocion_id") REFERENCES "promociones"("id") ON DELETE SET NULL ON UPDATE CASCADE;
