import { UserDatabase } from "../database/UserDatabase"
import { SignupInputDTO, SignupOutputDTO } from "../dtos/userDTO";
import { BadRequestError } from "../errors/BadRequestError";
import { User } from "../models/User";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";
import { TokenPayload, USER_ROLES } from "../types";

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private tokenManager: TokenManager,
        private hashManager: HashManager
    ) {}

    public signup = async (input: SignupInputDTO): Promise<SignupOutputDTO> => {
        const { name, email, password } = input

        if(typeof name !== "string"){
            throw new BadRequestError("'name' deve ser string.")
        }

        if(typeof email !== "string"){
            throw new BadRequestError("'email' deve ser string.")
        }

        if(typeof password !== "string"){
            throw new BadRequestError("'password' deve ser string.")
        }

        const newUser = new User(
            this.idGenerator.generate(),
            name,
            email,
            password,
            USER_ROLES.NORMAL,
            new Date().toISOString()
        )

        const userDB = newUser.toDBModel()

        await this.userDatabase.insert(userDB)

        const payload: TokenPayload = {
            id: newUser.getId(),
            name: newUser.getName(),
            role: newUser.getRole()
        }

        const output: SignupOutputDTO = {
            token: this.tokenManager.createToken(payload)
        }

        return output
    }

}