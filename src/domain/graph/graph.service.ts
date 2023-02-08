import type {GraphDriverPort} from "./ports/graph-driver.port";
import type {GraphCreateDTO} from "./business/dtos/graph-create.dto";
import {GraphDrivenPort} from "./ports/graph-driven.port";
import {GraphTypeConstants} from "./business/constants/graph-type.constants";
import {GraphDataMapperService} from "./business/services/graph-data-mapper/graph-data-mapper.service";

export function GraphService(engine: GraphDrivenPort): GraphDriverPort {

    function createGraph(createGraphDTO: GraphCreateDTO): void {
        const graphType = createGraphDTO.graphType || GraphTypeConstants.BAR;
        engine.createGraph(createGraphDTO.canvasContainerID, graphType);
    }

    function updateGraph(data: object[]):void {
        const graphData = GraphDataMapperService.mapCryptoTokensToGraphData(data);
        engine.updateGraph(graphData);
    }

    return {
        createGraph,
        updateGraph
    };
}
