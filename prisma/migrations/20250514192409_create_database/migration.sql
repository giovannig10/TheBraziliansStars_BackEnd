-- CreateTable
CREATE TABLE "teams" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "fansbackground" TEXT NOT NULL,
    "escudo" TEXT NOT NULL,
    "anoFundacao" INTEGER,
    "camisas" TEXT,
    "estadioImages" TEXT,
    "hino" TEXT,
    "titulos" TEXT,
    "name" TEXT,
    "games" INTEGER,
    "wins" INTEGER,
    "draws" INTEGER,
    "losses" INTEGER,
    "points" INTEGER,
    "goalsFavor" INTEGER,
    "goalsOwn" INTEGER,
    "goalsDifference" INTEGER,

    CONSTRAINT "teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "teamFavoriteId" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
