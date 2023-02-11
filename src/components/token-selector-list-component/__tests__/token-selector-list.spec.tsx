import {describe, expect} from "vitest";
import {fireEvent, render} from "@testing-library/react";
import {faker} from "@faker-js/faker";
import {CryptoTokenDTO} from "../../../domain/crypto-tokens/business/dtos/crypto-token.dto";
import {TokenSelectorList} from "../token-selector-list";

describe('TokenSelectorList  component tests', () => {

    it('TokenSelectorList should render properly', () => {

        const fakeTokens: CryptoTokenDTO[] = [];
        const {getByTestId, unmount} = render(<TokenSelectorList tokens={fakeTokens}/>);

        const listContainer = getByTestId('token-selector-list-container');
        expect(listContainer).not.toBeNull();
        expect(listContainer.children.length).toEqual(1);

        const list = getByTestId('token-selector-list');
        expect(list).not.toBeNull();
        expect(list.children.length).toEqual(0);

        unmount();
    });

    it('TokenSelectorList should render list items', () => {

        const fakeTokens: CryptoTokenDTO[] = [
            {
                id: faker.datatype.uuid(),
                name: faker.science.chemicalElement().name,
                symbol: faker.science.chemicalElement().symbol,
                totalSupplyAmount: parseInt(faker.random.numeric(4)),
                totalValueLockedInUSD: parseInt(faker.random.numeric(5))
            }
        ];
        const {getByTestId, unmount} = render(<TokenSelectorList tokens={fakeTokens}/>);

        const listContainer = getByTestId('token-selector-list-container');
        expect(listContainer).not.toBeNull();
        expect(listContainer.children.length).toEqual(1);

        const list = getByTestId('token-selector-list');
        expect(list).not.toBeNull();
        expect(list.children.length).toEqual(1);

        const listItem = getByTestId('token-selector-list-item-0');
        expect(listItem).not.toBeNull();

        unmount();
    });

    it('TokenSelectorList Items should handle click event', () => {

        const fakeTokens: CryptoTokenDTO[] = [
            {
                id: faker.datatype.uuid(),
                name: faker.science.chemicalElement().name,
                symbol: faker.science.chemicalElement().symbol,
                totalSupplyAmount: parseInt(faker.random.numeric(4)),
                totalValueLockedInUSD: parseInt(faker.random.numeric(5))
            },
            {
                id: faker.datatype.uuid(),
                name: faker.science.chemicalElement().name,
                symbol: faker.science.chemicalElement().symbol,
                totalSupplyAmount: parseInt(faker.random.numeric(4)),
                totalValueLockedInUSD: parseInt(faker.random.numeric(3))
            }
        ];
        const {getByTestId, unmount} = render(<TokenSelectorList tokens={fakeTokens}/>);

        const list = getByTestId('token-selector-list');
        expect(list).not.toBeNull();
        expect(list.children.length).toEqual(2);

        const firstListItem = getByTestId('token-selector-list-item-0');
        fireEvent.click(firstListItem); //for select
        fireEvent.click(firstListItem); //for unselect

        unmount();
    });


});
