import playerModel from "../models/playerModel.js";

class PlayerController {
  getAll = async (req, res) => {
    try {
      const players = await playerModel.getAll();
      res.status(200).json(players);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar jogadores" });
    }
  };

  create = async (req, res) => {
    try {
      const { name, image, position, number, birthdayYear, teamId, height } =
        req.body;

      if (!name || !position || !number || !birthdayYear || !teamId || !height) {
        return res.status(400).json({ erro: "Todos os campos são obrigatorios! (exceto imagem)" });
      }

      const validPositions = ["goleiro", "defensor", "meio-campista", "atacante"];
      if (!validPositions.includes(position.toLowerCase())) {
        return res.status(400).json({
          error: "A posição deve ser goleiro, defensor, meio-campista ou atacante",
        });
      }

      const data = {
        name,
        image,
        position,
        number,
        birthdayYear,
        teamId,
        height,
      };

      const newPlayer = await playerModel.create(data);

      res.status(201).json({
        message: "Jogador criado com sucesso",
        player: newPlayer,
      })

    } catch (error) {
      console.error("Erro ao criar jogador", error);
      res.status(500).json({ erro: "Erro ao criar jogador" });
    };
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { name, image, position, number, birthdayYear, teamId, height } = req.body;

    try {
      if (!name || !position || !number || !birthdayYear || !teamId || !height) {
        return res.status(400).json({ erro: "Todos os campos são obrigatorios! (exceto imagem)" });
      }

      const validPositions = ["goleiro", "defensor", "meio-campista", "atacante"];
      if (!validPositions.includes(position.toLowerCase())) {
        return res.status(400).json({
          error: "A posição deve ser goleiro, defensor, meio-campista ou atacante",
        });
      }

      const data = {
        name,
        image,
        position,
        number,
        birthdayYear,
        teamId,
        height,
      };

      const updatedPlayer = await playerModel.update(
        Number(id),
        data
      );

      if (!updatedPlayer) {
        return res.status(404).json({ erro: "Jogador não encontrado!" });
      }

      res.status(200).json({
        message: "Jogador atualizado com sucesso",
        player: updatedPlayer,
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar jogador!" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const deletedPlayer = await playerModel.delete(Number(id));

      if (!deletedPlayer) {
        return res.status(404).json({ erro: "Jogador não encontrado" });
      }

      res.status(200).json({ message: "Jogador deletado com sucesso!" });
    } catch (error) {
      console.error("Erro ao deletar jogador", error);
      res.status(500).json({ erro: "Erro ao deletar jogador" });
    }
  };
}

export default new PlayerController();
