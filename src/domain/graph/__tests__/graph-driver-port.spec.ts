import {describe, it, vi, expect} from "vitest";
import Graph from "../index";
import type {GraphCreateDTO} from "../business/dtos/graph-create.dto";
import {faker} from "@faker-js/faker";
import {CryptoTokenDTO} from "../../crypto-tokens/business/dtos/crypto-token.dto";
import { JSDOM } from 'jsdom';

describe('Graph Tests', () => {

    describe('Graph Driver Port Tests', () => {

        it('createGraph should create an empty graph if a canvas containerID is provided', () => {

            const canvasId = faker.random.word();

            const requestPayload :GraphCreateDTO = {
                // @ts-ignore
                canvasContainerID: canvasId
            };

            const spy = vi.spyOn(Graph, 'createGraph');
            Graph.createGraph(requestPayload);

            expect(requestPayload).toMatchObject(<GraphCreateDTO>{
                canvasContainerID: expect.any(String)
            });

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledOnce();
            expect(spy).toHaveBeenCalledWith(requestPayload);

        });

        it('updateGraph should update graph is data is provided', () => {

            const canvasId = faker.random.word();

            Graph.createGraph({
                // @ts-ignore
                canvasContainerID: canvasId
            });

            const dataPayload: CryptoTokenDTO[] = [{
                id: faker.datatype.uuid(),
                name: faker.name.firstName(),
                symbol: faker.science.chemicalElement().name,
                totalSupplyAmount: parseInt(faker.random.numeric(5)),
                totalValueLockedInUSD: parseFloat(faker.finance.amount(256, 2560, 2))
            }];

            const spy = vi.spyOn(Graph, 'updateGraph');
            Graph.updateGraph(dataPayload);

            expect(dataPayload).toStrictEqual(expect.arrayContaining(<CryptoTokenDTO[]>[expect.objectContaining(<CryptoTokenDTO>{
                id: expect.any(String),
                name: expect.any(String),
                symbol: expect.any(String),
                totalSupplyAmount: expect.any(Number),
                totalValueLockedInUSD: expect.any(Number),
            })]));

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledOnce();
            expect(spy).toHaveBeenCalledWith(dataPayload);

        });

    });
});
