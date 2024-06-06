import prismaClient from "../prisma";
interface CreateCustomerProps {
  name: string;
  email: string;
}

class createCustomerService {
  async execute({ name, email }: CreateCustomerProps) {

    if(!name || !email) {
        throw new Error("Preencha todos os campos !")
    }

    const customer = await prismaClient.customer.create({
        data:{
            name,
            email,
            status: true
        }
    })

    return customer
  }
}

export { createCustomerService };
