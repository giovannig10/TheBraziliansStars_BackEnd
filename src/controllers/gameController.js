import gameModel from "../models/gameModel.js";

class gameController {
  getAll = async (req, res) => {
    try {
      const games = await gameModel.getAll();
      res.status(200).json(games);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar jogoes" });
    }
  };

  create = async (req, res) => {
    try {
      const { homeTeam, awayTeam, homeGoals, awayGoals } =
        req.body;

      if (!homeTeam || !awayTeam || !homeGoals || !awayGoals) {
        return res.status(400).json({ erro: "Todos os campos são obrigatorios!" });
      }

      const data = {
        homeTeam,
        awayTeam,
        homeGoals,
        awayGoals
      };

      const newGame = await gameModel.create(data);

      res.status(201).json({
        message: "jogo criado com sucesso",
        game: newGame,
      })

    } catch (error) {
      console.error("Erro ao criar jogo", error);
      res.status(500).json({ erro: "Erro ao criar jogo" });
    };
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { homeTeam, awayTeam, homeGoals, awayGoals } = req.body;

    try {
      if (!homeTeam || !awayTeam || !homeGoals || !awayGoals) {
        return res.status(400).json({ erro: "Todos os campos são obrigatorios!" });
      }

      const data = {
        homeTeam,
        awayTeam,
        homeGoals,
        awayGoals
      };

      const updatedGame = await gameModel.update(
        Number(id),
        data
      );

      if (!updatedGame) {
        return res.status(404).json({ erro: "jogo não encontrado!" });
      }

      res.status(200).json({
        message: "jogo atualizado com sucesso",
        game: updatedGame,
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar jogo!" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const deletedGame = await gameModel.delete(Number(id));

      if (!deletedGame) {
        return res.status(404).json({ erro: "jogo não encontrado" });
      }

      res.status(200).json({ message: "jogo deletado com sucesso!" });
    } catch (error) {
      console.error("Erro ao deletar jogo", error);
      res.status(500).json({ erro: "Erro ao deletar jogo" });
    }
  };
}

export default new gameController();
