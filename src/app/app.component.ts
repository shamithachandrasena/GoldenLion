import { Component } from '@angular/core';

import { EmbedVideoService } from 'ngx-embed-video';
import { AUTO_STYLE } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vimeoUrl = "https://vimeo.com/197933516";
  youtubeUrl = "https://www.youtube.com/watch?v=iHhcHTlGtRs";
  dailymotionUrl = "https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport";
 
  vimeoId = "197933516";
  youtubeId = "iHhcHTlGtRs";
  dailymotionId = "x20qnej";

  iframe_html: any;
 videoLink;
  constructor(
    private embedService: EmbedVideoService
  ) {
    console.log(this.embedService.embed(this.vimeoUrl));
    console.log(this.embedService.embed(this.youtubeUrl));
    console.log(this.embedService.embed(this.dailymotionUrl));
 
    console.log(this.embedService.embed_vimeo(this.vimeoId));
    console.log(this.embedService.embed_youtube(this.youtubeId));
    console.log(this.embedService.embed_dailymotion(this.dailymotionId));

    this.iframe_html = this.embedService.embed(this.youtubeUrl);

    console.log("hey"+this.iframe_html);
  } 
  
  // playVideo() {
  //   var video = '<iframe allowfullscreen src="' + this.data-video+ '"></iframe>';
  // });
  //,{ attr: { width: 800, height: 450 }}
}



//