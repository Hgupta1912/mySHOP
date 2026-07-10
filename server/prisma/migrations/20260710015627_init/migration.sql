-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "pathName" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
