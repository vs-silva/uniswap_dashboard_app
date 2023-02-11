import {describe, expect} from "vitest";
import {fireEvent, render} from "@testing-library/react";
import {faker} from "@faker-js/faker";
import {CryptoTokenDTO} from "../../../domain/crypto-tokens/business/dtos/crypto-token.dto";
import {TokenTable} from "../token-table";

describe('TokenTable component tests', () => {

    it('TokenTable should not render html if an empty list item is provided', () => {

        const fakeTokens: CryptoTokenDTO[] = [];
        const {container, unmount} = render(<TokenTable tokens={fakeTokens}/>);
        expect(container.children.length).toEqual(0);

        unmount();
    });

    it('TokenTable should render html if list item is provided', () => {

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

        const {getByTestId,debug, unmount} = render(<TokenTable tokens={fakeTokens}/>);
        const tableContainer = getByTestId('token-table-container');
        const tableHead = getByTestId('token-table-head');
        const tableBody = getByTestId('token-table-body');

        expect(tableContainer).not.toBeNull();
        expect(tableContainer.children.length).toEqual(2);

        expect(tableHead).not.toBeNull();
        expect(tableBody).not.toBeNull();
        expect(tableBody.children.length).toEqual(2);

        expect(getByTestId('token-table-body-row-0')).not.toBeNull();
        expect(getByTestId('token-table-body-row-1')).not.toBeNull();


        unmount();
    });

});
