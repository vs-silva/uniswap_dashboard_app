import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CryptoTokenDTO} from "../../domain/crypto-tokens/business/dtos/crypto-token.dto";
import {CryptoTokensRequestParameterDTO} from "../../domain/crypto-tokens/business/dtos/crypto-tokens-request-parameter.dto";
import CryptoTokens from "../../domain/crypto-tokens";
import {OrderByConstants} from "../../domain/crypto-tokens/business/constants/order-by.constants";
import {OrderDirectionConstant} from "../../domain/crypto-tokens/business/constants/order-direction.constant";
import {TokensOptionalRequestPayloadDTO} from "./dtos/tokens-optional-request-payload.dto";


const initialState: object = {
    tokensRequestPayload: <CryptoTokensRequestParameterDTO> {
        name:'',
        orderBy: OrderByConstants.TOTAL_VALUE_LOCKED_USD,
        orderDirection: OrderDirectionConstant.DESCENDING,
        amount: 10,
        skip: 0
    },
    tokens: <CryptoTokenDTO[]>[],
    filteredTokens: <CryptoTokenDTO[]>[]
};

export const getTokens = createAsyncThunk(
    'get-tokens',
    async (requestPayload: CryptoTokensRequestParameterDTO) => {
        return await CryptoTokens.getCryptoTokens(requestPayload);
});


// @ts-ignore
function builderProcessor(builder) {
    // @ts-ignore
    builder.addCase(getTokens.fulfilled, (state, action) => {
        state.tokens = action.payload;
        state.filteredTokens = action.payload;
    });
}

// @ts-ignore
function updateFilteredTokens(state, action: PayloadAction<TokensOptionalRequestPayloadDTO>) {
    // @ts-ignore
    state.filteredTokens = state.tokens.filter(token => token.name.toLowerCase().includes(action.payload.name.toLowerCase()));
}


export default createSlice({
    name: 'tokens-store-slice',
    initialState,
    reducers: {
        updateFilteredTokens
    },
    extraReducers: builderProcessor
});
