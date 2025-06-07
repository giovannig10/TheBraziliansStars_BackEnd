import titleModel from "../models/titleModel.js";

class TitleController {
  getAll = async (req, res) => {
    try {
      const titles = await titleModel.getAll();
      res.status(200).json(titles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar titles" });
    }
  };

  create = async (req, res) => {
    try {
      const { name, imageUrl } =
        req.body;

      const data = {
        name, imageUrl
      };

      const newtitle = await titleModel.create(data);

      res.status(201).json({
        message: "ttle criado com sucesso",
        title: newtitle,
      })

    } catch (error) {
      console.error("Erro ao criar jogo", error);
      res.status(500).json({ erro: "Erro ao criar jogo" });
    };
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { name, imageUrl } = req.body;

    try {

      const data = {
        name,
        imageUrl
      };

      const updatedtitle = await titleModel.update(
        Number(id),
        data
      );

      if (!updatedtitle) {
        return res.status(404).json({ erro: "jogo não encontrado!" });
      }

      res.status(200).json({
        message: "jogo atualizado com sucesso",
        title: updatedtitle,
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar jogo!" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const deletedtitle = await titleModel.delete(Number(id));

      if (!deletedtitle) {
        return res.status(404).json({ erro: "jogo não encontrado" });
      }

      res.status(200).json({ message: "jogo deletado com sucesso!" });
    } catch (error) {
      console.error("Erro ao deletar jogo", error);
      res.status(500).json({ erro: "Erro ao deletar jogo" });
    }
  };
}

export default new TitleController();