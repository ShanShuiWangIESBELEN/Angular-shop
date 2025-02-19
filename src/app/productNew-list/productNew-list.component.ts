import { Component } from '@angular/core';
import { productsNew } from '../model/productsNew';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductNewAlertsComponent } from '../productNew-alerts/productNew-alerts.component';

@Component({
  selector: 'app-productNew-list',
  standalone: true,
  imports: [RouterLink, CommonModule, ProductNewAlertsComponent],
  templateUrl: './productNew-list.component.html',
  styleUrls: ['./productNew-list.component.css']
})
export class ProductNewListComponent {

  productsNew = [...productsNew];

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
