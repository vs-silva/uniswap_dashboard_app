import {describe, it, expect} from "vitest";
import React from "react";
import {Loader} from "../loader";
import {act, render, RenderOptions} from "@testing-library/react";
import Eventbus from "../../eventbus";
import {EventTypesConstants} from "../../eventbus/event-types.constants";

describe('Loader component tests', () => {

    it('loader should be displayed after SHOW_LOADER event has been emitted', () => {

        const { unmount, getByTestId} = render(<Loader />);

        act(() => Eventbus.emit(EventTypesConstants.SHOW_LOADER));
        expect(getByTestId('loader')).not.toBeNull();
        unmount();
    });

    it('loader should be hided after HIDE_LOADER event has been emitted', () => {

        const { unmount, getByTestId, container} = render(<Loader />);

        act(() => Eventbus.emit(EventTypesConstants.SHOW_LOADER));
        expect(getByTestId('loader')).not.toBeNull();

        act(() => Eventbus.emit(EventTypesConstants.HIDE_LOADER));
        expect(container.children.length).toEqual(0);
        unmount();
    });


});
