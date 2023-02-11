import {describe, expect} from "vitest";
import {fireEvent, getByText, render} from "@testing-library/react";
import {TokenOrderDirectionButton} from "../token-order-direction-button";
import {OrderDirectionConstant} from "../../../domain/crypto-tokens/business/constants/order-direction.constant";

describe('TokenOrderDirectionButton component tests', () => {

    it('TokenOrderDirectionButton should render properly', () => {
        const {getByTestId, container, unmount} = render(<TokenOrderDirectionButton />);
        expect(getByTestId('tokens-order-direction-button-container')).not.toBeNull();
        const button = getByTestId('tokens-order-direction-button');
        expect(button).not.toBeNull();
        expect(button.textContent).toEqual(OrderDirectionConstant.DESCENDING);
        expect(container.children.length).toEqual(1);

        unmount();
    });

    it('TokenOrderDirectionButton should handle click event', () => {
        const {getByTestId, unmount} = render(<TokenOrderDirectionButton />);
        expect(getByTestId('tokens-order-direction-button-container')).not.toBeNull();
        const button = getByTestId('tokens-order-direction-button');
        expect(button).not.toBeNull();
        expect(button.textContent).toEqual(OrderDirectionConstant.DESCENDING);
        fireEvent.click(button);
        expect(button.textContent).toEqual(OrderDirectionConstant.ASCENDING);

        unmount();
    });

});
