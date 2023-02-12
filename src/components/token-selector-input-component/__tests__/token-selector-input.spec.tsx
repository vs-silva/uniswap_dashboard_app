import {describe, expect} from "vitest";
import {fireEvent, render} from "@testing-library/react";
import {faker} from "@faker-js/faker";
import {TokenSelectorInput} from "../token-selector-input";

describe('TokenSelectorInput component tests', () => {

    it('TokenSelectorInput should render properly', () => {
        const {getByTestId, container, unmount} = render(<TokenSelectorInput />);
        expect(getByTestId('token-selector-input-container')).not.toBeNull();
        expect(getByTestId('token-selector-input')).not.toBeNull();
        expect(container.children.length).toEqual(1);

        unmount();
    });

    it('TokenSelectorInput should handle input changes', () => {
        const {getByTestId, unmount} = render(<TokenSelectorInput />);
        const input = getByTestId('token-selector-input');
        const payload = faker.random.word();
        fireEvent.change(input, {target: {value: payload}});
        // @ts-ignore
        expect(input.value).toEqual(payload);

        unmount();
    });

});
