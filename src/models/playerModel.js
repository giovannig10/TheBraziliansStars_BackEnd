import prisma from "../../prisma/client.js"

class playerModel {

    async getAll() {
        const players = await prisma.player.findMany({
            // include: {
            //     team: true
            // }
        });

        const total = await prisma.player.count();

        return {
            message: `Jogadores cadastrados: ${total}`,
            players,
        };

}

// getAll = async() => {
//     return await prisma.player.findMany();

//     const total = await prisma.player.count();

//     return {
//         json: {
//             message: "Jogadores cadastrados", total
//         }
//     }
// };

create = async (data) => {
    const player = await prisma.player.create({
        data
    });

    return player;
}
}

export default new playerModel();