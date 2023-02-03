import {TokensOptionalRequestPayloadDTO} from "../store/tokens-store-slice/dtos/tokens-optional-request-payload.dto";
import Eventbus from "../eventbus";
import {EventTypesConstants} from "../eventbus/event-types.constants";
import {useState} from "react";

export function TokenAmountSearchInput(): JSX.Element {

    const optionalRequestPayloadDTO :TokensOptionalRequestPayloadDTO = {};
    const [amountValue, setAmountValue] = useState(1);

    return (
        <div className="mb-3">

        <label htmlFor="tokensAmountSearchInput" className="form-label inline-block mb-2 text-gray-700 text-sm"
        >Quantity</label>

        <input
          id="tokensAmountSearchInput"
          placeholder="insert token(s) quantity"
          value={amountValue}
          type="number"
          min="1"
          max="25"
          onChange={(event) => {
              event.preventDefault();

              setAmountValue(() => {
                  return (parseInt(event.target.value) > 25) ? 25 : parseInt(event.target.value);
              });

              optionalRequestPayloadDTO.amount = amountValue;
              optionalRequestPayloadDTO.skip = 0;
              Eventbus.emit(EventTypesConstants.UPDATE_TOKEN_SEARCH_REQUEST,optionalRequestPayloadDTO);
          }}
          className="form-control block w-full px-2 py-1.5
          text-sm font-normal text-gray-700 bg-white bg-clip-padding
          border border-solid border-gray-300 rounded transition ease-in-out m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />

        </div>);
}
