import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';

import { DynamooseModule } from 'nestjs-dynamoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DynamooseModule.forRoot(), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
