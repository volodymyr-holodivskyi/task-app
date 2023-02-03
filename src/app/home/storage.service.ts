import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

export interface AuthData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storageData$ = new BehaviorSubject<AuthData>(null as unknown as AuthData);

  get storageData() {
    return this.storageData$.asObservable();
  }

  constructor() { }

  getDataFromStorage() {
    return Preferences.get({
      key: "authData"
    }).then(storageData => {
      this.storageData$.next(storageData ? JSON.parse(storageData.value as string) : null);
      return storageData.value;
    })
  }

  setDataToStorage(data: AuthData) {
    Preferences.set({
      key: "authData",
      value: JSON.stringify(data)
    }).then(_ => {
      this.storageData$.next(data);
    })
  }

  clearStorage() {
    Preferences.clear().then(_ => {
      this.storageData$.next(null as unknown as AuthData);
    })
  }
}
