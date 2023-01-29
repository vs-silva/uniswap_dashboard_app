import {useEffect, useState} from "react";
import type {CryptoTokenDTO} from "../domain/crypto-tokens/business/dtos/crypto-token.dto";
import CryptoTokens from "../domain/crypto-tokens";
import {OrderByConstants} from "../domain/crypto-tokens/business/constants/order-by.constants";
import {OrderDirectionConstant} from "../domain/crypto-tokens/business/constants/order-direction.constant";
import Eventbus from "../eventbus";
import {EventTypesConstants} from "../eventbus/event-types.constants";

export function Tokens(): JSX.Element {

    const initialValue: CryptoTokenDTO[] = [];
    const [tokens, setTokens] = useState(initialValue);

    const requestPayload = {
        name:'',
        orderBy: OrderByConstants.TOTAL_VALUE_LOCKED_USD,
        orderDirection: OrderDirectionConstant.DESCENDING,
        amount: 10,
        skip: 0
    };

    useEffect(() => {

        CryptoTokens.getCryptoTokens(requestPayload)
            .then(setTokens)
            .catch(error => (Eventbus.emit(EventTypesConstants.DATA_FETCH_ERROR, error)));

    },[]);

    return (<div>
        <h1>Tokens page here</h1>
        {JSON.stringify(tokens)}
    </div>);
}
