import { Module } from '@nestjs/common';
import { ListController } from './list.controller';
import { ListService } from './list.service';
import { DatabaseModule } from '../database/database.module';
import { listProvider } from './provider/list.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ListController],
  providers: [ListService, ...listProvider],
})
export class ListModule {}
