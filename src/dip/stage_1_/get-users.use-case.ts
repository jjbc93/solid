import { HarcodedUserStage1Repository } from "./hardcoded-user.repository";

export class GetUsersStage1UseCase {

    private usersRepo = new HarcodedUserStage1Repository();

    public find(userId: number) {
        return this.usersRepo.find(userId);
    }
}