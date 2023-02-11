import {Controller, Get} from '@nestjs/common';
import {SolanaService} from "./solana.service";

@Controller('solana')
export class SolanaController {
  constructor(private readonly solanaService: SolanaService) {}

  @Get('/collections')
  getCollections() {

    return [];
  }

  @Get('/collectionsByQuery')
  getCollectionsByQuery() {

    return [];
  }

  @Get('/collections/:collectionKey')
  getCollectionDetail() {

    return [];
  }
}
