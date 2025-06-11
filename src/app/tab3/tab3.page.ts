import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonItem,IonLabel, IonInput,IonCardContent,IonCardTitle,IonCard,IonButton,IonCardHeader } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonItem, IonLabel, IonInput, IonCardContent, IonCardTitle, IonCard, IonButton, IonCardHeader,FormsModule,CommonModule],
})
export class Tab3Page {
  numero: number = 0;
  resultado: string = '';

  unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
  decenas = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
  especiales = [
    'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis',
    'diecisiete', 'dieciocho', 'diecinueve'
  ];
  centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos',
              'setecientos', 'ochocientos', 'novecientos'];

  traducir() {
    this.resultado = this.numeroALetras(this.numero);
  }

  numeroALetras(num: number): string {
    if (num < 1 || num > 1000) return 'Número fuera de rango';
    if (num === 1000) return 'mil';
    if (num === 100) return 'cien';

    const c = Math.floor(num / 100);
    const d = Math.floor((num % 100) / 10);
    const u = num % 10;

    let letras = '';

    if (c) letras += this.centenas[c] + ' ';
    if (d === 1 && u > 0) return letras + this.especiales[u];
    if (d === 1 && u === 0) return letras + this.especiales[0];

    if (d) letras += this.decenas[d];
    if (d && u) letras += ' y ';
    if (u && d !== 1) letras += this.unidades[u];

    return letras.trim();
  }
}
