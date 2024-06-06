import prismaClient from "../prisma";

class listCustomersService {
    async execute () {

        const customers = await prismaClient.customer.findMany()

        return customers

    }
}

export { listCustomersService }