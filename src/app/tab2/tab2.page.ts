import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonItem,IonLabel, IonInput,IonCardContent,IonCardTitle,IonCard,IonButton,IonCardHeader } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonItem, IonLabel, IonInput, IonCardContent, IonCardTitle, IonCard, IonButton, IonCardHeader,FormsModule],
})
export class Tab2Page {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number | null = null;

  sumar() {
    console.log("Operando A: " + this.numero1);
    console.log("Operando B: " + this.numero2);
    return this.resultado = this.numero1 + this.numero2;
  }
}
