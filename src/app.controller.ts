import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from './models/product.model';

@Controller('products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): Product[] {
    return this.appService.findAll();
  }

  @Post()
  create(@Body() productData: Omit<Product, 'id'>): Product {
    return this.appService.create(productData);
  }
}
