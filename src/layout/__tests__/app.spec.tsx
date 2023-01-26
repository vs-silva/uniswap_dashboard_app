import {render, within} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../app";
import React from "react";
import {expect} from "vitest";

describe('App Component Tests', () => {

    it('App layout should contain Navigation and Router', () => {

        const { getByTestId } = render(<MemoryRouter><App /></MemoryRouter>);
        const app = getByTestId('app');

        expect(within(app).queryByTestId('nav')).not.toBeNull();
    });

});
