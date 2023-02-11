import {TokenSelectorInput} from "../token-selector-input-component/token-selector-input";
import {TokenSelectorList} from "../token-selector-list-component/token-selector-list";
import {CryptoTokenDTO} from "../../domain/crypto-tokens/business/dtos/crypto-token.dto";

export function TokenSelector(props: { tokens: CryptoTokenDTO[]; }): JSX.Element {

    const {tokens} = props;

    if(!tokens.length) {
        return(
            <div data-testid="token-selector-container">
                <TokenSelectorInput />
            </div>
        );
    }

    return (<div data-testid="token-selector-container">
        <TokenSelectorInput />
        <TokenSelectorList tokens={tokens}/>
    </div>);
}
