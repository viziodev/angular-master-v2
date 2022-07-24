import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  
  constructor() { }

   //Source  => BACK END
   produits=[
    {
      id:1,
      isProm:true,
      prix:2000,
      oldPrix:3000,
      photo:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      note:5
    },
    {
      id:2,
      isProm:false,
      prix:2000,
      oldPrix:3000,
      photo:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      note:5
    },
    {
      id:3,
      isProm:false,
      prix:2000,
      oldPrix:3000,
      photo:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      note:5
    },
    {
      id:4,
      isProm:true,
      prix:2000,
      oldPrix:3000,
      photo:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      note:5
    }
  ]

  //Observable
  //*Methode 1
  produits$=new Observable<any>(
    sucriber=>{
      sucriber.next(this.produits)
      sucriber.next("Bonjour")
    }
  )

  
}
