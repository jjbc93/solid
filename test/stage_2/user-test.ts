import { GetUsersStage2UseCase } from "../../src/dip/stage_2/get-users.use-case";
import { HarcodedUserStage2Repository } from "../../src/dip/stage_2/hardcoded-user.repository";

export class userTestStage2 {
    find_existing_users () {
        const usersRepo = new HarcodedUserStage2Repository();
        const usersFind = new GetUsersStage2UseCase(usersRepo);
        const existId = 1;
        const expectedUser = {_id: 1, username: "juanjo"}

        // assertEquals(expectedUser, usersFind.find(existId));
    }
}