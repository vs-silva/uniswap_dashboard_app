import {describe, expect} from "vitest";
import {act, render} from "@testing-library/react";
import { store } from '../../store';
import {Provider} from "react-redux";
import {About} from "../about";

describe('About page tests', () => {

    it('About page should render properly', () => {
        const {getByTestId, unmount} = render(<Provider store={store}><About /></Provider>)

        const pageContainer = getByTestId('about-page-container');
        expect(pageContainer).not.toBeNull();

        unmount();
    });

});
