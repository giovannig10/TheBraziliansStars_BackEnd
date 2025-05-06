import userModel from "../models/userModel.js";

class UserController {
  getAll = async (req, res) => {
    try {
      const users = await userModel.getAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar users" });
    }
  };

  create = async (req, res) => {
    const { name, email, password, teamFavoriteId } = req.body;
    try {
      if (!name) {
        return res.status(400).json({ erro: "Nome é obrigatório" });
      }
      if (!email) {
        return res.status(400).json({ erro: "email é obrigatório" });
      }
      if (!password) {
        return res.status(400).json({ erro: "Senha é obrigatória" });
      }

      const novoUser = await timeModel.create(
        name,
        email,
        password,
        teamFavoriteId
      );
      res.status(201).json(novoUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar user" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { name, email, password, teamFavoriteId } = req.body;

    try {
      const userAtualizado = await userModel.update(
        Number(id),
        id,
        name,
        email,
        password,
        teamFavoriteId
      );

      if (!userAtualizado) {
        return res.status(404).json({ erro: "user não encontrada!" });
      }

      res.json(userAtualizado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar user!" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await userModel.delete(Number(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "user não encontrada" });
      }

      res.status(200).send({ message: "user deletada com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao excluir user!" });
    }
  };
}
export default new UserController();
