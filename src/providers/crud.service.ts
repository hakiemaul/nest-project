import { Injectable } from '@nestjs/common';

export interface ICrud {
  message: string;
  id?: string;
}

@Injectable()
export class CrudService {
  async getCruds(): Promise<ICrud> {
    return {
      message: `All the cruds`
    };
  }

  async getCrud(id: string): Promise<ICrud> {
    return {
      message: `Specific crud #${id}`,
      id
    };
  }

  async createCrud(data: Partial<ICrud>): Promise<ICrud> {
    return {
      ...data,
      message: data.message || 'Invalid data'
    };
  }

  async updateCrud(id: string, data: Partial<ICrud>): Promise<ICrud> {
    return {
      id,
      message: data.message || `Invalid data to update crud #${id}`
    };
  }

  async deleteCrud(id: string): Promise<string> {
    return `Crud #${id} successfully deleted`;
  }
}
