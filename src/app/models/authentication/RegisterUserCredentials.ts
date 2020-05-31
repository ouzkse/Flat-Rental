
export class RegisterUserCredentials {
  constructor(private email: string, private password: string, private info: UserInformation) { }
}

export class UserInformation {

  constructor(private name: string, private surname: string, private birthOfDate: string, private phoneNumber: string) { }
}

export class UserDocumentInformation { }
