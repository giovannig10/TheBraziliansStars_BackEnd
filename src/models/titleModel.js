import prisma from "../../prisma/client.js";

class TitleModel {
  async findAll() {
    const titles = await prisma.title.findMany();

    return {
      total: titles.length,
      titles,
    };
  }
  async findById(id) {
    const title = await prisma.title.findUnique({
      where: {
        id: Number(id),
      },
    });

    return title;
  }
  create = async (name, imageUrl) => {
    try {
      return await prisma.title.create({
        data: {
          name,
          imageUrl
        },
      });
    } catch (error) {
      console.log("Error creating title", error);
      throw error;
    }
  };

  update = async (id, name, imageUrl) => {
    try {
      const title = await prisma.title.update({
        where: { id },
        data: {
          name,
          imageUrl       
        },
      });

      return title;
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const titleDeletado = await prisma.title.delete({
        where: { id },
      });

      return titleDeletado;
    } catch (error) {
      console.log("Error deleting title!", error);
      throw error;
    }
  };
}
export default new TitleModel();
