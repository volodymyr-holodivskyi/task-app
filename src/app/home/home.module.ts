import { ModalContentComponent } from './../modal-content/modal-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ModalContentModule } from '../modal-content/modal-content.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ModalContentModule
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
