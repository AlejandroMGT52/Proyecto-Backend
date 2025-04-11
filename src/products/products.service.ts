import { Injectable} from '@nestjs/common';
import { Product } from './interfaces/product/product.interface';

@Injectable()
export class ProductsService {
    private products: Product[] = [
        {
            id: 1,
            name: 'Teclado Gamer',
            description: 'Suprecion de sonido, teclas rapidas, comodidad',
        },
        {
            id: 2,
            name: 'Laptop ASUS 500l',
            description: 'Ram 32, Procesador Intel I9, Disco, SSD 1T',
        }
    ];
      
    async getAll(): Promise<Product[]> {
        return this.products;
    }
      
    async getId(id: number): Promise<Product | undefined> {
        return this.products.find((item: Product) => item.id == id);
    }
      
    async insert(body: any): Promise<Product> {
        const newProduct: Product = {
            id: this.lastId() + 1,
            name: body.name,
            description: body.description,
        };
        
        this.products.push(newProduct);
        return newProduct;
    }
      
    async update(id: number, body: any): Promise<Product | null> {
        const productExists = await this.getId(id);
        if (!productExists) {
            return null; // El controlador se encargará de lanzar la excepción
        }
        
        const updatedProduct: Product = {
            id,
            name: body.name,
            description: body.description,
        };
        
        this.products = this.products.map((item: Product) => {
            return item.id == id ? updatedProduct : item;
        });
        
        return updatedProduct;
    }
      
    async delete(id: number): Promise<boolean> {
        const initialLength = this.products.length;
        this.products = this.products.filter((item: Product) => item.id != id);
        return initialLength !== this.products.length;
    }
      
    private lastId(): number {
        if (this.products.length === 0) {
            return 0;
        }
        return Math.max(...this.products.map(product => product.id));
    }
}