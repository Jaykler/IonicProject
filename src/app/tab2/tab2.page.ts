import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class Tab2Page {

  titulo = "La Sumadora";
  operandoA:number = 0;
  operandoB:number = 0;
  resultado:number = 0;

  onSumar():void {
    this.resultado = this.operandoA + this.operandoB;
  }

}
