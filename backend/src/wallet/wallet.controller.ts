import { Body, Controller, Get, Post } from '@nestjs/common';
import { WalletService } from './wallet.service';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Get()
  all() {
    return this.walletService.all();
  }

  @Post()
  create(@Body() body: { id: string }) {
    return this.walletService.create({
      id: body.id,
    });
  }
}
