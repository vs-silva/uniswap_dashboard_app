import {describe, expect} from "vitest";
import {act, render} from "@testing-library/react";
import {Tokens} from "../tokens";
import { store } from '../../store';
import { Provider } from 'react-redux';
import Eventbus from "../../eventbus";
import {EventTypesConstants} from "../../eventbus/event-types.constants";
import {TokensOptionalRequestPayloadDTO} from "../../store/tokens-store-slice/dtos/tokens-optional-request-payload.dto";
import {faker} from "@faker-js/faker";

describe('Tokens page tests', () => {

    it('Tokens page should render properly', () => {
        const {getByTestId, unmount} = render(<Provider store={store}><Tokens /></Provider>);
        const pageContainer = getByTestId('tokens-page-container');
        const pageSearchContainer = getByTestId('tokens-page-search-container');
        const pageFilterContainer = getByTestId('tokens-page-filter-container');
        const pageGraphContainer = getByTestId('tokens-page-graph-container');
        const pageTableContainer = getByTestId('tokens-page-graph-container');

        expect(pageContainer).not.toBeNull();
        expect(pageSearchContainer).not.toBeNull();
        expect(pageFilterContainer).not.toBeNull();
        expect(pageGraphContainer).not.toBeNull();
        expect(pageTableContainer).not.toBeNull();

        unmount();
    });

    it('Tokens page should contain handler for Tokens filter event', () => {

        const {unmount} = render(<Provider store={store}><Tokens /></Provider>);

        const requestPayload: TokensOptionalRequestPayloadDTO = {
            name: faker.science.chemicalElement().name
        };

        act(() => {
            Eventbus.emit(EventTypesConstants.FILTER_TOKENS_DATA, requestPayload);
        });

        unmount();
    });

    it('Tokens page should contain handler for select specific Token selection event', () => {

        const {unmount} = render(<Provider store={store}><Tokens /></Provider>);

        act(() => {
            Eventbus.emit(EventTypesConstants.SELECT_TOKEN_DATA, faker.science.chemicalElement().name);
        });

        unmount();
    });

    it('Tokens page should contain handler for unselect specific Token selection event', () => {

        const {unmount} = render(<Provider store={store}><Tokens /></Provider>);

        act(() => {
            Eventbus.emit(EventTypesConstants.UNSELECT_TOKEN_DATA);
        });

        unmount();
    });

});
