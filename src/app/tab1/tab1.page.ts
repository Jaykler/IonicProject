import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  standalone: true,
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,CommonModule,FormsModule],
  
})
export class Tab1Page {

  fotoUrl: string = 'assets/Hilda-Hospital-202586.jpg'; // O usa una URL externa si prefieres
  nombre: string = 'Hilda';
  apellido: string = 'Jimenez';
  matricula: string = '2023-0269';
  correo: string = 'julyme10@hotmail.com';
}

