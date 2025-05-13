import timeModel from "../models/timeModel.js";

class TimeController {
  getAll = async (req, res) => {
    try {
      const times = await timeModel.getAll();
      res.json(times);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar times" });
    }
  };

  create = async (req, res) => {
    const { 
      nome, 
      fansbackground,
      escudo,
      anoFundacao,
      camisas,
      estadioImages,
      hino,
      titulos,
      name,
      games,
      wins,
      draws,
      losses,
      points,
      goalsFavor,
      goalsOwn,
      goalsDifference } = req.body;
    // const  = req.body.descricao;
    try {
      if (!nome) {
        return res.status(400).json({ erro: "Nome é obrigatório" });
      }
      if (!fansbackground) {
        return res.status(400).json({ erro: "Fansbackground é obrigatório" });
      }
      if (!escudo) {
        return res.status(400).json({ erro: "Escudo é obrigatório" });
      }

      const novoTime = await timeModel.create(nome, fansbackground,escudo,anoFundacao,camisas,estadioImages,hino,titulos,name,games,wins,draws,losses,points,goalsFavor,goalsOwn,goalsDifference );
      res.status(201).json(novoTime);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar time" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { 
      nome, 
      fansbackground,
      escudo,
      anoFundacao,
      camisas,
      estadioImages,
      hino,
      titulos,
      name,
      games,
      wins,
      draws,
      losses,
      points,
      goalsFavor,
      goalsOwn,
      goalsDifference } = req.body;

    try {
      const timeAtualizado = await timeModel.update(
        Number(id),
        id, 
    nome, 
    fansbackground,
    escudo,
    anoFundacao,
    camisas,
    estadioImages,
    hino,
    titulos,
    name,
    games,
    wins,
    draws,
    losses,
    points,
    goalsFavor,
    goalsOwn,
    goalsDifference
      );

      if (!timeAtualizado) {
        return res.status(404).json({ erro: "time não encontrada!" });
      }

      res.json(timeAtualizado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar time!" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await timeModel.delete(Number(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "Time não encontrada" });
      }

      res.status(200).send({ message: "Time deletada com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao excluir time!" });
    }
  };
}
export default new TimeController();
