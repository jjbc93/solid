import { UsersRepo } from "./user.repository.interface";

export class GetUsersStage3UseCase {

    private usersRepo: UsersRepo

    constructor(usersRepo: UsersRepo) {
        this.usersRepo = usersRepo;
    }

    public find(userId: number) {
        return this.usersRepo.find(userId);
    }
}