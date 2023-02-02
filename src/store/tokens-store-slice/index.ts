import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CryptoTokenDTO} from "../../domain/crypto-tokens/business/dtos/crypto-token.dto";
import {CryptoTokensRequestParameterDTO} from "../../domain/crypto-tokens/business/dtos/crypto-tokens-request-parameter.dto";
import CryptoTokens from "../../domain/crypto-tokens";
import {OrderByConstants} from "../../domain/crypto-tokens/business/constants/order-by.constants";
import {OrderDirectionConstant} from "../../domain/crypto-tokens/business/constants/order-direction.constant";
import {TokensOptionalRequestPayloadDTO} from "./dtos/tokens-optional-request-payload.dto";
import Graph from "../../domain/graph";
import {GraphTypeConstants} from "../../domain/graph/business/constants/graph-type.constants";


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
function updateFilteredTokens(state, action: PayloadAction<TokensOptionalRequestPayloadDTO>):void {
    // @ts-ignore
    state.filteredTokens = state.tokens.filter((token:CryptoTokenDTO) => token.name.toLowerCase().includes(action.payload.name.toLowerCase()));
}

// @ts-ignore
function selectSpecificToken(state, action:  PayloadAction<string>):void {
    state.filteredTokens = state.tokens.filter((token:CryptoTokenDTO) => token.id === action.payload);
}

// @ts-ignore
function restoreFilteredTokens(state):void {
    state.filteredTokens = state.tokens;
}

// @ts-ignore
function updateTokensSearchRequest(state, action: PayloadAction<TokensOptionalRequestPayloadDTO>):void {
    const target = {};
    state.tokensRequestPayload = Object.assign(target, state.tokensRequestPayload, action.payload);
}


export default createSlice({
    name: 'tokens-store-slice',
    initialState,
    reducers: {
        updateFilteredTokens,
        selectSpecificToken,
        restoreFilteredTokens,
        updateTokensSearchRequest
    },
    extraReducers: builderProcessor
});
