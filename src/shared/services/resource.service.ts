import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class ResourceService {

	constructor(public api: ApiService) {}

	getAll(){
    	return this.api.GET('/resource/get-all');
  	}
}