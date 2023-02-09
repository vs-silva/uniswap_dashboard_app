import {GraphUpdateDTO} from "../../dtos/graph-update.dto";

export interface GraphDataMapperInterface {
    mapCryptoTokensToGraphData(data: object[]): GraphUpdateDTO
}
