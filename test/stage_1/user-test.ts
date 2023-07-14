import { GetUsersStage1UseCase } from "../../src/dip/stage_1_/get-users.use-case";

export class userTestStage1 {
    find_existing_users () {
        const usersFind = new GetUsersStage1UseCase();
        const existId = 1;
        const expectedUser = {_id: 1, username: "juanjo"}

        // assertEquals(expectedUser, usersFind.find(existId));
    }
}