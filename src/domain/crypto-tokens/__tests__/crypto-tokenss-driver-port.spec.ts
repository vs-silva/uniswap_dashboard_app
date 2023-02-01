import {describe, it, vi, expect} from "vitest";
import CryptoTokens from "../index";
import {OrderDirectionConstant} from "../business/constants/order-direction.constant";
import {OrderByConstants} from "../business/constants/order-by.constants";
import {CryptoTokenDTO} from "../business/dtos/crypto-token.dto";

describe('Crypto-Tokens Tests', () => {

    const timeout:number = 60 * 1000;

    describe('Crypto-Tokens Driver Port Tests', () => {

        it('getCryptoTokens should return an array of CryptoTokens objects', async () => {

            const requestPayload = {
                name:'',
                orderBy: OrderByConstants.TOTAL_VALUE_LOCKED_USD,
                orderDirection: OrderDirectionConstant.DESCENDING,
                amount: 10,
                skip: 0
            };

            const spy = vi.spyOn(CryptoTokens, 'getCryptoTokens');
            const result = await CryptoTokens.getCryptoTokens(requestPayload);


            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledOnce();
            expect(spy).toHaveBeenCalledWith(requestPayload);
            expect(result.length).toBeGreaterThan(0);

            const regex = /^0x[a-f0-9]{40}$/;
            expect(result[0].id).toMatch(regex);

            expect(result).toStrictEqual(expect.arrayContaining(<CryptoTokenDTO[]>[expect.objectContaining(<CryptoTokenDTO>{
                id: expect.any(String),
                name: expect.any(String),
                symbol: expect.any(String),
                totalSupplyAmount: expect.any(Number),
                totalValueLockedInUSD: expect.any(Number)
            })]));

        }, { timeout:timeout });

    });

});
