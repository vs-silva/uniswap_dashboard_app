import {TokenSelector} from "../components/token-selector";
import {TokenTable} from "../components/token-table";
import {useDispatch, useSelector} from "react-redux";
import {getTokens} from "../store/tokens-store-slice";
import {useEffect} from "react";

export function Tokens(): JSX.Element {

    const dispatch = useDispatch();

    // @ts-ignore
    const { tokensRequestPayload, filteredTokens } = useSelector(state => state.tokenStoreSlice);

    useEffect(() => {
        // @ts-ignore
        dispatch(getTokens(tokensRequestPayload))
    },[]);






    return (<div>
        <TokenSelector tokens={filteredTokens} />
        <TokenTable tokens={filteredTokens}/>
    </div>);
}
