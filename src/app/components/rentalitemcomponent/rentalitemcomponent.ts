import { Component } from '@angular/core';
import { Card } from './card.blueprint';

@Component({
  selector: 'app-rentalitemcomponent',
  templateUrl: './rentalitemcomponent.html',
  styleUrls: ['./rentalitemcomponent.css']
})
export class RentalItemComponent {
  public card = new Card({
    content: ['4 guests', '2 bedrooms', '2 beds', '1 bath'].join(' • '),
    price: '₺150',
    points: '★ 5.6',
    icons: ['favorite'],
    imageUrl: 'https://www.infragistics.com/angular-demos/assets/images/card/media/ny.jpg',
    subtitle: 'Buca, İzmir',
    title: 'Mini Apartment by Saint Peter Square'
  });
}
