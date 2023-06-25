import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { WalletAssetController } from './wallet-asset/wallet-asset.controller';
import { WalletAssetService } from './wallet-asset/wallet-asset.service';

@Module({
  controllers: [WalletController, WalletAssetController],
  providers: [WalletService, WalletAssetService]
})
export class WalletModule {}
