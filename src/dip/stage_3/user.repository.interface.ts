export interface UsersRepo {
    find(userId: number): {_id: number, nick: string} | undefined;
}