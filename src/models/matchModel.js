import prisma from "../../prisma/client.js";

class MatchModel {
  getAll = async () => {
    return await prisma.match.findMany();
  };

  create = async (homeTeam, awayTeam, homeGoals, awayGoals, round) => {
    try {
      return await prisma.match.create({
        data: {
          homeTeam,
          awayTeam,
          homeGoals,
          awayGoals,
          round,
        },
      });
    } catch (error) {
      console.log("Error creating match", error);
      throw error;
    }
  };

  update = async (id, homeTeam, awayTeam, homeGoals, awayGoals, round) => {
    try {
      const match = await prisma.match.update({
        where: { id },
        data: {
          homeTeam,
          awayTeam,
          homeGoals,
          awayGoals,
          round,
        },
      });

      return match;
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const matchDeletada = await prisma.match.delete({
        where: { id },
      });

      return matchDeletada;
    } catch (error) {
      console.log("Erro ao deletar a match!", error);
      throw error;
    }
  };
}
export default new MatchModel();
