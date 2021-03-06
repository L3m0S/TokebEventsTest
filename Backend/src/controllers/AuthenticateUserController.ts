import { Request, Response } from "express";
import { AuthenticateUserServices} from "../services/AuthenticateUserServices"


class AuthenticateUserController {

    async handle(request: Request, response: Response) {

        const { 
            email, 
            password 
        } = request.body;

        const authenticateUserService = new AuthenticateUserServices();

        const token = await authenticateUserService.execute({
            email,
            password
        });

        return response.json(token);

    };
};

export { AuthenticateUserController };