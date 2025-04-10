import { Controller,Get, Param,Post,HttpCode,Body,HttpStatus,Res,Put, Patch, Delete, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './interfaces/product.interface';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

     
  @Get()
  getAllProducts(): Product[] {
    return this.productsService.getAll();
  }

  @Get(':id')
  find(@Param('id') id: number) {
    return this.productsService.getId(id);
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  createProduct(
    @Body() body,
  ) {
    this.productsService.insert(body);
  }

  @Put(':id')
  update(
    @Param('id') id: number, 
    @Body() body,
  ) {
    return this.productsService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: number) {
    this.productsService.delete(id);
  }








    //@Get('inventario')
    //getHelloInProducts():string{ 
      //  return 'estamos en productos'
     //}

     //@Get()
     //getAllProducts(): Product[] {
     //return this.productsService.getAll();
     //}
     
     //@Post()
  //@HttpCode(204)
  //createProduct(
    //@Body('name') name: string,
    //@Body('description') description: string
  //) {
    //this.productsService.insert({
      //id: this.productsService.getAll().length,
      //name,
      //description
    //});
  //}
    
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
@Get('ruta-error-404')
@HttpCode(HttpStatus.NOT_FOUND)
rutaConError404() {
  return 'Esto es un error 404!!';
}
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


//@Put(':id')
//update(@Param('id') id: number, @Body() body) {
 // return `Estás haciendo una operación de actualización del recurso ${id} 
   //       con ${body.name} y ${body.description}`;
//}
//decorador patch 
@Patch(':id')
partialUpdate(@Param('id') id: number, @Body() body) {
  return `Actualización parcial del ítem ${id}`;
}
//decorador delete 
//@Delete(':id')
//@HttpCode(HttpStatus.NO_CONTENT)
//delete(@Param('id') id: number) {
  //return `Hemos borrado el producto ${id}`;
//}
// metodo Query 
@Get('query')
rutaQuery(@Query() query) {
    return query;
}
}