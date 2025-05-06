import prisma from "../../prisma/client.js";

class UserModel {
  getAll = async () => {
    return await prisma.users.findMany();
  };

  create = async (
    name,
    email,
    password,
    teamFavoriteId
  ) => {
    try {
      return await prisma.users.create({
        data: {
          name,
    email,
    password,
    teamFavoriteId
        },
      });
    } catch (error) {
      console.log("Error creating user", error);
      throw error;
    }
  };

  update = async (id, 
    name,
    email,
    password,
    teamFavoriteId) => {
    try {
      const user = await prisma.users.update({
        where: { id },
        data: {
          name,
          email,
          password,
          teamFavoriteId
        },
      });

      return user;
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const userDeletado = await prisma.users.delete({
        where: { id },
      });

      return userDeletado;
    } catch (error) {
      console.log("Erro ao deletar usuario!", error);
      throw error;
    }
  };
}
export default new UserModel();
