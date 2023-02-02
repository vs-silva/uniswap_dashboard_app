import type {GraphCreateDTO} from "../business/dtos/graph-create.dto";

export interface GraphDriverPort {
    createGraph(createGraphDTO: GraphCreateDTO): void;
    updateGraph(data: object[]): void
}
