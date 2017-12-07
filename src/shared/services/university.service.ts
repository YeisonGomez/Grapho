import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class UniverityService {

	constructor(public api: ApiService) {}

	get(id: number){
    	return this.api.GET(`/university/get-all/${ id }`);
  	}
}