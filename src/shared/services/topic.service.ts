import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class TopicService {

	constructor(public api: ApiService) {}

	getAll(){
    	return this.api.GET('/topic/get-all');
  	}
}