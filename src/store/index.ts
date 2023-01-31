import {configureStore} from "@reduxjs/toolkit";
import {cryptoTokensSlice} from "./crypto-tokens.slice";

const store = configureStore({
    reducer: {
        // @ts-ignore
        cryptoTokens: cryptoTokensSlice.reducer
    }
});

export default store;
