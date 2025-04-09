import { Controller,Get, Param,Post,HttpCode,Body,HttpStatus,Res,Put, Patch, Delete, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

  constructor(private readonly productsService: ProductsService) { }

  // …
    
  @Get()
  getAllProducts() {
    return this.productsService.getAll();
  }

  @Post()
  @HttpCode(204)
  createProduct(
    @Body('name') name: string,
    @Body('description') description: string
  ) {
    this.productsService.insert({
      id: this.productsService.getAll().length,
      name,
      description
    });
  }



    @Get('inventario')
    getHelloInProducts():string{ 
        return 'estamos en productos'
     }
    
//  @Get(':id')
//  find(@Param()params){
//     return estamos consultando el producto ${params.id};
//  }
 //Recibir varios parametros 

//  @Get(':id/ :size')
//  findWithSize( @Param() params){
//     return productos con id: ${params.id}, ////// size: ${params.size} 
//  }

 //Desestructurar 

//  @Get (':id')
//  find(@Param('id') id: number){
//     return pagina de productos${id}
//  }
 //Metodo post 
//  @Post()

//  createProduct(
//    @Body('name') name: string, 
//    @Body('description') description: string
//  ) {
//    return Creo el producto ${name} con descripción ${description}.;
//  }
   // @Post()
   // @HttpCode(204)
   // createProduct(@Body() body) {
   //    return body;
   // }

   
   //@Post()
   //@HttpCode(HttpStatus.NO_CONTENT)
   //createProduct(@Body() body) {
   //return body;
   //}

   //@Get('ruta-error-404')
   //@HttpCode(HttpStatus.NOT_FOUND)
   //rutaConError404() {
  //return 'Esto es un error 404!!';
  //}




//decorador get con parametros 
// @Get(':id')
// find(@Res() response, @Param('id') id: number) {
//   if(id < 100) {
//     return response.status(HttpStatus.OK).send(Página del producto ${id});
//   } else {
//     return response.status(HttpStatus.NOT_FOUND).send(Producto inexistente);
//   }
  
// }
// decorador put
@Put(':id')
update(@Param('id') id: number, @Body() body) {
  return `Estás haciendo una operación de actualización del recurso ${id} 
          con ${body.name} y ${body.description}`;
}
//decorador patch 
@Patch(':id')
partialUpdate(@Param('id') id: number, @Body() body) {
  return `Actualización parcial del ítem ${id}`;
}
//decorador delete 
@Delete(':id')
@HttpCode(HttpStatus.NO_CONTENT)
delete(@Param('id') id: number) {
  return `Hemos borrado el producto ${id}`;
}
// metodo Query 
@Get('query')
rutaQuery(@Query() query) {
    return query;
}
}