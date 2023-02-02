import {TokenNameSearchInput} from "./token-name-search-input";
import {TokenAmountSearchInput} from "./token-amount-search-input";
import {TokenOrderSearchSelector} from "./token-order-search-selector";

export function TokenSearch(): JSX.Element {

    return (
        <div>
            <TokenNameSearchInput />
            <TokenAmountSearchInput />
            <TokenOrderSearchSelector />
        </div>
    );
}
