import {TokenNameSearchInput} from "./token-name-search-input";
import {TokenAmountSearchInput} from "./token-amount-search-input";
import {TokenOrderBySearchSelector} from "./token-order-by-search-selector";
import {TokenOrderDirectionButton} from "./token-order-direction-button";

export function TokenSearch(): JSX.Element {

    return (
        <div>

            <div className="flex mb-4">
                <div className="w-3/4 h-12 mr-2"><TokenNameSearchInput /></div>
                <div className="w-1/4 h-12"><TokenAmountSearchInput /></div>
            </div>

            <div className="flex mb-12">
                <div className="w-1/3 h-12 mr-2"><TokenOrderBySearchSelector /></div>
                <div className="w-1/3 h-12"><TokenOrderDirectionButton /></div>
            </div>
        </div>
    );
}
