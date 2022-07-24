import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeByClientComponent } from './pages/commande-by-client/commande-by-client.component';
import { PanierComponent } from './pages/panier/panier.component';


const routes: Routes = [
  {path:"panier",component:PanierComponent},
  {path:"commande/client/:id",component:CommandeByClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
