import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = [
    {
      id: 1,
      name: 'Vela aromática',
      description: 'Esta vela lanza ricos olores',
    },
    {
      id: 2,
      name: 'Marco de fotos pequeño',
      description: 'Marco ideal para tus fotos 10x15',
    }
  ];

  getAll() {
    return this.products;
  }
  insert(product) {
    this.products = [
      ...this.products,
      product
    ];
  }
}
