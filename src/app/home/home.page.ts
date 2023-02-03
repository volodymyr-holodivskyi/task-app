import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { StorageService } from './storage.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private modalController: ModalController,
    public storageService: StorageService
  ) { 
    
  }

  ionViewWillEnter() {
    this.storageService.getDataFromStorage()
      .then(data => {
        if(data) return;
        this.showModal();
      })
  }

  clearStorage() {
    this.storageService.clearStorage();
    this.showModal()
  }

  onStorageChange(event: any) {
    this.storageService.getDataFromStorage();
    if(event.newValue === null) {
      this.showModal();
    }
  }

  showModal() {
    this.modalController.create({
      component: ModalContentComponent
    }).then(modalEl => {
      modalEl.present();
      modalEl.onDidDismiss().then(result => {
        if(!result.data) return;
        this.storageService.setDataToStorage(result.data)
      })
    })
  }

}
