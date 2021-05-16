import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallTrackRoutingModule } from './call-track-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NewCallComponent } from './components/new-call/new-call.component';
import { SearchCallComponent } from './components/search-call/search-call.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [HomeComponent, NewCallComponent, SearchCallComponent],
  imports: [
    CommonModule,
    CallTrackRoutingModule,MatTabsModule,MatTableModule,MatIconModule,MatFormFieldModule, ReactiveFormsModule
    
  ]
})
export class CallTrackModule { }
