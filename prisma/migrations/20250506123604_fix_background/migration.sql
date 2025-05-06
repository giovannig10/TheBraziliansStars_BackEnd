/*
  Warnings:

  - You are about to drop the column `fansBackground` on the `teams` table. All the data in the column will be lost.
  - Added the required column `fansbackground` to the `teams` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_teams" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
    "goalsDifference" INTEGER
);
INSERT INTO "new_teams" ("anoFundacao", "camisas", "draws", "escudo", "estadioImages", "games", "goalsDifference", "goalsFavor", "goalsOwn", "hino", "id", "losses", "name", "nome", "points", "titulos", "wins") SELECT "anoFundacao", "camisas", "draws", "escudo", "estadioImages", "games", "goalsDifference", "goalsFavor", "goalsOwn", "hino", "id", "losses", "name", "nome", "points", "titulos", "wins" FROM "teams";
DROP TABLE "teams";
ALTER TABLE "new_teams" RENAME TO "teams";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
