
export interface GraphDrivenPort {
    createGraph(containerID: string, graphType: string): unknown;
    updateGraph(data: object[]): void;
    destroyGraph(graph: any): void;
}
