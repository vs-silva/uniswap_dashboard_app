import {describe, expect, vi} from "vitest";
import {fireEvent, render} from "@testing-library/react";
import {TokenPaginationSearchButtons} from "../token-pagination-search-buttons";
import {TokenPaginationSearchButtonsUtils} from "../token-pagination-search-buttons.utils";

describe('TokenPaginationSearchButtons component tests', () => {

    it('TokenPaginationSearchButtons should render properly', () => {
        const {getByTestId, container, unmount} = render(<TokenPaginationSearchButtons />);
        expect(getByTestId('token-pagination-search-buttons-container')).not.toBeNull();
        expect(getByTestId('token-pagination-search-button-prev')).not.toBeNull();
        expect(getByTestId('token-pagination-search-button-next')).not.toBeNull();

        expect(container.children.length).toEqual(1);
        expect(container.children[0].children.length).toEqual(2);

        unmount();
    });

    it('TokenPaginationSearchButtons prev button should handle click event', () => {
        const {getByTestId, unmount} = render(<TokenPaginationSearchButtons />);
        const prevButton = getByTestId('token-pagination-search-button-prev');
        expect(prevButton).not.toBeNull();
        fireEvent.click(prevButton);

        unmount();
    });

    it('TokenPaginationSearchButtons next button should handle click event', () => {
        const {getByTestId, unmount} = render(<TokenPaginationSearchButtons />);
        const nextButton = getByTestId('token-pagination-search-button-next');
        expect(nextButton).not.toBeNull();
        fireEvent.click(nextButton);

        unmount();
    });

});
