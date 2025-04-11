import { Controller,Get,Param,Post,Body,HttpCode, HttpStatus,Res,Put,Patch,Delete,Query,ParseIntPipe,NotFoundException, BadRequestException} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './interfaces/product/product.interface';
import { CreateProductDto } from 'src/products/create-product.dto';

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) { }
    
    // 1. PRIMERO: Rutas específicas sin parámetros
    @Get('hot')
    getSpecialProducts(): string {
      return "Te vamos a mostrar los productos más calientes!!";
    }
    
    @Get('ruta-error-404')
    @HttpCode(HttpStatus.NOT_FOUND)
    rutaConError404() {
      return 'Esto es un error 404!!';
    }
    
    @Get('query')
    rutaQuery(@Query() query) {
      return `El dato query.x ha recibido el valor ${query.x}`;
    }
    
    @Get('cars')
    carsQuery(@Query('count', ParseIntPipe) carCount: number) {
      return carCount;
    }
    
    // 2. DESPUÉS: Ruta general Get para obtener todos
    @Get()
    async getAllProducts(): Promise<Product[]> {
      return await this.productsService.getAll();
    }
    
    // 3. DESPUÉS: Rutas con parámetros
    @Get(':id/:size')
    findWithSize(@Param('id') id: number, @Param('size') size: string ) {
      return `Página de detalle de producto ${id}, en tamaño ${size}`;
    }
    
    @Get(':id')
    find(@Param('id') id: number) {
      const product = this.productsService.getId(id);
      if (!product) {
        throw new NotFoundException(`Producto con ID ${id} no encontrado`);
      }
      return product;
    }
    
    // Resto de tus métodos (POST, PUT, PATCH, DELETE)
    @Post()
    @HttpCode(HttpStatus.CREATED)
    createProduct(@Body() createProductDto: CreateProductDto) {
      return this.productsService.insert(createProductDto);
    }
    
    @Put(':id')
    update(@Param('id') id: number, @Body() body) {
      if (!body.name || !body.description) {
        throw new BadRequestException('Nombre y descripción son requeridos');
      }
      
      const updatedProduct = this.productsService.update(id, body);
      if (!updatedProduct) {
        throw new NotFoundException(`Producto con ID ${id} no encontrado`);
      }
      
      return updatedProduct;
    }
    
    @Patch(':id')
    partialUpdate(@Param('id') id: number, @Body() body) {
      return `Actualización parcial del ítem ${id}`;
    }
    
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: number) {
      const product = this.productsService.getId(id);
      if (!product) {
        throw new NotFoundException(`Producto con ID ${id} no encontrado`);
      }
      
      this.productsService.delete(id);
    }
}