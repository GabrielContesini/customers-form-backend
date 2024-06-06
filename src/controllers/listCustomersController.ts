import { FastifyRequest, FastifyReply } from "fastify";
import { listCustomersService } from "../services/listCustomersService";

class listCustomersController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listCustomerService = new listCustomersService();

    const customers = await listCustomerService.execute();

    reply.send(customers);
  }
}

export { listCustomersController };
