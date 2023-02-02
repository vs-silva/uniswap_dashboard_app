import {TokenSelector} from "../components/token-selector";
import {TokenTable} from "../components/token-table";
import {useDispatch, useSelector} from "react-redux";
import TokensStoreSlice, {getTokens} from "../store/tokens-store-slice";
import {useEffect} from "react";
import Eventbus from "../eventbus";
import {EventTypesConstants} from "../eventbus/event-types.constants";
import {TokenSearch} from "../components/token-search";

export function Tokens(): JSX.Element {

    const dispatch = useDispatch();

    // @ts-ignore
    const { tokensRequestPayload, filteredTokens } = useSelector(state => state.tokenStoreSlice);

    const {
        updateFilteredTokens,
        selectSpecificToken,
        restoreFilteredTokens,
        updateTokensSearchRequest
    } = TokensStoreSlice.actions;

    useEffect(() => {
        // @ts-ignore
        dispatch(getTokens(tokensRequestPayload))
    },[tokensRequestPayload]);

    // @ts-ignore
    Eventbus.on(EventTypesConstants.FILTER_TOKENS_DATA, (payload) => {
        // @ts-ignore
        dispatch(updateFilteredTokens(payload));
    });

    // @ts-ignore
    Eventbus.on(EventTypesConstants.SELECT_TOKEN_DATA, (payload: string) => {
        dispatch(selectSpecificToken(payload));
    });

    // @ts-ignore
    Eventbus.on(EventTypesConstants.UNSELECT_TOKEN_DATA, () => {
        dispatch(restoreFilteredTokens());
    });

    // @ts-ignore
    Eventbus.on(EventTypesConstants.UPDATE_TOKEN_SEARCH_REQUEST, (payload) => {
        // @ts-ignore
        dispatch(updateTokensSearchRequest(payload));
    });

    return (
        <div>

            <section>
                <TokenSearch />
            </section>

            <div className="grid grid-rows-3 grid-flow-col gap-4">

                <aside className="row-span-3">
                    <TokenSelector tokens={filteredTokens} />
                </aside>

                <section>
                    <div className="col-span-2">2</div>
                </section>

                <section className="row-span-2 col-span-2">
                    <TokenTable tokens={filteredTokens}/>
                </section>

            </div>

    </div>);
}
