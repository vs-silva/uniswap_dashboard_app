import {GraphDataMapperInterface} from "./graph-data-mapper.interface";
import type {GraphUpdateDTO} from "../../dtos/graph-update.dto";
import {GraphUpdateDatasetDTO} from "../../dtos/graph-update-dataset.dto";
import {ColorRgbaService} from "../color-rgba/color-rgba.service";

function mapCryptoTokensToGraphData(data: object[]): GraphUpdateDTO {

    const result: GraphUpdateDTO = {
        labels: <string[]>[],
        datasets: <GraphUpdateDatasetDTO[]>[{
            label:'',
            data: <number[]>[],
            backgroundColor: <string[]>[]
        }]
    };

    for (const token of data) {
        // @ts-ignore
        result.labels.push(`${token.name} ( ${token.symbol} )`);
        // @ts-ignore
        result.datasets[0].data.push(token.totalValueLockedInUSD);
        result.datasets[0].backgroundColor.push(ColorRgbaService.generateRandomRGBAColor(.3, 1));
    }

    return result;
}

export const GraphDataMapperService: GraphDataMapperInterface = Object.freeze({
    mapCryptoTokensToGraphData
});
