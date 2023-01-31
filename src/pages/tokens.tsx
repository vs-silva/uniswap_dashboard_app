import { useDispatch, useSelector } from "react-redux";
import {getTokens} from '../store/crypto-tokens.slice';
import {useEffect} from "react";

export function Tokens(): JSX.Element {

    const dispatch = useDispatch();

    // @ts-ignore
    const {tokens, tokensRequestPayload} = useSelector(state => state.cryptoTokens);

    useEffect(() => {

        console.log(tokensRequestPayload);
        // @ts-ignore
        dispatch(getTokens())

    }, []);

    return (<div>
        <h1>Tokens page here</h1>
        {JSON.stringify(tokens)}
        <br/>
        {JSON.stringify(tokensRequestPayload)}
    </div>);
}
