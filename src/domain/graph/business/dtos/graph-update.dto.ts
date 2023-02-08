import type {GraphUpdateDatasetDTO} from "./graph-update-dataset.dto";

export interface GraphUpdateDTO {
    labels: string[];
    datasets: GraphUpdateDatasetDTO[]
}
