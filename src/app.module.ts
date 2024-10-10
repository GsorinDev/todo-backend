import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListModule } from './list/list.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ListModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
