import {describe, expect} from "vitest";
import {fireEvent, render} from "@testing-library/react";
import {TokenNameSearchInput} from "../token-name-search-input";
import {faker} from "@faker-js/faker";

describe('TokenNameSearchInput component tests', () => {

    it('TokenNameSearchInput should render properly', () => {
        const {getByTestId, container, unmount} = render(<TokenNameSearchInput />);
        expect(getByTestId('tokens-name-search-input-container')).not.toBeNull();
        expect(getByTestId('tokens-name-search-input')).not.toBeNull();
        expect(container.children.length).toEqual(1);

        unmount();
    });

    it('TokenNameSearchInput should handle input changes', () => {
        const {getByTestId, unmount} = render(<TokenNameSearchInput />);
        const input = getByTestId('tokens-name-search-input');
        const payload = faker.random.word();
        fireEvent.change(input, {target: {value: payload}});
        // @ts-ignore
        expect(input.value).toEqual(payload);

        unmount();
    });

});
