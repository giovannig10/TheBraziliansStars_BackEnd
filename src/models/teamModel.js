import prisma from "../../prisma/client.js";

class TeamModel {
  getAll = async () => {
    return await prisma.team.findMany();
  };

  async create(
    name,
    nickName,
    history,
    fansbackground,
    shield,
    foundationYear,
    uniformHome,
    uniformAway,
    anthem,
    teamBanner
  ) {
    return await prisma.team.create({
      data: {
        name,
        nickName,
        history,
        fansbackground,
        shield,
        foundationYear,
        uniformHome,
        uniformAway,
        anthem,
        teamBanner
      },
    });
  }

  async update(
    id,
    name,
    nickName,
    history,
    fansbackground,
    shield,
    foundationYear,
    uniformHome,
    uniformAway,
    anthem,
    teamBanner
  ) {
    return await prisma.team.update({
      where: { id },
      data: {
        name,
        nickName,
        history,
        fansbackground,
        shield,
        foundationYear,
        uniformHome,
        uniformAway,
        anthem,
        teamBanner
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
