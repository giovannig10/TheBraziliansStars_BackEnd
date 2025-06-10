import prisma from "../../prisma/client.js"

class playerModel {

    async getAll() {
        const players = await prisma.player.findMany({
            include: {
                team: true
            }
        });

        const total = await prisma.player.count();

        return {
            message: `Jogadores cadastrados: ${total}`,
            players,
        };

}

create = async (data) => {
    const player = await prisma.player.create({
        data
    });

    return player;
}

update = async (id, data) => {

    try {
      const updatedPlayer = await prisma.player.update({
        where: { id },
        data,
      });

      return updatedPlayer;
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const deletedPlayer = await prisma.player.delete({
        where: { id },
      });

      return deletedPlayer;
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  };
}

export default new playerModel();