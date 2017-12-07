import { Injectable } from '@angular/core';
import { UniverityService } from '../services/university.service';

@Injectable()
export class University {
	private id: number;
	public name: string;
	public url_resource: string;

	constructor(private universityService: UniverityService){

	}

	public get(id: number): any{
		return this.universityService.get(id)
		.subscribe((data) => {
			console.log(data);
			return data;
		}, (error) => {
			console.log(error);
			return error;
		});
	}

}