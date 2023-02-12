import {useEffect, useState} from "react";
import {CryptoTokenDTO} from "../../domain/crypto-tokens/business/dtos/crypto-token.dto";
import Eventbus from "../../eventbus";
import {EventTypesConstants} from "../../eventbus/event-types.constants";

export function TokenValueGraph(props: { tokens: CryptoTokenDTO[]; }): JSX.Element {

    const [containerID] = useState('tokenValueGraph');
    const {tokens} = props;

    useEffect(() => {
        Eventbus.emit(EventTypesConstants.REGISTER_GRAPH_CONTAINER, containerID);
    },[]);

    useEffect(() => {
        Eventbus.emit(EventTypesConstants.UPDATE_GRAPH_DATA, tokens);
    },[tokens]);

    return (<div className="w-full" data-testid="token-value-graph-container">
        <canvas id={containerID} data-testid="token-value-graph-canvas"/>
    </div>);
}
