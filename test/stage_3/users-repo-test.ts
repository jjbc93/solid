import { UsersRepo } from "../../src/dip/stage_3/user.repository.interface";

export class UserRepoTest implements UsersRepo {

    private users  = [
        {_id: 2, nick: "berni"},
        {_id: 1, nick: "luilli"}
    ]

    find(userId: number): { _id: number, nick: string } | undefined {
        return this.users.find((item) => item._id === userId); 
    }
}