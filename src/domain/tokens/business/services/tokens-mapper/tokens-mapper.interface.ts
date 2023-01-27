import type {CryptoTokenDTO} from "../../dtos/crypto-token.dto";

export interface TokensMapperInterface {
    mapToCryptoTokenDTOCollection(data: object[]): CryptoTokenDTO[];
}
