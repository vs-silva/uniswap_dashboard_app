import {TokenNameSearchInput} from "./token-name-search-input";
import {TokenAmountSearchInput} from "./token-amount-search-input";
import {TokenOrderBySearchSelector} from "./token-order-by-search-selector";

export function TokenSearch(): JSX.Element {

    return (
        <div>
            <TokenNameSearchInput />
            <TokenAmountSearchInput />
            <TokenOrderBySearchSelector />
        </div>
    );
}
