import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.styles.scss'],
  imports: [IonicModule, CommonModule],
  standalone: true,
})
export class HomeComponent {}
