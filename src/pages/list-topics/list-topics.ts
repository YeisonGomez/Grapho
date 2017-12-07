import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TopicService } from '../../shared/services/topic.service';
import { TopicPage } from '../topic/topic';

@Component({
	selector: 'page-list-topics',
	templateUrl: 'list-topics.html',
})
export class ListTopicsPage {

	public topics;

	constructor(public navCtrl: NavController, public navParams: NavParams, private topicService: TopicService) {
	}

	ionViewDidLoad() {
		this.getAll();
	}

	public getAll() {
		this.topicService.getAll()
			.then((data) => {
				if (data.state == 'OK') {
					this.topics = data.result;
				}
			});
	}

	public openPage(topic: number){
		this.navCtrl.push(TopicPage, { topic: topic });
	}

}
