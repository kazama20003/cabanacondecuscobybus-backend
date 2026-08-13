-- AlterTable
ALTER TABLE "usuarios" ADD COLUMN     "google_id" TEXT,
ALTER COLUMN "contrasena_hash" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_google_id_key" ON "usuarios"("google_id");
