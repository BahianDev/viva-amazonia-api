import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegularizacaoAmbientalModule } from './regularizacao-ambiental/regularizacao-ambiental.module';
import { RegularizacaoSanitariaModule } from './regularizacao-sanitaria/regularizacao-sanitaria.module';
import { RegularizacaoFundiariaModule } from './regularizacao-fundiaria/regularizacao-fundiaria.module';
import { PlanoProdutivoModule } from './plano-produtivo/plano-produtivo.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ProdutorModule } from './produtor/produtor.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RegularizacaoAmbientalModule,
    RegularizacaoSanitariaModule,
    RegularizacaoFundiariaModule,
    PlanoProdutivoModule,
    UserModule,
    AuthModule,
    ProdutorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
