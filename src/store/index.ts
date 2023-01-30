import {configureStore} from "@reduxjs/toolkit";
import CryptoTokensStoreSlice from "./crypto-tokens-store.slice";


const store = configureStore({
    reducer: {
        cryptoTokens: CryptoTokensStoreSlice
    }
});

export default store;
