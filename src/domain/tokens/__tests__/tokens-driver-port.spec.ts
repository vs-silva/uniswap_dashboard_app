import {describe, it, vi, expect} from "vitest";
import Tokens from "../index";

describe('Tokens Tests', () => {

    const timeout:number = 60 * 1000;

    describe('Tokens Driver Port Tests', () => {

        it('getCryptoTokens should return an array of CryptoTokens objects ', async () => {

            const spy = vi.spyOn(Tokens, 'getCryptoTokens');
            const result = await Tokens.getCryptoTokens();

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledOnce();
            expect(result.length).toBeGreaterThan(0);

            console.log(result);

        }, { timeout:timeout });

    });

});
