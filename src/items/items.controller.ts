import { Controller, Get } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    console.log('NED');
    return 'GET ALL ITEMS';
  }
}
