import teamModel from "../models/teamModel.js";

class TeamController {
  getAll = async (req, res) => {
    try {
      const teams = await teamModel.getAll();
      res.json(teams);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar times" });
    }
  };

 create = async (req, res) => {
  const { 
    name,
    fansbackground,
    shield,
    foundationYear,
    uniformHome,
    uniformAway,
    stadiumName,
    stadiumImage,
    color1,
    color2,
    anthem,
    games,
    wins,
    draws,
    losses,
    points,
    goalsFavor,
    goalsOwn,
    goalsDifference
  } = req.body;

  try {
    if (!name) {
      return res.status(400).json({ erro: "Nome é obrigatório" });
    }
    if (!fansbackground) {
      return res.status(400).json({ erro: "Fansbackground é obrigatório" });
    }
    if (!shield) {
      return res.status(400).json({ erro: "Escudo é obrigatório" });
    }

    if (!color1) {
      return res.status(400).json({ erro: "Cor 1 é obrigatória" });
    }

    if (!color2) {
      return res.status(400).json({ erro: "Cor 2 é obrigatória" });
    }

    const newTeam = await teamModel.create(
      name,
      fansbackground,
      shield,
      foundationYear,
      uniformHome,
      uniformAway,
      stadiumName,
      stadiumImage,
      anthem,
      color1,
      color2,
      games,
      wins,
      draws,
      losses,
      points,
      goalsFavor,
      goalsOwn,
      goalsDifference
    );
    res.status(201).json(newTeam);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao criar time" });
  }
};

update = async (req, res) => {
  const { id } = req.params;
  const { 
    name,
    fansbackground,
    shield,
    foundationYear,
    uniformHome,
    uniformAway,
    stadiumName,
    stadiumImage,
    color1,
    color2,
    anthem,
    games,
    wins,
    draws,
    losses,
    points,
    goalsFavor,
    goalsOwn,
    goalsDifference
  } = req.body;

  try {
    const updatedTeam = await teamModel.update(
      Number(id),
      name,
      fansbackground,
      shield,
      foundationYear,
      uniformHome,
      uniformAway,
      stadiumName,
      stadiumImage,
      color1,
      color2,
      anthem,
      games,
      wins,
      draws,
      losses,
      points,
      goalsFavor,
      goalsOwn,
      goalsDifference
    );

    if (!updatedTeam) {
      return res.status(404).json({ erro: "Time não encontrado!" });
    }

    res.json(updatedTeam);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao atualizar time!" });
  }
};

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await teamModel.delete(Number(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "Time não encontrado" });
      }

      res.status(200).send({ message: "Time deletado com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao excluir time!" });
    }
  };
}
export default new TeamController();
