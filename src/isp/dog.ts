import { Bark } from "./bark.interface";
import { Run } from "./run.interface";

class Dog implements Run, Bark {
    run(): void {
        console.log("Dog is running");
    }
    bark(): void {
        console.log("Dog is barking");
    }
}