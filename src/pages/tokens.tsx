import {TokenSelector} from "../components/token-selector-component/token-selector";
import {TokenTable} from "../components/token-table";
import {useDispatch, useSelector} from "react-redux";
import TokensStoreSlice, {getTokens} from "../store/tokens-store-slice";
import {useEffect} from "react";
import Eventbus from "../eventbus";
import {EventTypesConstants} from "../eventbus/event-types.constants";
import {TokenSearch} from "../components/token-search-component/token-search";
import {TokenValueGraph} from "../components/token-value-graph";

export function Tokens(): JSX.Element {

    const dispatch = useDispatch();

    // @ts-ignore
    const { tokensRequestPayload, filteredTokens } = useSelector(state => state.tokenStoreSlice);

    const {
        updateFilteredTokens,
        selectSpecificToken,
        restoreFilteredTokens,
        updateTokensSearchRequest,
        createGraph,
        updateGraph
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

    // @ts-ignore
    Eventbus.on(EventTypesConstants.REGISTER_GRAPH_CONTAINER, (payload) => {
        // @ts-ignore
        dispatch(createGraph(payload));
    });

    // @ts-ignore
    Eventbus.on(EventTypesConstants.UPDATE_GRAPH_DATA, (payload) => {
        // @ts-ignore
        dispatch(updateGraph(payload));
    });

    // @ts-ignore
    Eventbus.on(EventTypesConstants.UPDATE_PAGINATION, (payload) => {
        // @ts-ignore

        if(payload === 'next') {
            dispatch(updateTokensSearchRequest({
                skip: (tokensRequestPayload.skip + tokensRequestPayload.amount)
            }));
            return;
        }

        if(payload === 'prev') {
            const prevSkipResult = ((tokensRequestPayload.skip - tokensRequestPayload.amount) > 0 ) ? (tokensRequestPayload.skip - tokensRequestPayload.amount) : 0;
            dispatch(updateTokensSearchRequest({
                skip: prevSkipResult
            }));
            return;
        }

    });

    return (
        <div>

            <section>
                <TokenSearch />
            </section>

            <div className="grid grid-rows-3 grid-flow-col gap-4">

                <aside className="row-span-3 pt-6">
                    <TokenSelector tokens={filteredTokens} />
                </aside>

                <section className="col-span-2">
                    <div className="w-full">
                        <TokenValueGraph tokens={filteredTokens}/>
                    </div>
                </section>

                <section className="row-span-2 col-span-2">
                    <TokenTable tokens={filteredTokens}/>
                </section>

            </div>

    </div>);
}
