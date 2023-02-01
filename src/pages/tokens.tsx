import {TokenSelector} from "../components/token-selector";
import {TokenTable} from "../components/token-table";
import {useEffect, useState} from "react";
import {TokensStore} from "../store/tokens-store";


export function Tokens(): JSX.Element {

    const tokenStore = TokensStore(useState, useEffect);

    tokenStore.getTokens().then(void(0));


    console.log(tokenStore);

    return (<div>
        <TokenSelector tokens={tokenStore.tokens} />
        <TokenTable tokens={tokenStore.tokens}/>
        {JSON.stringify(tokenStore.tokens)}
    </div>);
}
