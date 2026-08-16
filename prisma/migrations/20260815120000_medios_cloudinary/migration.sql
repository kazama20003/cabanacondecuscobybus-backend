-- Store Cloudinary public IDs so remote resources can be removed with their owner.
ALTER TABLE "imagenes" ADD COLUMN "clave" TEXT;
ALTER TABLE "promociones" ADD COLUMN "imagen_clave" TEXT;
