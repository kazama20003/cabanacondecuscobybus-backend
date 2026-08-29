-- Eventos estacionales reutilizando el modelo Tour.
ALTER TABLE "tours" ADD COLUMN "es_evento" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "tours" ADD COLUMN "temporada_inicio" DATE;
ALTER TABLE "tours" ADD COLUMN "temporada_fin" DATE;

-- Acelera el filtrado del listado por tipo (tour vs. evento).
CREATE INDEX "tours_es_evento_idx" ON "tours" ("es_evento");
