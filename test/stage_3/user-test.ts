
import { GetUsersStage3UseCase } from "../../src/dip/stage_3/get-users.use-case";
import { UserRepoTest } from "./users-repo-test";

export class userTestStage3 {
    find_existing_users () {
        const usersRepo = new UserRepoTest();
        const usersFind = new GetUsersStage3UseCase(usersRepo);
        const existId = 1;
        const expectedUser = {_id: 1, username: "juanjo"}

        // assertEquals(expectedUser, usersFind.find(existId));
    }
}