/*
  Warnings:

  - Added the required column `nationalityImage` to the `players` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_players" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "position" TEXT NOT NULL,
    "nationalityImage" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "birthdayYear" INTEGER NOT NULL,
    "height" REAL NOT NULL,
    "teamName" TEXT NOT NULL,
    CONSTRAINT "players_teamName_fkey" FOREIGN KEY ("teamName") REFERENCES "teams" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_players" ("birthdayYear", "height", "id", "image", "name", "number", "position", "teamName") SELECT "birthdayYear", "height", "id", "image", "name", "number", "position", "teamName" FROM "players";
DROP TABLE "players";
ALTER TABLE "new_players" RENAME TO "players";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
