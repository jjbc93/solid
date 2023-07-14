import { HarcodedUserStage2Repository } from "./hardcoded-user.repository";

export class GetUsersStage2UseCase {

    private usersRepo;
    constructor (usersRepo: HarcodedUserStage2Repository) {
        this.usersRepo = usersRepo;
    }

    public find(userId: number) {
        return this.usersRepo.find(userId);
    }
}