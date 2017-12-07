import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from './services/api.service';
import { ResourceService } from './services/resource.service';
import { TopicService } from './services/topic.service';
import { UniverityService } from './services/university.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  providers: [
  	ApiService,
  	UniverityService,
  	ResourceService,
  	TopicService
  ]
})
export class SharedModule { }
