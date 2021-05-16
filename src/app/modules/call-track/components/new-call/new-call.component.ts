import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CallData } from '../../shared/call-data';
import { CallLogService } from '../../shared/call-log.service';

@Component({
  selector: 'app-new-call',
  templateUrl: './new-call.component.html',
  styleUrls: ['./new-call.component.scss']
})
export class NewCallComponent implements OnInit {
  addCallLogForm: FormGroup;
  constructor(private fb: FormBuilder,private callLogSvc: CallLogService, private router: Router,) { }

  ngOnInit(): void {
    //TODO we can add requireed field validation 
    this.addCallLogForm = this.fb.group({
      caller: [''],
      callTitle: [''],      
      callDesc:[' '],
      timeOfCall:[''],
      status:[''] 
    }); 
  }
  onSubmit(obj, infoForm: FormGroup){
    const callInfo = new CallData();
    callInfo.id= 20;
    callInfo.caller=infoForm.value.caller;
    callInfo.callTitle = infoForm.value.callTitle;
    callInfo.status = 'Open';
    callInfo.callDesc = infoForm.value.callDesc;
    this.callLogSvc.addCallLog(callInfo)
    .subscribe(calls => {
      //TODO.. emit event & push to callsouce & navigate route to search call list page
      //this.calldata.push(calls);
     
    //this.router.navigate(['/calltrack']);
    window.location.reload();
    });
  }
  cancelForm(){
    //TODO navigate to search list
    //this.router.navigate(['/calltrack']);
    window.location.reload();
  }

}
