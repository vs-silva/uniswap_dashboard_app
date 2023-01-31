import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import type {CryptoTokenDTO} from "../domain/crypto-tokens/business/dtos/crypto-token.dto";
import type {CryptoTokensRequestParameterDTO} from "../domain/crypto-tokens/business/dtos/crypto-tokens-request-parameter.dto";
import {OrderByConstants} from "../domain/crypto-tokens/business/constants/order-by.constants";
import {OrderDirectionConstant} from "../domain/crypto-tokens/business/constants/order-direction.constant";
import CryptoTokens from "../domain/crypto-tokens";
import Eventbus from "../eventbus";
import {EventTypesConstants} from "../eventbus/event-types.constants";


const tokens: CryptoTokenDTO[] = [];
const tokensRequestPayload: CryptoTokensRequestParameterDTO = {
    name:'',
    orderBy: OrderByConstants.TOTAL_VALUE_LOCKED_USD,
    orderDirection: OrderDirectionConstant.DESCENDING,
    amount: 10,
    skip: 0
};

export const getTokens = createAsyncThunk('get-crypto-tokens', async () => {

    const req: CryptoTokensRequestParameterDTO = {
        name:'',
        orderBy: OrderByConstants.TOTAL_VALUE_LOCKED_USD,
        orderDirection: OrderDirectionConstant.DESCENDING,
        amount: 10,
        skip: 0
    };

    console.log(tokensRequestPayload);
    console.log(tokens);

    return await CryptoTokens.getCryptoTokens(req);
});


const CryptoTokensSlice = createSlice({
    name: 'crypto-tokens-store-slice',
    initialState: {
        tokens,
        tokensRequestPayload
    },
    reducers: {
        updateTokensRequestPayload: (state, action) => {
            console.log(state);
            console.log(action);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTokens.fulfilled, (state, action) => {
                Eventbus.emit(EventTypesConstants.HIDE_LOADER);
                state.tokens = action.payload;
            })
            .addCase(getTokens.pending, (state, action) => {
                Eventbus.emit(EventTypesConstants.SHOW_LOADER);
            })
            .addCase(getTokens.rejected, (state, action) => {
                Eventbus.emit(EventTypesConstants.HIDE_LOADER);
                // if error emit error so a not data or error notification can be displayed
            })
    }
});

export default CryptoTokensSlice;
