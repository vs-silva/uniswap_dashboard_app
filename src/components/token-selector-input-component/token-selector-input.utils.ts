import {ChangeEvent} from "react";
import Eventbus from "../../eventbus";
import {EventTypesConstants} from "../../eventbus/event-types.constants";
import type {TokensOptionalRequestPayloadDTO} from "../../store/tokens-store-slice/dtos/tokens-optional-request-payload.dto";

function handleInputChange(event: ChangeEvent<HTMLInputElement>):void {
    event.preventDefault();

    Eventbus.emit(EventTypesConstants.FILTER_TOKENS_DATA, <TokensOptionalRequestPayloadDTO>{
        name: event.target.value
    });
}

export const TokenSelectorInputUtils = Object.freeze({
    handleInputChange
});
