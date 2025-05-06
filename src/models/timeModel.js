import prisma from "../../prisma/client.js";

class TimeModel {
  getAll = async () => {
    return await prisma.team.findMany();
  };

  create = async (
    nome, 
    fansbackground,
    escudo,
    anoFundacao,
    camisas,
    estadioIMages,
    hino,
    titulos,
    name,
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
          nome, 
          fansbackground,
          escudo,
          anoFundacao,
          camisas,
          estadioIMages,
          hino,
          titulos,
          name,
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
      console.log("Error creating team", error);
      throw error;
    }
  };

  update = async (id, 
    nome, 
    fansbackground,
    escudo,
    anoFundacao,
    camisas,
    estadioIMages,
    hino,
    titulos,
    name,
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
          nome,
          fansbackground,
          escudo,
          anoFundacao,
          camisas,
          estadioIMages,
          hino,
          titulos,
          name,
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
      const timeDeletada = await prisma.team.delete({
        where: { id },
      });

      return timeDeletada;
    } catch (error) {
      console.log("Erro ao deletar a time!", error);
      throw error;
    }
  };
}
export default new TimeModel();
