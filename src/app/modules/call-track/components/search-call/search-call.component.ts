import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CallData } from '../../shared/call-data';
import { CallLogService } from '../../shared/call-log.service';

@Component({
  selector: 'app-search-call',
  templateUrl: './search-call.component.html',
  styleUrls: ['./search-call.component.scss']
})
export class SearchCallComponent implements OnInit,OnDestroy {
  
  displayedColumns: string[] = ['caller', 'timeOfCall', 'callTitle','status'];
  //dataSource = calldata;
  dataSource : CallData[];
  subscription: Subscription;
  constructor(private callLogSvc: CallLogService) { }

  ngOnInit(): void {
    
   this.getCallData();
  }
  getCallData(): void {
    this.callLogSvc.getCallData()
      .subscribe(calls => this.dataSource = calls.slice(1, 5));
  }
  searchClicked(event, v: string) {
    this.subscription = this.callLogSvc.searchCallData(v).subscribe(calls=> this.dataSource =calls)
  }
  searchEnterClicked(event, v: string) {
    
    event.preventDefault();
    event.stopPropagation();
    event.target.blur();
  }
  ngOnDestroy() {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
