import prisma from "../../prisma/client.js";

class TeamModel {
  getAll = async () => {
    return await prisma.team.findMany();
  };

  create = async (
    name,
    fansbackground,
    shield,
    foundationYear,
    uniform,
    stadiumImage,
    anthem,
    titles,
    games,
    wins,
    draws,
    losses,
    points,
    goalsFavor,
    goalsOwn,
    goalsDifference
  ) => {
    try {
      return await prisma.team.create({
        data: {
          name, 
          fansbackground,
          shield,
          foundationYear,
          uniform,
          stadiumImage,
          anthem,
          titles,
          games,
          wins,
          draws,
          losses,
          points,
          goalsFavor,
          goalsOwn,
          goalsDifference
        },
      });
    } catch (error) {
      console.log("Erro ao criar time", error);
      throw error;
    }
  };

  update = async (id, 
    name,
    fansbackground,
    shield,
    foundationYear,
    uniform,
    stadiumImage,
    anthem,
    titles, 
    games,
    wins,
    draws,
    losses,
    points,
    goalsFavor,
    goalsOwn,
    goalsDifference) => {
    try {
      const time = await prisma.team.update({
        where: { id },
        data: {
          name,
          fansbackground,
          shield,
          foundationYear,
          uniform,
          stadiumImage,
          anthem,
          titles,
          games,
          wins,
          draws,
          losses,
          points,
          goalsFavor,
          goalsOwn,
          goalsDifference
        },
      });

      return time;
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
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
