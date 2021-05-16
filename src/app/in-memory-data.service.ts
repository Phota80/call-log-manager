import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
//import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const calldata = [
      { id: 1, caller: 'Dr Nice', timeOfCall: '01/01/2020', callTitle: 'How do I create a tkt?', callDesc:'How do i do?', status: 'Open' },
      { id: 2, caller: 'Dr Hero', timeOfCall: '01/01/2020', callTitle: 'How do I create a tkt?', callDesc:'How do i do?', status: 'Open' },
      { id: 3, caller: 'Dr Bug', timeOfCall: '01/01/2020', callTitle: 'How do I create a tkt?', callDesc:'How do i do?', status: 'Open' },
      { id: 4, caller: 'Dr Defect', timeOfCall: '01/01/2020', callTitle: 'How do I create a tkt?', callDesc:'How do i do?', status: 'Open' },
      { id: 5, caller: 'Dr Call', timeOfCall: '01/01/2020', callTitle: 'How do I create a tkt?', callDesc:'How do i do?', status: 'Open' }
    ];
    return {calldata};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(heroes: Hero[]): number {
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  // }
}