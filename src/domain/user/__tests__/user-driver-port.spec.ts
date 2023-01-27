import {describe, it, vi, expect} from "vitest";
import User from "../index";
import {UserDTO} from "../business/dtos/user.dto";

describe('User Tests', () => {

    const timeout:number = 60 * 1000;

    describe('User Driver Port Tests', () => {

        it('getUserGitHubData should return user object', async () => {

            const spy = vi.spyOn(User, 'getUserGitHubData');
            const result = await User.getUserGitHubData();

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledOnce();

            const regex = /^[0-9]{8}$/;
            expect(result.id).toBeTruthy();
            expect(result.id).toMatch(regex);

            expect(result).toStrictEqual(expect.objectContaining(<UserDTO>{
                id: expect.any(Number),
                name: expect.any(String),
                bio: expect.any(String),
                thumbImage: expect.any(String)
            }));

        }, { timeout:timeout });

    });

});
