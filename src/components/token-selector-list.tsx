import type {CryptoTokenDTO} from "../domain/crypto-tokens/business/dtos/crypto-token.dto";
import Eventbus from "../eventbus";
import {EventTypesConstants} from "../eventbus/event-types.constants";
import {useState} from "react";

export function TokenSelectorList(props: { tokens: CryptoTokenDTO[]; }): JSX.Element {

    const {tokens} = props;

    const [selected, setSelected] = useState(false);

    function toggleSelected(tokenID: string) {
        setSelected(!selected);

        if(!selected) {
            Eventbus.emit(EventTypesConstants.UNSELECT_TOKEN_DATA);
            return;
        }

        Eventbus.emit(EventTypesConstants.SELECT_TOKEN_DATA, tokenID);
    }

    return (
        <div className="flex justify-center">
            <ul className="bg-white border border-gray-200 w-full text-gray-900">
                {
                    tokens.map((token, index) => (
                        <li className="px-6 py-2 border-b border-gray-200 w-full cursor-pointer" key={index}
                        onClick={(event) => {
                            toggleSelected(token.id);
                        }}>{token.name}</li>
                    ))
                }
            </ul>
        </div>
    );
}
