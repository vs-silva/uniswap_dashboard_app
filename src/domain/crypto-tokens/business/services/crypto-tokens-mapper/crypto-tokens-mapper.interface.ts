import type {CryptoTokenDTO} from "../../dtos/crypto-token.dto";

export interface CryptoTokensMapperInterface {
    mapToCryptoTokenDTOCollection(data: object[]): CryptoTokenDTO[];
}
