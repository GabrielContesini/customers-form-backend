import { FastifyRequest, FastifyReply } from "fastify";
import { createCustomerService } from "../services/createCustomerService";

class createCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const customerService = new createCustomerService();

    const { name, email } = request.body as { name: string; email: string };

    const customer = await customerService.execute({ name, email });

    reply.send(customer);
  }
}

export { createCustomerController };
