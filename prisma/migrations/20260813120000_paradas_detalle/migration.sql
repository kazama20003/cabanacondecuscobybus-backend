-- AlterTable
ALTER TABLE "paradas_transporte" ADD COLUMN     "descripcion" TEXT,
ADD COLUMN     "duracion_parada_minutos" INTEGER NOT NULL DEFAULT 0;
