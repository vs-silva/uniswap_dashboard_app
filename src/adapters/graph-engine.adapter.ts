import {GraphDrivenPort} from "../domain/graph/ports/graph-driven.port";
import {Chart, ChartTypeRegistry, registerables} from "chart.js";

export function GraphEngineAdapter(): GraphDrivenPort {

    Chart.register(...registerables);

    let graph: Chart<keyof ChartTypeRegistry, never[], never> | null = null;

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
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Tokens Graph'
                    },
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

        for (const item of data) {
            // @ts-ignore
            result.labels.push(`${item.name} ( ${item.symbol} )`);
            // @ts-ignore
            result.datasets[0].data.push(item.totalValueLockedInUSD);
            // @ts-ignore
            result.datasets[0].backgroundColor.push(generateRandomRGBAColor());
        }

        return result;
    }

    function clearGraph():void {
        if(!graph) {
            return;
        }

        graph.data.labels = [];
        graph.data.datasets = [];
        graph.update();
    }

    function generateRandomRGBAColor(): string {
        const alpha = Math.random().toFixed(1);
        return `rgba(${generateRandomValueForColor()},${generateRandomValueForColor()},${generateRandomValueForColor()},${alpha})`;
    }

    function generateRandomValueForColor():number {
        return  Math.round((Math.random()*255));
    }

    return {
        createGraph,
        updateGraph
    };
}
