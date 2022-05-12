import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  imports: [IonicModule],
  standalone: true,
  styles: [],
  template: `<ion-router-outlet></ion-router-outlet>`,
})
export class AppComponent {}
