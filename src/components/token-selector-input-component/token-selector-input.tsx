import {TokenSelectorInputUtils} from "./token-selector-input.utils";

export function TokenSelectorInput(): JSX.Element {

    return (
        <div className="mb-3 xl:w-full" data-testid="token-selector-input-container">
        <label htmlFor="tokensFilterInput" className="form-label inline-block mb-2 text-gray-700 text-sm"
        >Filter Tokens</label>

        <input
            data-testid="token-selector-input"
            id="tokensFilterInput"
            placeholder="filter tokens"
            type="text"
            onChange={TokenSelectorInputUtils.handleInputChange}
            className="form-control block w-full px-2 py-1
          text-sm font-normal text-gray-700 bg-white bg-clip-padding
          border border-solid border-gray-300 rounded transition ease-in-out m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />

    </div>);
}
