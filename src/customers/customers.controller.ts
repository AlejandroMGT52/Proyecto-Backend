import { Controller, Get, Query, ParseIntPipe } from '@nestjs/common';

@Controller('customers')
export class CustomersController {

    @Get('cars')
    carsQuery(@Query('count', ParseIntPipe) carCount: number) {
      return carCount;
    }
}
