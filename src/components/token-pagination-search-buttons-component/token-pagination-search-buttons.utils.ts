import {MouseEvent} from "react";
import Eventbus from "../../eventbus";
import {EventTypesConstants} from "../../eventbus/event-types.constants";

function handlePrevButtonClick(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    Eventbus.emit(EventTypesConstants.UPDATE_PAGINATION, 'prev');
}

function handleNextButtonClick(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    Eventbus.emit(EventTypesConstants.UPDATE_PAGINATION, 'next');
}

export const TokenPaginationSearchButtonsUtils = {
    handlePrevButtonClick,
    handleNextButtonClick
};
