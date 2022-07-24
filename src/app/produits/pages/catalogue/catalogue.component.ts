import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProduitService } from 'src/app/shared/services/produit.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {


 
  
 // produits$=of(this.produits)
  produitsRec:any;

  constructor(private produitService:ProduitService) { }

  ngOnInit(): void {

    //Abonnement
   // this.produits$.subscribe(
        //(data)=>this.produitsRec=data
   // )
    
  }

}
