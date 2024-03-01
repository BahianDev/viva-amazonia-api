import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvironmentalModule } from './environmental/environmental.module';
import { ProductionModule } from './production/production.module';

@Module({
  imports: [EnvironmentalModule, ProductionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
