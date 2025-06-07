import prisma from "../../prisma/client.js";

class TeamModel {
  getAll = async () => {
    return await prisma.team.findMany();
  };

  async create(
    name,
    fansbackground,
    shield,
    foundationYear,
    uniformHome,
    uniformAway,
    stadiumName,
    stadiumImage,
    anthem,
    games,
    wins,
    draws,
    losses,
    points,
    goalsFavor,
    goalsOwn,
    goalsDifference
  ) {
    return await prisma.team.create({
      data: {
        name,
        fansbackground,
        shield,
        foundationYear,
        uniformHome,
        uniformAway,
        stadiumName,
        stadiumImage,
        anthem,
        games,
        wins,
        draws,
        losses,
        points,
        goalsFavor,
        goalsOwn,
        goalsDifference,
      },
    });
  }

  async update(
    id,
    name,
    fansbackground,
    shield,
    foundationYear,
    uniformHome,
    uniformAway,
    stadiumName,
    stadiumImage,
    anthem,
    games,
    wins,
    draws,
    losses,
    points,
    goalsFavor,
    goalsOwn,
    goalsDifference
  ) {
    return await prisma.team.update({
      where: { id },
      data: {
        name,
        fansbackground,
        shield,
        foundationYear,
        uniformHome,
        uniformAway,
        stadiumName,
        stadiumImage,
        anthem,
        games,
        wins,
        draws,
        losses,
        points,
        goalsFavor,
        goalsOwn,
        goalsDifference,
      },
    });
  };
  
  delete = async (id) => {
    try {
      const deletedTeam = await prisma.team.delete({
        where: { id },
      });

      return deletedTeam;
    } catch (error) {
      console.log("Erro ao deletar time!", error);
      throw error;
    }
  };
}
export default new TeamModel();
