import { inject, injectable } from 'tsyringe'
import { deleteFilte } from '../../../../utils/file'
import { IUsersRepository } from '../../repositories/IUsersRepository'

interface IRequest {
  user_id: string
  avatar_file: string
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ user_id, avatar_file }: IRequest) {
    const user = await this.usersRepository.findById(user_id)
    
    if(user.avatar){
      await deleteFilte(`./tmp/avatar/${user.avatar}`)
    }
   
    user.avatar = avatar_file

    await this.usersRepository.create(user)
  }
}

export { UpdateUserAvatarUseCase }
