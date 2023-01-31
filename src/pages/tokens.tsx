import {useDispatch, useSelector} from "react-redux";
import {getTokens, updateTokensRequestPayload} from '../store/crypto-tokens.slice';
import {useEffect} from "react";
import store from "../store";
import {TokenSelector} from "../components/token-selector";
import {TokenTable} from "../components/token-table";

export function Tokens(): JSX.Element {

    const dispatch = useDispatch();

    // @ts-ignore
    const {tokens, tokensRequestPayload} = useSelector(state => state.cryptoTokens);

    useEffect(() => {
        // @ts-ignore
        dispatch(updateTokensRequestPayload())
            .then(() => {
                const {tokensRequestPayload} = store.getState().cryptoTokens;
                // @ts-ignore
                dispatch(getTokens(tokensRequestPayload))
            });

    }, []);

    return (<div>
        <TokenSelector/>
        <TokenTable tokens={tokens}/>
    </div>);
}
