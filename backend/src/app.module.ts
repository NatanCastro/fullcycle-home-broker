import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AssetModule } from './asset/asset.module';
import { WalletModule } from './wallet/wallet.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [PrismaModule, AssetModule, WalletModule, OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
