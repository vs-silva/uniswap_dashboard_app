import {describe, expect} from "vitest";
import {fireEvent, render, screen} from "@testing-library/react";
import {TokenOrderBySearchSelector} from "../token-order-by-search-selector";

describe('TokenOrderBySearchSelector component tests', () => {

    it('TokenOrderBySearchSelector should render properly', () => {

        const {getByTestId, container, unmount} = render(<TokenOrderBySearchSelector />);
        expect(getByTestId('tokens-order-by-search-select-container')).not.toBeNull();
        expect(getByTestId('tokens-order-by-search-select')).not.toBeNull();
        expect(container.children.length).toEqual(1);

        unmount();
    });

    it('TokenOrderBySearchSelector', () => {
        const {getByTestId, unmount} = render(<TokenOrderBySearchSelector />);
        const select = getByTestId('tokens-order-by-search-select');
        // @ts-ignore
        expect(select.value).toEqual('totalValueLockedUSD');

        fireEvent.change(select, {target: {value: 'symbol'}});
        // @ts-ignore
        expect(select.value).toEqual('symbol');

        unmount();
    });

});
