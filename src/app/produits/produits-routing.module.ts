import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { DetailProduitComponent } from './pages/detail-produit/detail-produit.component';
import { ProduitByCategorieComponent } from './pages/produit-by-categorie/produit-by-categorie.component';


const routes: Routes = [
  {path:"catalogue",component:CatalogueComponent},
  {path:"detail/:id",component:DetailProduitComponent},
  {path:"categorie/:id",component:ProduitByCategorieComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitsRoutingModule { }
