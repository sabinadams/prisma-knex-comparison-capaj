-- CreateTable
CREATE TABLE "favorites" (
    "id" SERIAL NOT NULL,
    "aws_user_id" TEXT NOT NULL,
    "post_id" INTEGER NOT NULL,

    CONSTRAINT "favorites_pkey" PRIMARY KEY ("id")
);
