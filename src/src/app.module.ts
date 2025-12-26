import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesController } from './modules/common/employees/presentation/employees/employees.controller';
import { EmployeesModule } from './modules/common/employees/employees.module';

@Module({
  imports: [EmployeesModule],
  controllers: [AppController, EmployeesController],
  providers: [AppService],
})
export class AppModule {}
