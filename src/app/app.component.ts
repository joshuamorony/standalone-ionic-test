import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [IonicModule],
  template: `<ion-router-outlet></ion-router-outlet>`,
})
export class AppComponent {}
