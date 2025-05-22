import prisma from "../../prisma/client.js"

class playerModel {
    getAll = async () => {
        return await prisma.player.findMany();
    };
}

export default new playerModel();