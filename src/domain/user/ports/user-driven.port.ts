export interface UserDrivenPort {
    get(resourceURI: string): Promise<object>;
}
