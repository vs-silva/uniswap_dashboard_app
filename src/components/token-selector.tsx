import {TokenSelectorInput} from "./token-selector-input";
import {TokenSelectorList} from "./token-selector-list";
import {CryptoTokenDTO} from "../domain/crypto-tokens/business/dtos/crypto-token.dto";

export function TokenSelector(props: { tokens: CryptoTokenDTO[]; }): JSX.Element {

    const {tokens} = props;

    if(!tokens.length) {
        return(
            <aside>
                <TokenSelectorInput />
            </aside>
        );
    }

    return (<aside>
        <TokenSelectorInput />
        <TokenSelectorList tokens={tokens}/>
    </aside>);
}
