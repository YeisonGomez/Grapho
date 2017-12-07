import { Injectable } from '@angular/core';
import { Picture } from './picture';
import { TopicService } from '../services/topic.service';

@Injectable()
export class Topic {

	private id: number;
	public name: string;
	public description: string;
	public pictures: Picture[];

	constructor(private topicService: TopicService){
	}

	public getAll(){
		this.topicService.getAll()
		.then((data) => {
			return data;
		});
	}

}