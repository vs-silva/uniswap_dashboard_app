import {describe, it, vi, expect} from "vitest";
import React from "react";
import {Loader} from "../loader";
import {act, render, RenderOptions} from "@testing-library/react";
import {unmountComponentAtNode} from "react-dom";
import Eventbus from "../../eventbus";
import {EventTypesConstants} from "../../eventbus/event-types.constants";

describe('Loader component tests', () => {

    let container: Element | DocumentFragment | RenderOptions<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement> | null = null;
    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        // cleanup on exiting

        // @ts-ignore
        unmountComponentAtNode(container);
        // @ts-ignore
        container.remove();
        container = null;
    });

    it('loader should be displayed after SHOW_LOADER event has been emitted', () => {

        const { unmount, getByTestId} = render(<Loader />, {container});

        act(() => Eventbus.emit(EventTypesConstants.SHOW_LOADER));
        expect(getByTestId('loader')).not.toBeNull();
        unmount();
    });



    it('loader should be hided after HIDE_LOADER event has been emitted', () => {

        const { unmount, getByTestId} = render(<Loader />, {container});

        act(() => Eventbus.emit(EventTypesConstants.SHOW_LOADER));
        expect(getByTestId('loader')).not.toBeNull();

        act(() => Eventbus.emit(EventTypesConstants.HIDE_LOADER));
        expect(container).toBeEmptyDOMElement();

        unmount();
    });


});
