import { Body, Controller, Get, Post } from '@nestjs/common';
import { AssetService } from './asset.service';

@Controller('asset')
export class AssetController {
  constructor(private readonly assetService: AssetService) {}

  @Get()
  all() {
    return this.assetService.all();
  }

  @Post()
  create(@Body() data: { id: string; symbol: string; price: number }) {
    this.assetService.create(data);
  }
}
