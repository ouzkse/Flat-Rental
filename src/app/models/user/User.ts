import {PersonalInfo} from "./PersonalInfo";
import {PersonalDocument} from "./PersonalDocument";

export class User {

  constructor(private _id: string,
              private personalInfo: PersonalInfo,
              private personalDocument: PersonalDocument,
              private isHostActivated: Boolean) {
  }
}
