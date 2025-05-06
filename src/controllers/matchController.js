import matchModel from "../models/matchModel.js";

class MatchController {
  getAll = async (req, res) => {
    try {
      const matchs = await matchModel.getAll();
      res.json(matchs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar matchs" });
    }
  };

  create = async (req, res) => {
    const { homeTeam, awayTeam, homeGoals, awayGoals, round } = req.body;
    // const  = req.body.descricao;
    try {
      if (!homeTeam) {
        return res.status(400).json({ erro: "Home Team é obrigatório" });
      }
      if (!awayTeam) {
        return res.status(400).json({ erro: "Away Team é obrigatório" });
      }
      if (!homeGoals) {
        return res.status(400).json({ erro: "Home Goals é obrigatório" });
      }
      if (!awayGoals) {
        return res.status(400).json({ erro: "Away Goals é obrigatório" });
      }
      if (!round) {
        return res.status(400).json({ erro: "Round é obrigatório" });
      }

      const novoMatch = await matchModel.create(
        homeTeam,
        awayTeam,
        homeGoals,
        awayGoals,
        round
      );
      res.status(201).json(novoMatch);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar match" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { homeTeam, awayTeam, homeGoals, awayGoals, round } = req.body;

    try {
      const matchAtualizado = await matchModel.update(
        Number(id),
        id,
        homeTeam,
        awayTeam,
        homeGoals,
        awayGoals,
        round
      );

      if (!matchAtualizado) {
        return res.status(404).json({ erro: "match não encontrada!" });
      }

      res.json(matchAtualizado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar match!" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await matchModel.delete(Number(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "match não encontrada" });
      }

      res.status(200).send({ message: "match deletada com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao excluir match!" });
    }
  };
}
export default new MatchController();
