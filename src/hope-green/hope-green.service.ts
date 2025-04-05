import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import { MARKETPLACE_ABI, MARKETPLACE_CONTRACT_ADDRESS } from 'src/constants';

@Injectable()
export class HopeGreenService {
  constructor() {}

  private provider(): ethers.JsonRpcProvider {
    const provider = new ethers.JsonRpcProvider(process.env.POLYGON_RPC);
    return provider;
  }

  async getActiveListings() {
    const provider = this.provider();
    const contract = new ethers.Contract(
      MARKETPLACE_CONTRACT_ADDRESS,
      MARKETPLACE_ABI,
      provider,
    );

    const listings = await contract.getActiveListings();

    return listings;
  }
}
