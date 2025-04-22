/*
  Warnings:

  - You are about to drop the `tasks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "tasks";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "teams" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "fansBackground" TEXT NOT NULL,
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
    "goalsDifference" INTEGER
);
