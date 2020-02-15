import {Injectable} from '@angular/core';
import {ClientDisplay} from "../model/ClientDisplay";
import {ClientToSave} from "../model/ClientToSave";

@Injectable({
  providedIn: 'root'
})
export class ClientListService {
  constructor(
  ) {
  }

  loadRecords(): ClientDisplay[] {
    return  <ClientDisplay[]>[
      {id: 1, fio: 'Tima', age: 20, character: 'good', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500},
      {id: 2, fio: 'Bimadsba', age: 20, character: 'good', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500},
      {id: 3, fio: 'Zimadsfaa', age: 20, character: 'good', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500},
      {id: 4, fio: 'Himasdfasa', age: 20, character: 'good', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500},
      {id: 5, fio: 'Jiasdfasma', age: 20, character: 'good', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500},
      {id: 6, fio: 'Kiasdfama', age: 20, character: 'good', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500},
      {id: 7, fio: 'Limasda', age: 20, character: 'good', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500}
      ]
  }

  clientArr: ClientToSave[] = [];
}
