ALTER TABLE "transportes"
ADD COLUMN "orden_catalogo" INTEGER NOT NULL DEFAULT 0;

ALTER TABLE "tours"
ADD COLUMN "orden_catalogo" INTEGER NOT NULL DEFAULT 0;

WITH posiciones AS (
  SELECT "id", ROW_NUMBER() OVER (ORDER BY "creado_en" DESC, "id") - 1 AS posicion
  FROM "transportes"
)
UPDATE "transportes" AS servicio
SET "orden_catalogo" = posiciones.posicion
FROM posiciones
WHERE servicio."id" = posiciones."id";

WITH posiciones AS (
  SELECT "id", ROW_NUMBER() OVER (PARTITION BY "es_evento" ORDER BY "creado_en" DESC, "id") - 1 AS posicion
  FROM "tours"
)
UPDATE "tours" AS servicio
SET "orden_catalogo" = posiciones.posicion
FROM posiciones
WHERE servicio."id" = posiciones."id";
