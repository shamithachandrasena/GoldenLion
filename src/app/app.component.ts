import { Component,ViewChild,ElementRef,Renderer2 } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';
import { AUTO_STYLE } from '@angular/core/src/animation/dsl';
import { DragScrollModule }from 'ngx-drag-scroll';
import { YouTubeImageLink } from './../assets/YouTubeImageLink';
import { DragScrollDirective } from 'ngx-drag-scroll';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [MatIconRegistry]
})
export class AppComponent {
  vimeoUrl = "https://vimeo.com/197933516";
  youtubeUrl = "https://youtu.be/CtioBFx4Iz0";
  dailymotionUrl = "https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport";
 
  vimeoId = "197933516";
  youtubeId = "iHhcHTlGtRs";
  dailymotionId = "x20qnej";

  iframe_html: any;
  youtubeImage;

  hideScrollbar;
  disabled;
  xDisabled;
  yDisabled;
  imagelist = [
    'luke.png',
    'chubaka.png',
    'boba.png',
    'c3po.png' ,
    'leia.png',
    'obi.png',
    'r2d2.png',
    'storm.png',
    'varder.png',
    'yoda.png',
    'yolo.png'
  ];
  leftNavDisabled = false;
  rightNavDisabled = false;
  dragScrollDom: any;
  dragScrollRef: ElementRef;
  dragScroll: DragScrollDirective;
  @ViewChild('nav', {read: DragScrollDirective}) ds: DragScrollDirective;
  
  constructor(
    private embedService: EmbedVideoService,matIconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    matIconRegistry
        .addSvgIcon('github',
            sanitizer.bypassSecurityTrustResourceUrl('/assets/img/github.svg'))
        .registerFontClassAlias('fontawesome', 'fa');

    this.iframe_html = this.embedService.embed(this.youtubeUrl, {attr: { width: "100%", background: "green"}});
    this.youtubeImage=this.embedService.embed_image(this.youtubeUrl, { image: 'mqdefault' });
    
    console.log(this.youtubeImage['__zone_symbol__value']['html']);
    console.log(this.youtubeImage['__zone_symbol__value']['link']);
  } 

  
  
  clickItem(item) {
    console.log('itmen clicked');
  }

  remove() {
    this.imagelist.pop();
  }

  toggleHideSB() {
    this.hideScrollbar = !this.hideScrollbar;
  }

  toggleDisable() {
    this.disabled = !this.disabled;
  }
  toggleXDisable() {
    this.xDisabled = !this.xDisabled;
  }
  toggleYDisable() {
    this.yDisabled = !this.yDisabled;
  }

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  leftBoundStat(reachesLeftBound: boolean) {
    this.leftNavDisabled = reachesLeftBound;
  }

  rightBoundStat(reachesRightBound: boolean) {
    this.rightNavDisabled = reachesRightBound;
  }

}

