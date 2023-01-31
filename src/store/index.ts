import {configureStore} from "@reduxjs/toolkit";
import CryptoTokensSlice from "./crypto-tokens.slice";

const store = configureStore({
    reducer: {
        // @ts-ignore
        cryptoTokens: CryptoTokensSlice.reducer
    }
});

export default store;
