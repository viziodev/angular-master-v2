import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { PanierComponent } from './pages/panier/panier.component';
import { CommandeByClientComponent } from './pages/commande-by-client/commande-by-client.component';



@NgModule({
  declarations: [
 
  
    PanierComponent,
         CommandeByClientComponent
  ],
  imports: [
    CommonModule,
    CommandeRoutingModule
  ]
})
export class CommandeModule { }
