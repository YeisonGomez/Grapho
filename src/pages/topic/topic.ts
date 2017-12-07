import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TopicService } from '../../shared/services/topic.service';

@Component({
  selector: 'page-topic',
  templateUrl: 'topic.html',
})
export class TopicPage {

	public topicDaddy;
	public topic;
	public slideActually: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private topicService: TopicService) {
  	this.topicDaddy = this.navParams.data.topic;
  	this.getTopic();
  }

  ionViewDidLoad() {
  }

  public getTopic() {
		this.topicService.getDetail(this.topicDaddy.id)
			.then((data) => {
				if (data.state == 'OK') {
					this.topic = data.result;
					this.topic.map((d) => {
						d.imagen = JSON.parse(d.imagen);
						return d;
					});
				}
			});
	}

	public slideChanged(index){
		this.slideActually = index.realIndex;
	}


}
