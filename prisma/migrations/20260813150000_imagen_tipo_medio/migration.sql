-- CreateEnum
CREATE TYPE "TipoMedio" AS ENUM ('IMAGEN', 'VIDEO');

-- AlterTable
ALTER TABLE "imagenes" ADD COLUMN     "tipo" "TipoMedio" NOT NULL DEFAULT 'IMAGEN';
