import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { CustomersController } from './customers/customers.controller';
import { UsersController } from './controllers/users/users.controller';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { ProductsService } from './products/products.service';

@Module({
  imports: [TasksModule, ProjectsModule, AuthModule],
  controllers: [AppController, ProductsController, CustomersController, UsersController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
