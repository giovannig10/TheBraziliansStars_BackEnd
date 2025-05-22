import playerModel from "../models/playerModel.js";

class PlayerController {
  getAll = async (req, res) => {
    try {
      const players = await playerModel.getAll();
      res.status(200).json(players);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar times" });
    }
  };

  create = async (req, res) => {
    try {
      const { name, image, position, number, birthday, teamId, height } =
        req.body;

        if (!name || !position || !number || !birthday || !teamId || !height) {
          return res.status(400).json({ erro: "Todos os campos são obrigatorios! (exceto imagem)" });
        }

      const data = {
        name,
        image,
        position,
        number,
        birthday,
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
}

export default new PlayerController();
