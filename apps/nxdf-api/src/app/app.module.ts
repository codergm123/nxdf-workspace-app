import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SolanaModule } from './modules/solana/solana.module';


@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => (
        {
          // uri: 'mongodb://root:20ahdrh49db5qlalf6qjsghgg@34.64.183.133:30001',  // environment.database.uri
          uri: 'mongodb+srv://llap-dev-1:XbS5geycSszfrPd@cluster0.mhq0y.mongodb.net/nxdf?retryWrites=true&w=majority',
          // environment.database.uri
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      ),
      connectionName: 'default'
    }),

    SolanaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
