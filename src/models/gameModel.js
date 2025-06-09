import prisma from "../../prisma/client.js"

class gameModel {

    async getAll() {
        const game = await prisma.game.findMany({
        });

        const total = await prisma.game.count();

        return {
            message: `Jogadores cadastrados: ${total}`,
            games,
        };

}

create = async (data) => {
    const game = await prisma.game.create({
        data
    });

    return game;
}

update = async (id, data) => {

    try {
      const updatedGame = await prisma.game.update({
        where: { id },
        data,
      });

      return updatedGame;
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const deletedGame = await prisma.game.delete({
        where: { id },
      });

      return deletedGame;
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  };
}

export default new gameModel();