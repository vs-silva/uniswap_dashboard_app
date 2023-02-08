import type {GraphUpdateDTO} from "../business/dtos/graph-update.dto";

export interface GraphDrivenPort {
    createGraph(containerID: string, graphType: string): void;
    updateGraph(data: GraphUpdateDTO): void;
}
