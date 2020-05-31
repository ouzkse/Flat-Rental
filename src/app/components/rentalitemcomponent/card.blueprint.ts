interface ICard {
  title?: string;
  subtitle?: string;
  content?: string[];
  price?: string;
  imageUrl?: string;
  buttons?: string[];
  points?: string;
}

export class Card {
  public title: string;
  public subtitle: string;
  public content: string | any[];
  public price: string;
  public imageUrl: string;
  public icons: string[];
  public points: string;

  // tslint:disable-next-line:max-line-length
  constructor(obj?: { price: string; imageUrl: string; subtitle: string; icons: string[]; title: string; content: string; points: string }) {
    this.title = obj.title || 'Card Title';
    this.subtitle = obj.subtitle || 'Card Subtitle';
    this.content = obj.content || [];
    this.price = obj.price;
    this.imageUrl = obj.imageUrl || 'https://www.infragistics.com/angular-demos/assets/images/card/media/placeholder.jpg';
    // this.buttons = obj.buttons || ['ACTION1', 'ACTION2'];
    this.points = obj.points;
    this.icons = obj.icons || ['favorite', 'bookmark', 'share'];
  }
}

