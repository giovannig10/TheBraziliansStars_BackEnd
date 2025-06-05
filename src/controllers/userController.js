import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class UserController {
  getAll = async (req, res) => {
    try {
      const users = await UserModel.findAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar usuários" });
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

      const hashedPassword = await bcrypt.hash(password, 10);

      const userExists = await UserModel.findByEmail(email);
      if (userExists) {
        return res.status(400).json({ error: "Email já está cadastrado" });
      }
      const newUser = await UserModel.create(
        name,
        email,
        hashedPassword,
        teamFavoriteId
      );


      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar user" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { name, email, password, teamFavoriteId } = req.body;

    try {
      const userAtualizado = await UserModel.update(
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
      const sucesso = await UserModel.delete(Number(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "user não encontrado" });
      }

      res.status(200).send({ message: "user deletada com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao excluir user!" });
    }
  };

  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res
          .status(400)
          .json({ error: "Os campos de email e senha são obrigatórios" });
      }

      const userExists = await UserModel.findByEmail(email);
      if (!userExists) {
        return res.status(401).json({ error: "Credenciais inválidas" });
      }

      const isPasswordValid = await bcrypt.compare(
        password,
        userExists.password
      );
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Credenciai inválidas" });
      }

      const token = jwt.sign(
        {
          id: userExists.id,
          name: userExists.name,
          email: userExists.email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      );

      return res
        .status(200)
        .json({ message: "Login realizado com sucesso", token, userExists });
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  }
}
export default new UserController();
