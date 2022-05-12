import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  imports: [IonicModule, CommonModule],
  standalone: true,
  styles: [
    `
      ion-content {
        --background: var(--ion-color-primary);
      }
    `,
  ],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Hello</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding"> Standing all by myself </ion-content>
  `,
})
export class HomeComponent {}
