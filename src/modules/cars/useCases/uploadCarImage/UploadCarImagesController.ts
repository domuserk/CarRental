import { container } from 'tsyringe';
import { Response, Request, response } from 'express';
import { UploadCarImagesUseCase } from './UploadCarImagesUseCase';

interface IFiles {
  filename: string;
}

class UploadCarImagesController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const images = request.files as IFiles[];

      const uploadCarImageUseCase = container.resolve(UploadCarImagesUseCase)
      
      const images_name = images.map(file => file.filename)
     
      await uploadCarImageUseCase.execute({
        car_id: id,
        images_name
      });
  
      return response.status(201).send();
      } catch(err) {
        console.log(err)
      }
    }
}

export { UploadCarImagesController }