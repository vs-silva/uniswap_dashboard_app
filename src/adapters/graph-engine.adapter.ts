import {GraphDrivenPort} from "../domain/graph/ports/graph-driven.port";
import {Chart, registerables} from "chart.js";

export function GraphEngineAdapter(): GraphDrivenPort {

    Chart.register(...registerables);

    let graph: unknown;

    function createGraph(containerID: string, graphType: string) {

        if(graph) {
            graph.destroy();
        }

        graph = new Chart(containerID, {
            // @ts-ignore
            type: graphType,
            data: {
                labels:[],
                datasets: [{
                    label: '',
                    data: [],
                    backgroundColor: []
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        beginAtZero: true
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }


    function updateGraph(data: object[]):void {

        if(!graph) {
            return;
        }

        clearGraph();
        // @ts-ignore
        graph.data = generateGraphData(data);

        // @ts-ignore
        graph.update();
    }

    function generateGraphData(data: object[]): object {

        const result = {
            labels: [],
            datasets: [{
                label: '',
                data: [],
                backgroundColor: []
            }]
        };

        result.datasets[0].label = 'Tokens Graph';

        for (const item of data) {
            // @ts-ignore
            result.labels.push(`${item.name} ( ${item.symbol} )`);
            // @ts-ignore
            result.datasets[0].data.push(item.totalValueLockedInUSD);
            // @ts-ignore
            result.datasets[0].backgroundColor.push(generateRandomColor());
        }

        return result;
    }

    function clearGraph():void {
        if(!graph) {
            return;
        }

        // @ts-ignore
        graph.data.labels = [];
        // @ts-ignore
        graph.data.datasets = [];
        // @ts-ignore
        graph.update();
    }



    function generateRandomColor(): string {
        const letters:string = '0123456789ABCDEF';
        let color:string = '#';

        for (let i:number = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
    }


    // @ts-ignore
    function destroyGraph(graph) {
        console.log('HERE',graph)
        graph.destroy();
    }



    return {
        createGraph,
        updateGraph,
        destroyGraph
    };
}
