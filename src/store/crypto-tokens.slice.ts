import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import type {CryptoTokenDTO} from "../domain/crypto-tokens/business/dtos/crypto-token.dto";
import type {CryptoTokensRequestParameterDTO} from "../domain/crypto-tokens/business/dtos/crypto-tokens-request-parameter.dto";
import {OrderByConstants} from "../domain/crypto-tokens/business/constants/order-by.constants";
import {OrderDirectionConstant} from "../domain/crypto-tokens/business/constants/order-direction.constant";
import CryptoTokens from "../domain/crypto-tokens";
import Eventbus from "../eventbus";
import {EventTypesConstants} from "../eventbus/event-types.constants";


export const getTokens = createAsyncThunk(
    'get-crypto-tokens',
    async (requestPayload: CryptoTokensRequestParameterDTO) => {
        return await CryptoTokens.getCryptoTokens(requestPayload)
    }
);


export const updateTokensRequestPayload = createAsyncThunk(
    'update-tokens-request-payload',
    async (fieldToUpdate) => fieldToUpdate
);


export const cryptoTokensSlice = createSlice({
    name: 'crypto-tokens-store-slice',
    initialState: {
        tokens: <CryptoTokenDTO[]>[],
        tokensRequestPayload: <CryptoTokensRequestParameterDTO> {
            name:'',
            orderBy: OrderByConstants.TOTAL_VALUE_LOCKED_USD,
            orderDirection: OrderDirectionConstant.DESCENDING,
            amount: 10,
            skip: 0
        }
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTokens.pending, (state, action) => {
                Eventbus.emit(EventTypesConstants.SHOW_LOADER);
            })
            .addCase(getTokens.fulfilled, (state, action) => {
                Eventbus.emit(EventTypesConstants.HIDE_LOADER);
                state.tokens = action.payload;
            })
            .addCase(getTokens.rejected, (state, action) => {
                Eventbus.emit(EventTypesConstants.HIDE_LOADER);
                // if error emit error so a not data or error notification can be displayed
            })
            .addCase(updateTokensRequestPayload.fulfilled, (state, action) => {

                // @ts-ignore
                if(!action.payload) {
                    return;
                }

                // @ts-ignore
                const keys: string[] = Object.keys(action.payload);

                for (const key of keys) {

                    if(!state.tokensRequestPayload.hasOwnProperty(key)) {
                        return;
                    }

                    // @ts-ignore
                    state.tokensRequestPayload[key] = action.payload[key];
                }

            })
            .addCase(updateTokensRequestPayload.rejected, (state, action) => {
                console.log('Error updating the value');
                //Emit event for this error
            })
    }
});
