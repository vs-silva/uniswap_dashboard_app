import {TokensMapperInterface} from "./tokens-mapper.interface";
import type {CryptoTokenDTO} from "../../dtos/crypto-token.dto";
import {TokenRequestedFieldsConstants} from "../../constants/token-requested-fields.constants";

function  mapToCryptoTokenDTOCollection(data: object[]): CryptoTokenDTO[] {

    return data.map((token:object) => (<CryptoTokenDTO>{
        // @ts-ignore
        id: token[`${TokenRequestedFieldsConstants.ID}`],
        // @ts-ignore
        name: token[`${TokenRequestedFieldsConstants.NAME}`],
        // @ts-ignore
        symbol: token[`${TokenRequestedFieldsConstants.SYMBOL}`],
        // @ts-ignore
        totalSupplyAmount: parseInt(token[`${TokenRequestedFieldsConstants.TOTAL_SUPPLY}`]),
        // @ts-ignore
        totalValueLockedInUSD: parseFloat(token[`${TokenRequestedFieldsConstants.TOTAL_VALUE_LOCKED_USD}`]),
    }));
}

export const TokensMapperService: TokensMapperInterface = Object.freeze({
   mapToCryptoTokenDTOCollection
});
