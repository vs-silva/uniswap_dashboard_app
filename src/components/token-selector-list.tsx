import {CryptoTokenDTO} from "../domain/crypto-tokens/business/dtos/crypto-token.dto";

export function TokenSelectorList(props: { tokens: CryptoTokenDTO[]; }): JSX.Element {

    const {tokens} = props;

    return (
        <div className="flex justify-center">
            <ul className="bg-white border border-gray-200 w-96 text-gray-900">
                {
                    tokens.map((token, index) => (
                        <li className="px-6 py-2 border-b border-gray-200 w-full" key={index}
                        onClick={(event) => {
                            console.log('got clicked', token.name);
                        }}
                        >
                            {token.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
