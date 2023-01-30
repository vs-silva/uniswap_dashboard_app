import {createSlice} from "@reduxjs/toolkit";
import type {CryptoTokenDTO} from "../domain/crypto-tokens/business/dtos/crypto-token.dto";
import type {CryptoTokensRequestParameterDTO} from "../domain/crypto-tokens/business/dtos/crypto-tokens-request-parameter.dto";
import {OrderByConstants} from "../domain/crypto-tokens/business/constants/order-by.constants";
import {OrderDirectionConstant} from "../domain/crypto-tokens/business/constants/order-direction.constant";


const tokens: CryptoTokenDTO[] = [];

const tokensRequestPayload: CryptoTokensRequestParameterDTO = {
    name:'',
    orderBy: OrderByConstants.TOTAL_VALUE_LOCKED_USD,
    orderDirection: OrderDirectionConstant.DESCENDING,
    amount: 10,
    skip: 0
};


function updateCryptoTokensRequestPayload(state, action): void {
    console.log(state);
    console.log(action);

}


const CryptoTokensStoreSlice = createSlice({
    name: 'crypto-tokens-store-slice',
    initialState: {
        cryptoTokensDTOs: tokens,
        cryptoTokensRequestPayloadDTO: tokensRequestPayload
    },
    reducers: {
        updateCryptoTokensRequestPayload
    }
}).reducer;

export default CryptoTokensStoreSlice;
