import {describe, expect} from "vitest";
import {TokenAmountSearchInput} from "../token-amount-search-input";
import {fireEvent, render} from "@testing-library/react";

describe('TokenAmountSearchInput component tests', () => {

    it('TokenAmountSearchInput should render properly', () => {

        const {getByTestId, container, unmount} = render(<TokenAmountSearchInput />);
        expect(getByTestId('token-amount-search-input-container')).not.toBeNull();
        expect(container.children.length).toEqual(1);

        unmount();
    });

    it('TokenAmountSearchInput max value should be 25', () => {

        const { getByTestId, unmount } = render(<TokenAmountSearchInput />);
        const input = getByTestId('token-amount-search-input');

        fireEvent.change(input, {target: {value: 30}});
        // @ts-ignore
        expect(parseInt(input.value)).toEqual(25);

        unmount();
    });

    it('TokenAmountSearchInput min value should be 1', () => {

        const { getByTestId, unmount } = render(<TokenAmountSearchInput />);
        const input = getByTestId('token-amount-search-input');

        fireEvent.change(input, {target: {value: '-'}});
        // @ts-ignore
        expect(parseInt(input.value)).toEqual(1);

        unmount();
    });

});
