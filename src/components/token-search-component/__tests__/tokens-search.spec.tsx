import {describe, expect} from "vitest";
import {render} from "@testing-library/react";
import {TokenSearch} from "../token-search";

describe('TokenSearch component tests', () => {

    it('TokenSearch should render properly', () => {
        const {getByTestId, unmount} = render(<TokenSearch />);

        const searchContainer = getByTestId('token-search-container');
        expect(searchContainer).not.toBeNull();
        expect(searchContainer.children.length).toEqual(2);

        const filtersContainer = getByTestId('token-search-filters-container');
        expect(filtersContainer).not.toBeNull();
        expect(filtersContainer.children.length).toEqual(4);

        const paginationContainer = getByTestId('token-search-pagination-container');
        expect(paginationContainer).not.toBeNull();
        expect(paginationContainer.children.length).toEqual(1);

        unmount();
    });
});
