import { Module } from '@nestjs/common';
import { MarvelClientService } from './marvel/marvel-client.service';

@Module({
  providers: [MarvelClientService],
  exports: [MarvelClientService],
})
export class ClientModule {}
