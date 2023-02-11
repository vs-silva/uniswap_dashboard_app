import {TokenPaginationSearchButtonsUtils} from "./token-pagination-search-buttons.utils";

export function TokenPaginationSearchButtons(): JSX.Element {

    return (<div className="flex" data-testid="token-pagination-search-buttons-container">
        <button data-testid="token-pagination-search-button-prev"
            id="paginationPrevBtn"
        className="bg-white hover:bg-gray-100 text-gray-700 font-normal text-base px-4 border border-gray-300 rounded w-full mr-2"
                onClick={TokenPaginationSearchButtonsUtils.handlePrevButtonClick}
        >previous tokens</button>

        <button data-testid="token-pagination-search-button-next"
            id="paginationNextBtn"
        className="bg-white hover:bg-gray-100 text-gray-700 font-normal text-base px-4 border border-gray-300 rounded w-full"
                onClick={TokenPaginationSearchButtonsUtils.handleNextButtonClick}
        >next tokens</button>
    </div>);
}
