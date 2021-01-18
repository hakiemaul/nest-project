import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CrudService } from 'src/providers/crud.service';

@Controller('crud')
export class CrudController {
  constructor(private readonly crudService: CrudService) {}

  @Get()
  getCruds() {
    return this.crudService.getCruds();
  }

  @Get('/:id')
  getCrud(@Param('id') id: string) {
    return this.crudService.getCrud(id);
  }

  @Post()
  createCrud(
    @Body('message') message: string
  ) {
    return this.crudService.createCrud({
        message
    });
  }

  @Patch('/:id')
  updateCrud(
    @Param('id') id: string,
    @Body('message') message: string
  ) {
    return this.crudService.updateCrud(id, {
        message
    });
  }
}
