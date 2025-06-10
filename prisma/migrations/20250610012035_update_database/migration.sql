/*
  Warnings:

  - You are about to drop the column `teamId` on the `players` table. All the data in the column will be lost.
  - Added the required column `teamName` to the `players` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color1` to the `teams` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color2` to the `teams` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_players" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "position" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "birthdayYear" INTEGER NOT NULL,
    "height" REAL NOT NULL,
    "teamName" TEXT NOT NULL,
    CONSTRAINT "players_teamName_fkey" FOREIGN KEY ("teamName") REFERENCES "teams" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_players" ("birthdayYear", "height", "id", "image", "name", "number", "position") SELECT "birthdayYear", "height", "id", "image", "name", "number", "position" FROM "players";
DROP TABLE "players";
ALTER TABLE "new_players" RENAME TO "players";
CREATE TABLE "new_teams" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "fansbackground" TEXT NOT NULL,
    "shield" TEXT NOT NULL,
    "foundationYear" INTEGER NOT NULL,
    "uniformHome" TEXT NOT NULL,
    "uniformAway" TEXT NOT NULL,
    "color1" TEXT NOT NULL,
    "color2" TEXT NOT NULL,
    "stadiumName" TEXT,
    "stadiumImage" TEXT,
    "anthem" TEXT NOT NULL,
    "games" INTEGER,
    "wins" INTEGER,
    "draws" INTEGER,
    "losses" INTEGER,
    "points" INTEGER,
    "goalsFavor" INTEGER,
    "goalsOwn" INTEGER,
    "goalsDifference" INTEGER
);
INSERT INTO "new_teams" ("anthem", "draws", "fansbackground", "foundationYear", "games", "goalsDifference", "goalsFavor", "goalsOwn", "id", "losses", "name", "points", "shield", "stadiumImage", "stadiumName", "uniformAway", "uniformHome", "wins") SELECT "anthem", "draws", "fansbackground", "foundationYear", "games", "goalsDifference", "goalsFavor", "goalsOwn", "id", "losses", "name", "points", "shield", "stadiumImage", "stadiumName", "uniformAway", "uniformHome", "wins" FROM "teams";
DROP TABLE "teams";
ALTER TABLE "new_teams" RENAME TO "teams";
CREATE UNIQUE INDEX "teams_name_key" ON "teams"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
