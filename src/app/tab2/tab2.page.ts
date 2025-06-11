import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonItem,IonLabel, IonInput,IonCardContent,IonCardTitle,IonCard,IonButton,IonCardHeader,IonList } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonItem, IonLabel, IonInput, IonCardContent, IonCardTitle, IonCard, IonButton, IonCardHeader,IonList, FormsModule,CommonModule],
})
export class Tab2Page {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number | null = null;

  numeroMultiplicar: number = 0;
  tabla: string[] = [];

  sumar() {
    console.log("Operando A: " + this.numero1);
    console.log("Operando B: " + this.numero2);
    return this.resultado = this.numero1 + this.numero2;
  }

  generarTabla() {
    this.tabla = [];
    for (let i = 1; i <= 10; i++) {
      this.tabla.push(`${this.numeroMultiplicar} x ${i} = ${this.numeroMultiplicar * i}`);
    }
  }
}

  

