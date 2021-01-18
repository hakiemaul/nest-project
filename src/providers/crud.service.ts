import { Injectable } from '@nestjs/common';
import { CrudDto } from 'src/dto/crud.dto';

@Injectable()
export class CrudService {
  async getCruds(): Promise<CrudDto> {
    return {
      message: `All the cruds`
    };
  }

  async getCrud(id: number): Promise<CrudDto> {
    return {
      message: `Specific crud #${id}`,
      id
    };
  }

  async createCrud(data: Partial<CrudDto>): Promise<CrudDto> {
    return {
      ...data,
      message: data.message || 'Invalid data'
    };
  }

  async updateCrud(id: number, data: Partial<CrudDto>): Promise<CrudDto> {
    return {
      id,
      message: data.message || `Invalid data to update crud #${id}`
    };
  }

  async deleteCrud(id: number): Promise<string> {
    return `Crud #${id} successfully deleted`;
  }
}
