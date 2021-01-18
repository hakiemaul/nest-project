import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CrudDto } from 'src/dto/crud.dto';
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
    @Body() crudDto: CrudDto
  ) {
    return this.crudService.createCrud(crudDto);
  }

  @Patch('/:id')
  updateCrud(
    @Param('id') id: string,
    @Body() crudDto: CrudDto
  ) {
    return this.crudService.updateCrud(id, crudDto);
  }
}
