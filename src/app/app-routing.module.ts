import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
                      
                        { path: 'produit', loadChildren: () => import('./produits/produits.module').then(m => m.ProduitsModule) }, 
                        { path: "", redirectTo:"/produit/catalogue",pathMatch:"full" }, 
                        { path: 'securite', loadChildren: () => import('./securite/securite.module').then(m => m.SecuriteModule) },
                        { path: 'commande', loadChildren: () => import('./commande/commande.module').then(m => m.CommandeModule) },
                        { path: '**', component:NotFoundComponent },
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
