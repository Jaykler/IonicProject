import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonItem,IonLabel, IonInput } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, FormsModule,IonItem,IonLabel, IonInput ],
 
})
export class Tab2Page {

  titulo = "La Sumadora";
  operandoA:number = 0;
  operandoB:number = 0;
  resultado:number = 0;

  onNumero1Change(event: any): void {
    this.operandoA = event.target.value;
  }

  onNumero2Change(event: any): void {
    this.operandoB = event.target.value;
  }

  onSumar():void {
    this.resultado = this.operandoA + this.operandoB;
  }

  consoleLog(): void {
    console.log("Operando A: " + this.operandoA);
    console.log("Operando B: " + this.operandoB);
    console.log("Resultado: " + this.resultado);
  }

}
