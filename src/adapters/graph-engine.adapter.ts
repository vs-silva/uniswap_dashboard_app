import {GraphDrivenPort} from "../domain/graph/ports/graph-driven.port";
import {Chart, ChartTypeRegistry, registerables} from "chart.js";
import {GraphUpdateDTO} from "../domain/graph/business/dtos/graph-update.dto";

export function GraphEngineAdapter(): GraphDrivenPort {

    Chart.register(...registerables);

    let graphInstance: Chart<keyof ChartTypeRegistry, never[], never> | null = null;

    function createGraph(containerID: string, graphType: string): void {

        if(graphInstance) {
            graphInstance.destroy();
        }

        graphInstance = new Chart(containerID, {
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


    function updateGraph(data: GraphUpdateDTO):void {

        if(!graphInstance || !graphInstance.canvas) {
            return;
        }

        graphInstance.data = data;
        graphInstance.update();
    }


    return {
        createGraph,
        updateGraph
    };
}
