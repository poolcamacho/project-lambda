import { Injectable } from '@nestjs/common';
import { Product } from './models/product.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AppService {
  private products: Product[] = [];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: string): Product {
    return this.products.find((product) => product.id === id)!;
  }

  create(productData: Omit<Product, 'id'>): Product {
    const newProduct = {
      id: uuidv4(),
      ...productData,
    };

    this.products.push(newProduct);
    return newProduct;
  }
}
