import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../errors/AppError'
import { IUsersRepository } from '../../repositories/IUsersRepository'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: {
    name: string
    email: string
  }
  token: string
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError('Email or password incorrect', 400)
    }

    const passwordMath = await compare(password, user.password)

    if (!passwordMath) {
      throw new AppError('Email or password incorrect', 400)
    }

    const token = sign({}, '131b98dac8609f781484f08c22a8abaa', {
      subject: user.id,
      expiresIn: '1d',
    })
    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    }
    return tokenReturn
  }
}

export { AuthenticateUserUseCase }
