export class HarcodedUserStage2Repository {
    private users  = [
        {_id: 2, nick: "berni"},
        {_id: 1, nick: "luilli"}
    ]

    public find (userId: number) {
        return this.users.find(item => item._id === userId) 
    }
}