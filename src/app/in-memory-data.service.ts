import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const calldata = [
      { id: 1, caller: 'Dr Nice', timeOfCall: '01/01/2020', callTitle: 'How do I create a tkt?', callDesc:'How do i do?', status: 'Open' },
      { id: 2, caller: 'Dr Hero', timeOfCall: '01/01/2020', callTitle: 'Issue with Outlook', callDesc:'Issue with Outlook. What do i do?', status: 'Open' },
      { id: 3, caller: 'Bug Bunny', timeOfCall: '01/01/2020', callTitle: 'Not able to connect to VPN', callDesc:'Not able to connect to VPN.How do i do?', status: 'Open' },
      { id: 4, caller: 'Daffy Duck', timeOfCall: '01/01/2020', callTitle: 'Teams is not refreshing', callDesc:'Teams is not refreshing', status: 'Close' },
      { id: 5, caller: 'Duck Bunny', timeOfCall: '05/01/2021', callTitle: 'Not able to move Jira tkt', callDesc:'How do i do?', status: 'Progress' },
      { id: 6, caller: 'Red Duck', timeOfCall: '01/01/2020', callTitle: 'Teams is not refreshing', callDesc:'Teams is not refreshing', status: 'Close' }
    ];
    return {calldata};
  }  
}