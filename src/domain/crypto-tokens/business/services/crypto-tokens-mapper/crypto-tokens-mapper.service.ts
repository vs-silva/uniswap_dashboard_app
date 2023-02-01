import {CryptoTokensMapperInterface} from "./crypto-tokens-mapper.interface";
import type {CryptoTokenDTO} from "../../dtos/crypto-token.dto";
import {CryptoTokensRequestedFieldsConstants} from "../../constants/crypto-tokens-requested-fields.constants";

function  mapToCryptoTokenDTOCollection(data: object[]): CryptoTokenDTO[] {

    return data.map((token:object) => (<CryptoTokenDTO>{
        // @ts-ignore
        id: token[`${CryptoTokensRequestedFieldsConstants.ID}`],
        // @ts-ignore
        name: token[`${CryptoTokensRequestedFieldsConstants.NAME}`],
        // @ts-ignore
        symbol: token[`${CryptoTokensRequestedFieldsConstants.SYMBOL}`],
        // @ts-ignore
        totalSupplyAmount: parseInt(token[`${CryptoTokensRequestedFieldsConstants.TOTAL_SUPPLY}`]),
        // @ts-ignore
        totalValueLockedInUSD: parseFloat(token[`${CryptoTokensRequestedFieldsConstants.TOTAL_VALUE_LOCKED_USD}`]),
    }));
}

export const CryptoTokensMapperService: CryptoTokensMapperInterface = Object.freeze({
   mapToCryptoTokenDTOCollection
});
