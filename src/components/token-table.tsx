
export function TokenTable(props: { tokens: any; }): JSX.Element {

    const {tokens} = props;

    if(!tokens.length) {
        return(<></>);
    }

    return (<div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">

        <header className="px-5 py-4 border-b border-gray-100">
            <div className="font-semibold text-gray-800">Crypto Tokens</div>
        </header>

        <div className="overflow-x-auto p-3">
            <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                        {
                            Object.entries(tokens[0]).map((field, index) => {

                                if(field[0] === 'id')
                                {
                                    return;
                                }

                                return (
                                    <th key={index}>
                                        <div className="font-semibold text-center">{field[0]}</div>
                                    </th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                {
                    tokens.map((token, index) => {
                        return(<tr id={token.id} key={index} className="ps-2">

                            <td className="p-2">
                                <div className="text-center">{token.name}</div>
                            </td>

                            <td className="p-2">
                                <div className="text-center">{token.symbol}</div>
                            </td>

                            <td className="p-2">
                                <div className="text-center">{token.totalSupplyAmount}</div>
                            </td>

                            <td className="p-2">
                                <div className="text-center">{`$${token.totalValueLockedInUSD}`}</div>
                            </td>

                        </tr>)
                    })
                }
                </tbody>
            </table>
        </div>

    </div>);
}
