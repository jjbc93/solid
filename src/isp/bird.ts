import { Fly } from "./fly.interface";

class Bird implements Fly {
   fly(): void {
       console.log("Bird is running");
   } 
}