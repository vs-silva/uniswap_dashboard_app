import {describe, expect} from "vitest";
import {fireEvent, render} from "@testing-library/react";
import {TokenSelector} from "../token-selector";
import {CryptoTokenDTO} from "../../../domain/crypto-tokens/business/dtos/crypto-token.dto";
import {faker} from "@faker-js/faker";

describe('TokenSelector component tests', () => {

    it('TokenSelector should render properly but should not contain list item component', () => {

        const fakeTokens: CryptoTokenDTO[] = [];

        const {getByTestId, container, unmount} = render(<TokenSelector tokens={fakeTokens} />);
        const tokenSelectorContainer = getByTestId('token-selector-container');
        expect(tokenSelectorContainer).not.toBeNull();
        expect(container.children.length).toEqual(1);
        expect(tokenSelectorContainer.children.length).toEqual(1);

        unmount();
    });

    it('TokenSelector should render properly and should contain list item component', () => {

        const fakeTokens: CryptoTokenDTO[] = [{
            id: faker.datatype.uuid(),
            name: faker.random.word(),
            symbol: faker.science.chemicalElement().symbol,
            totalSupplyAmount: parseInt(faker.random.numeric(4)),
            totalValueLockedInUSD: parseInt(faker.random.numeric(5))
        }];

        const {getByTestId, unmount} = render(<TokenSelector tokens={fakeTokens} />);
        const tokenSelectorContainer = getByTestId('token-selector-container');
        expect(tokenSelectorContainer).not.toBeNull();
        expect(tokenSelectorContainer.children.length).toEqual(2);

        unmount();
    });

});
