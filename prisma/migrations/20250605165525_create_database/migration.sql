-- CreateTable
CREATE TABLE "players" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "position" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "birthday" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "height" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "teams" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "fansbackground" TEXT NOT NULL,
    "shield" TEXT NOT NULL,
    "foundationYear" INTEGER NOT NULL,
    "uniform" TEXT NOT NULL,
    "stadiumImage" TEXT NOT NULL,
    "anthem" TEXT NOT NULL,
    "titles" TEXT NOT NULL,
    "games" INTEGER,
    "wins" INTEGER,
    "draws" INTEGER,
    "losses" INTEGER,
    "points" INTEGER,
    "goalsFavor" INTEGER,
    "goalsOwn" INTEGER,
    "goalsDifference" INTEGER
);

-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "teamFavoriteId" INTEGER
);

-- CreateTable
CREATE TABLE "games" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "homeTeam" TEXT NOT NULL,
    "awayTeam" TEXT NOT NULL,
    "homeGoals" INTEGER NOT NULL,
    "awayGoals" INTEGER NOT NULL,
    "date" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
