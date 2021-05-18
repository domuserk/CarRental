import { Response, Request } from 'express'

import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

class CreateEspecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body
    this.createSpecificationUseCase.execute({ name, description })
    return response.status(201).send()
  }
}

export { CreateEspecificationController }
