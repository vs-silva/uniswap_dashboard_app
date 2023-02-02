import {OrderByConstants} from "../domain/crypto-tokens/business/constants/order-by.constants";
import {TokensOptionalRequestPayloadDTO} from "../store/tokens-store-slice/dtos/tokens-optional-request-payload.dto";
import Eventbus from "../eventbus";
import {EventTypesConstants} from "../eventbus/event-types.constants";

export function TokenOrderBySearchSelector() :JSX.Element {

    const optionalRequestPayloadDTO :TokensOptionalRequestPayloadDTO = {};

    function generateOptions() {
        return Object.keys(OrderByConstants).map(
            (orderKey, index) => (
                // @ts-ignore
                <option key={orderKey} value={OrderByConstants[orderKey]}>{OrderByConstants[orderKey]}</option>)
        ).reverse();
    }

    return (
        <div>

            <label htmlFor="tokensOrderBySearchSelect" className="form-label inline-block mb-2 text-gray-700 text-sm"
            >Order by</label>

            <select id="tokensOrderBySearchSelect"
                className="form-select appearance-none block w-full px-3 py-1 text-base font-normal text-gray-700 cursor-pointer
            bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" onChange={(event) => {
                optionalRequestPayloadDTO.orderBy = event.target.value;
                Eventbus.emit(EventTypesConstants.UPDATE_TOKEN_SEARCH_REQUEST,optionalRequestPayloadDTO);
            }}>
                <option disabled={true} value="">Please choose a property</option>
                {
                    generateOptions()
                }
            </select>

        </div>
    );
}
