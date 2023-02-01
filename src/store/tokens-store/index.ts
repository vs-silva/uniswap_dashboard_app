import {CryptoTokenDTO} from "../../domain/crypto-tokens/business/dtos/crypto-token.dto";
import {CryptoTokensRequestParameterDTO} from "../../domain/crypto-tokens/business/dtos/crypto-tokens-request-parameter.dto";
import {OrderByConstants} from "../../domain/crypto-tokens/business/constants/order-by.constants";
import {OrderDirectionConstant} from "../../domain/crypto-tokens/business/constants/order-direction.constant";
import CryptoTokens from "../../domain/crypto-tokens";

export function TokensStore(useState, useEffect) {

    const [tokens, setTokens] = useState(<CryptoTokenDTO[]>[]);
    const [tokensRequestPayload, setTokensRequestPayload] = useState(<CryptoTokensRequestParameterDTO>{
        name:'',
        orderBy: OrderByConstants.TOTAL_VALUE_LOCKED_USD,
        orderDirection: OrderDirectionConstant.DESCENDING,
        amount: 10,
        skip: 0
    });

    async function getTokens(): Promise<void> {
        return useEffect(() => {
            CryptoTokens.getCryptoTokens(tokensRequestPayload).then(setTokens);
        },[]);
        //const result = await CryptoTokens.getCryptoTokens(tokensRequestPayload);
        //setTokens(result);
    }







    return {
        tokens,
        tokensRequestPayload,
        getTokens
    };
}
