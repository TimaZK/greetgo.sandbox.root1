import {Injectable} from '@angular/core';
import {ClientDisplay} from "../model/ClientDisplay";
import {ClientToSave} from "../model/ClientToSave";
import {Gender} from "../model/Gender";
import {Phones} from "../model/Phones";

@Injectable({
  providedIn: 'root'
})
export class ClientListService {
  constructor(
  ) {
  }

  loadRecords(): ClientDisplay[] {
    return  <ClientDisplay[]>[
      {id: 1, fio: 'Tima Zarlykov', age: 20, character: 'good', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500,
      clientToSave: {
        firstName: "Tima", lastName: "Zarlykov", patron: "Blaaa", charm: 1, gender: Gender.MALE
      }},
      {id: 2, fio: 'Bimadsba', age: 20, character: 'good', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500,
        clientToSave: {
          firstName: "Zima", lastName: "Parlykov", patron: "Blaaa", charm: 1, gender: Gender.MALE
        }},
      {id: 3, fio: 'Zimadsfaa', age: 20, character: 'good', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500,
        clientToSave: {
          firstName: "Lima", lastName: "Narlykov", patron: "Blaaa", charm: 1, gender: Gender.MALE
        }},
      {id: 4, fio: 'Himasdfasa', age: 20, character: 'good', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500,
        clientToSave: {
          firstName: "Dima", lastName: "Marlykov", patron: "Blaaa", charm: 1, gender: Gender.MALE
        }},
      {id: 5, fio: 'Jiasdfasma', age: 20, character: 'good', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500,
        clientToSave: {
          firstName: "Rima", lastName: "Jarlykov", patron: "Blaaa", charm: 1, gender: Gender.MALE
        }},
      {id: 6, fio: 'Kiasdfama', age: 20, character: 'good', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500,
        clientToSave: {
          firstName: "Qima", lastName: "Farlykov", patron: "Blaaa", charm: 1, gender: Gender.MALE
        }},
      {id: 7, fio: 'Limasda', age: 20, character: 'good', totalBalanceOfAccounts: 2000, maximumBalance: 1500, minimumBalance: 500,
        clientToSave: {
          firstName: "Xima", lastName: "Barlykov", patron: "Blaaa", charm: 1, gender: Gender.MALE
        }}
      ]
  }

  clientArr: ClientToSave[] = [];
}
