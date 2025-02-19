import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductsNew } from '../model/productsNew';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productNew-alerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productNew-alerts.component.html',
  styleUrls: ['./productNew-alerts.component.css']
})
export class ProductNewAlertsComponent{


  @Input() productNew: ProductsNew | undefined;
  @Output() notify = new EventEmitter();


}
