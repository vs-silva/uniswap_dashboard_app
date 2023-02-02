import Eventbus from "../eventbus";
import {EventTypesConstants} from "../eventbus/event-types.constants";
import {TokensOptionalRequestPayloadDTO} from "../store/tokens-store-slice/dtos/tokens-optional-request-payload.dto";

export function TokenSelectorInput(): JSX.Element {

    const optionalRequestPayloadDTO :TokensOptionalRequestPayloadDTO = {};

    return (
        <div className="mb-3 xl:w-96">
        <label htmlFor="tokensFilterInput" className="form-label inline-block mb-2 text-gray-700 text-sm"
        >Filter Tokens</label>

        <input
            id="tokensFilterInput"
            placeholder="filter tokens"
            type="text"
            onChange={(event) => {
                optionalRequestPayloadDTO.name = event.target.value;
                Eventbus.emit(EventTypesConstants.FILTER_TOKENS_DATA, optionalRequestPayloadDTO)
            }}
            className="form-control block w-full px-2 py-1
          text-sm font-normal text-gray-700 bg-white bg-clip-padding
          border border-solid border-gray-300 rounded transition ease-in-out m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />

    </div>);
}
