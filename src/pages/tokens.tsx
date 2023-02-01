import {TokenSelector} from "../components/token-selector";
import {TokenTable} from "../components/token-table";
import {useDispatch, useSelector} from "react-redux";
import TokensStoreSlice, {getTokens} from "../store/tokens-store-slice";
import {useEffect} from "react";
import Eventbus from "../eventbus";
import {EventTypesConstants} from "../eventbus/event-types.constants";
import type {TokensOptionalRequestPayloadDTO} from "../store/tokens-store-slice/dtos/tokens-optional-request-payload.dto";

export function Tokens(): JSX.Element {

    const dispatch = useDispatch();

    // @ts-ignore
    const { tokensRequestPayload, filteredTokens } = useSelector(state => state.tokenStoreSlice);
    const { updateFilteredTokens } = TokensStoreSlice.actions;

    useEffect(() => {
        // @ts-ignore
        dispatch(getTokens(tokensRequestPayload))
    },[]);

    // @ts-ignore
    Eventbus.on(EventTypesConstants.FILTER_TOKENS_DATA, (payload: TokensOptionalRequestPayloadDTO) => {
        dispatch(updateFilteredTokens(payload));
    });






    return (<div>
        <TokenSelector tokens={filteredTokens} />
        <TokenTable tokens={filteredTokens}/>
        {JSON.stringify(filteredTokens[0])}
    </div>);
}
