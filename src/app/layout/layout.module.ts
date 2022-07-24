import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout-front/footer/footer.component';
import { MenuComponent } from './layout-front/menu/menu.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FooterComponent,
    MenuComponent,
  
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    FooterComponent,
    MenuComponent,
    
  ]
})
export class LayoutModule { }
