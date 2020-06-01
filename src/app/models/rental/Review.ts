export class Review {
  constructor(public _id: string,
              public reviewDate: Date,
              public reviewPoint: number,
              public reviewContent: string,
              public reviewerId: string) {
  }
}
