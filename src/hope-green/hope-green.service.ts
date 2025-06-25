import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import {
  MARKETPLACE_ABI,
  MARKETPLACE_CONTRACT_ADDRESS,
  NFT_CONTRACT_ADDRESS,
  NFT_ABI,
} from 'src/constants';

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

    const enrichedListings = await Promise.all(
      listings.map(async (listing: any) => {
        const tokenId = Number(listing[0]);
        const price = Number(listing[1]);
        const listed = listing[2];

        const metadataUrl = `https://hope-green.s3.us-east-2.amazonaws.com/metadata/${tokenId}.json`;
        let metadata = null;
        try {
          const response = await fetch(metadataUrl);
          metadata = await response.json();
        } catch (error) {
          console.error(
            `Erro ao buscar metadata para tokenId ${tokenId}:`,
            error,
          );
        }
        return { price, tokenId, listed, metadata };
      }),
    );

    return enrichedListings;
  }

  async getListingById(tokenId) {
    const provider = this.provider();
    const contract = new ethers.Contract(
      MARKETPLACE_CONTRACT_ADDRESS,
      MARKETPLACE_ABI,
      provider,
    );

    const listing = await contract.listings(tokenId);

    const id = Number(listing[0]);
    const price = Number(listing[1]);
    const listed = listing[2];

    const metadataUrl = `https://hope-green.s3.us-east-2.amazonaws.com/metadata/${id}.json`;

    let metadata = null;
    try {
      const response = await fetch(metadataUrl);
      metadata = await response.json();
    } catch (error) {
      console.error(`Erro ao buscar metadata para tokenId ${id}:`, error);
    }

    return { price, tokenId: id, listed, metadata };
  }

  async getNFTsByOwner(
    ownerAddress: string,
    page = 1,
    pageSize = 10,
  ): Promise<{ tokenId: number; metadata: any }[]> {
    const provider = this.provider();
    const nftContract = new ethers.Contract(
      NFT_CONTRACT_ADDRESS,
      NFT_ABI,
      provider,
    );

    const balanceBN = await nftContract.balanceOf(ownerAddress);
    const total = Number(balanceBN);

    const offset = (page - 1) * pageSize;
    const count = Math.min(pageSize, total - offset);
    if (count <= 0) {
      return [];
    }

    const indices = Array.from({ length: count }, (_, i) => offset + i);

    const tokenIds: number[] = await Promise.all(
      indices.map((idx) =>
        nftContract
          .tokenOfOwnerByIndex(ownerAddress, idx)
          .then((bn: ethers.BigNumberish) => Number(bn)),
      ),
    );

    const nfts = await Promise.all(
      tokenIds.map(async (tokenId) => {
        const metadataUrl = `https://hope-green.s3.us-east-2.amazonaws.com/metadata/${tokenId}.json`;
        let metadata = null;
        try {
          const res = await fetch(metadataUrl);
          metadata = await res.json();
        } catch (err) {
          console.error(
            `Erro ao buscar metadata para tokenId ${tokenId}:`,
            err,
          );
        }
        return { tokenId, metadata };
      }),
    );

    return nfts;
  }

  async getNftByTokenId(tokenId) {
    const provider = this.provider();
    const nftContract = new ethers.Contract(
      NFT_CONTRACT_ADDRESS,
      NFT_ABI,
      provider,
    );

    const owner = await nftContract.ownerOf(Number(tokenId));

    const metadataUrl = `https://hope-green.s3.us-east-2.amazonaws.com/metadata/${tokenId}.json`;

    const res = await fetch(metadataUrl);
    const metadata = await res.json();

    return { owner, metadata };
  }
}
