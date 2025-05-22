

class PlayerController {
    getAll = async (req, res) => {
        try {
            const players = await playerModel.getAll();
            res.json(players);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao buscar times" })
        }
    };



}

export default new PlayerController();