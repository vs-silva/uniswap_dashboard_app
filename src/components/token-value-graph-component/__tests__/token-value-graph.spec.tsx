import {describe, expect} from "vitest";
import {render} from "@testing-library/react";
import {CryptoTokenDTO} from "../../../domain/crypto-tokens/business/dtos/crypto-token.dto";
import {faker} from "@faker-js/faker";
import {TokenValueGraph} from "../token-value-graph";

describe('TokenValueGraph component tests', () => {

    it('TokenValueGraph should render properly', () => {

        const fakeTokens: CryptoTokenDTO[] = [
            {
                id: faker.datatype.uuid(),
                name: faker.science.chemicalElement().name,
                symbol: faker.science.chemicalElement().symbol,
                totalSupplyAmount: parseInt(faker.random.numeric(4)),
                totalValueLockedInUSD: parseInt(faker.random.numeric(5))
            }
        ];

        const {getByTestId, unmount} = render(<TokenValueGraph tokens={fakeTokens} />);
        const graphContainer = getByTestId('token-value-graph-container');
        const graphCanvas = getByTestId('token-value-graph-canvas');

        expect(graphContainer).not.toBeNull();
        expect(graphContainer.children.length).toEqual(1);
        expect(graphCanvas).not.toBeNull();

        unmount();
    });

});
