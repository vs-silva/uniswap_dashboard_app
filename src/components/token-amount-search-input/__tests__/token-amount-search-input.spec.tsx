import {describe, expect, vi} from "vitest";
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

        const { getByTestId } = render(<TokenAmountSearchInput />);
        const input = getByTestId('token-amount-search-input');

        const payload: number = 30;
        const expected: number = 25;

        fireEvent.change(input, {target: {value: payload}});
        // @ts-ignore
        expect(parseInt(input.value)).toEqual(expected);
    });

    it('TokenAmountSearchInput min value should be 1', () => {

        const { getByTestId } = render(<TokenAmountSearchInput />);
        const input = getByTestId('token-amount-search-input');

        const payload: string = '-';
        const expected: number = 1;

        fireEvent.change(input, {target: {value: payload}});
        // @ts-ignore
        expect(parseInt(input.value)).toEqual(expected);
    });

});
