import {useEffect, useState} from "react";
import Graph from "../domain/graph";
import {CryptoTokenDTO} from "../domain/crypto-tokens/business/dtos/crypto-token.dto";

export function TokenValueGraph(props: { tokens: CryptoTokenDTO[]; }): JSX.Element {

    const [containerID] = useState('tokenValueGraph');
    const {tokens} = props;

    useEffect(() => {
        Graph.createGraph({
            canvasContainerID: containerID
        });
    },[]);

    useEffect(() => {
        Graph.updateGraph(tokens)
    },[tokens]);

    return (<div className="w-full">
        <canvas id={containerID} />
    </div>);
}
