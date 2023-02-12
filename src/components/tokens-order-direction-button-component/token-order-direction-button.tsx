import {OrderDirectionConstant} from "../../domain/crypto-tokens/business/constants/order-direction.constant";
import {TokensOptionalRequestPayloadDTO} from "../../store/tokens-store-slice/dtos/tokens-optional-request-payload.dto";
import {useState} from "react";
import Eventbus from "../../eventbus";
import {EventTypesConstants} from "../../eventbus/event-types.constants";
import {MouseEvent} from "react";

export function TokenOrderDirectionButton(): JSX.Element {

    const optionalRequestPayloadDTO :TokensOptionalRequestPayloadDTO = {};
    const options = Object.values(OrderDirectionConstant);
    const [direction, setDirection] = useState(OrderDirectionConstant.DESCENDING);

    function handleOrderDirectionClick(event: MouseEvent<HTMLButtonElement>): void {

        event.preventDefault();

        for (const option of options) {

            if(option.toLocaleLowerCase() !== direction.toLocaleLowerCase()) {
                // @ts-ignore
                setDirection(option);
                optionalRequestPayloadDTO.orderDirection = option;
                Eventbus.emit(EventTypesConstants.UPDATE_TOKEN_SEARCH_REQUEST,optionalRequestPayloadDTO);
                return;
            }
        }
    }

    return (<div className="mb-3" data-testid="tokens-order-direction-button-container">

        <label htmlFor="tokensOrderDirection" className="form-label inline-block mb-2 text-gray-700 text-sm"
        >Direction</label>

        <button data-testid="tokens-order-direction-button"
            id="tokensOrderDirection"
            className="bg-white hover:bg-gray-100 text-gray-700 font-normal text-base uppercase py-1 px-4 border border-gray-300 rounded w-full"
            onClick={handleOrderDirectionClick}
        >
            {direction}
        </button>
    </div>);
}
