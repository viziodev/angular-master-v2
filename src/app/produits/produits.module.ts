import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitsRoutingModule } from './produits-routing.module';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { DetailProduitComponent } from './pages/detail-produit/detail-produit.component';
import { ProduitByCategorieComponent } from './pages/produit-by-categorie/produit-by-categorie.component';
import { CardProduitComponent } from './components/card-produit/card-produit.component';
import { ListProduitComponent } from './components/list-produit/list-produit.component';
import { HeaderComponent } from './pages/catalogue/header/header.component';



@NgModule({
  declarations: [
           HeaderComponent,
           CatalogueComponent,
           DetailProduitComponent,
           ProduitByCategorieComponent,
           CardProduitComponent,
           ListProduitComponent
  ],
  imports: [
    CommonModule,
    ProduitsRoutingModule
  ]
})
export class ProduitsModule { }
