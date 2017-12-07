import { Injectable } from '@angular/core';
import { UniverityService } from '../services/university.service';
import { Resource } from './resource';

@Injectable()
export class University {

	private id: number;
	public name: string;
	public url_resource: string;
	private resources: Resource[];

	constructor(private universityService: UniverityService){

	}

	public get(id: number): any{
		return this.universityService.get(id)
		.then((data) => {
			console.log(data);
			return data;
		});
	}

}