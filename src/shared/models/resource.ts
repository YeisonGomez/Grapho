import { Injectable } from '@angular/core';
import { ResourceService } from '../services/resource.service';
import {Edge} from './edge';

@Injectable()
export class Resource {

	private id: number;
	public name: string;
	public object: any;
	private fk_resource: Resource;
	private edge: Edge;

	constructor(private resourceService: ResourceService){

	}

	public getAll(id_university: number): any{
		return this.resourceService.getAll(id_university)
		.then((data) => {
			console.log(data);
			return data;
		});
	}

}