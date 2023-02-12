import {TokenNameSearchInput} from "../token-name-search-input-component/token-name-search-input";
import {TokenAmountSearchInput} from "../token-amount-search-input-component/token-amount-search-input";
import {TokenOrderBySearchSelector} from "../token-order-by-search-selector-component/token-order-by-search-selector";
import {TokenOrderDirectionButton} from "../tokens-order-direction-button-component/token-order-direction-button";
import {TokenPaginationSearchButtons} from "../token-pagination-search-buttons-component/token-pagination-search-buttons";

export function TokenSearch(): JSX.Element {

    return (
        <div className="px-4 py-6 shadow-lg rounded-sm border border-gray-200 mb-10" data-testid="token-search-container">

            <div className="flex" data-testid="token-search-filters-container">
                <div className="w-1/2 h-12 mr-2"><TokenNameSearchInput /></div>
                <div className="w-1/6 h-12 mr-2"><TokenAmountSearchInput /></div>
                <div className="w-1/6 h-12 mr-2"><TokenOrderBySearchSelector /></div>
                <div className="w-1/6 h-12"><TokenOrderDirectionButton /></div>
            </div>

            <div className="mt-4 pt-6" data-testid="token-search-pagination-container">
                <TokenPaginationSearchButtons />
            </div>

        </div>
    );
}
