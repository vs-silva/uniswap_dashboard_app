import type {CryptoTokenDTO} from "../domain/crypto-tokens/business/dtos/crypto-token.dto";

export function TokenSelector(props: { tokens: any; }): JSX.Element {

    const {tokens} = props;

    if(!tokens.length) {
        return(<></>);
    }

    return (<aside>
        <div className="mb-3 xl:w-96">
            <label
                htmlFor="exampleFormControlInput4"
                className="form-label inline-block mb-2 text-gray-700 text-sm"
            >Form control sm</label
            >
            <input
                type="text"
                className="form-control block w-full px-2 py-1
          text-sm font-normal text-gray-700 bg-white bg-clip-padding
          border border-solid border-gray-300 rounded transition ease-in-out m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput4"
                placeholder="Form control sm"
            />
        </div>


        <div>
            <ul>
                {
                    // @ts-ignore
                    tokens.map((token, index) => (
                        <li id={token.id} key={index}>{token.name}</li>
                    ))
                }
            </ul>
        </div>
    </aside>);
}
