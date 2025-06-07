/*
  Warnings:

  - You are about to drop the column `birthday` on the `players` table. All the data in the column will be lost.
  - You are about to alter the column `teamId` on the `players` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to drop the column `titles` on the `teams` table. All the data in the column will be lost.
  - You are about to drop the column `uniform` on the `teams` table. All the data in the column will be lost.
  - Added the required column `birthdayYear` to the `players` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uniformAway` to the `teams` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uniformHome` to the `teams` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "titles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_games" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "homeTeam" TEXT NOT NULL,
    "awayTeam" TEXT NOT NULL,
    "homeGoals" INTEGER NOT NULL,
    "awayGoals" INTEGER NOT NULL,
    "date" TEXT NOT NULL
);
INSERT INTO "new_games" ("awayGoals", "awayTeam", "date", "homeGoals", "homeTeam", "id") SELECT "awayGoals", "awayTeam", "date", "homeGoals", "homeTeam", "id" FROM "games";
DROP TABLE "games";
ALTER TABLE "new_games" RENAME TO "games";
CREATE TABLE "new_players" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "position" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "birthdayYear" INTEGER NOT NULL,
    "height" REAL NOT NULL,
    "teamId" INTEGER NOT NULL,
    CONSTRAINT "players_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_players" ("height", "id", "image", "name", "number", "position", "teamId") SELECT "height", "id", "image", "name", "number", "position", "teamId" FROM "players";
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
INSERT INTO "new_teams" ("anthem", "draws", "fansbackground", "foundationYear", "games", "goalsDifference", "goalsFavor", "goalsOwn", "id", "losses", "name", "points", "shield", "stadiumImage", "wins") SELECT "anthem", "draws", "fansbackground", "foundationYear", "games", "goalsDifference", "goalsFavor", "goalsOwn", "id", "losses", "name", "points", "shield", "stadiumImage", "wins" FROM "teams";
DROP TABLE "teams";
ALTER TABLE "new_teams" RENAME TO "teams";
CREATE UNIQUE INDEX "teams_name_key" ON "teams"("name");
CREATE TABLE "new_users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "teamFavoriteId" INTEGER,
    CONSTRAINT "users_teamFavoriteId_fkey" FOREIGN KEY ("teamFavoriteId") REFERENCES "teams" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_users" ("email", "id", "name", "password", "teamFavoriteId") SELECT "email", "id", "name", "password", "teamFavoriteId" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
