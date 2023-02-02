import {TokenNameSearchInput} from "./token-name-search-input";
import {TokenAmountSearchInput} from "./token-amount-search-input";

export function TokenSearch(): JSX.Element {

    return (
        <div>
            <TokenNameSearchInput />
            <TokenAmountSearchInput />
        </div>
    );
}
