-- Segmentación específica de promociones: un transporte o un tour concreto
-- (null = toda la categoría según "objetivo").
ALTER TABLE "promociones"
  ADD COLUMN "transporte_id" UUID,
  ADD COLUMN "tour_id" UUID;

ALTER TABLE "promociones"
  ADD CONSTRAINT "promociones_transporte_id_fkey"
  FOREIGN KEY ("transporte_id") REFERENCES "transportes"("id")
  ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "promociones"
  ADD CONSTRAINT "promociones_tour_id_fkey"
  FOREIGN KEY ("tour_id") REFERENCES "tours"("id")
  ON DELETE SET NULL ON UPDATE CASCADE;

CREATE INDEX "promociones_transporte_id_idx" ON "promociones"("transporte_id");
CREATE INDEX "promociones_tour_id_idx" ON "promociones"("tour_id");
