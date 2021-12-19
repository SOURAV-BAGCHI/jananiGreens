import { Component, OnInit } from '@angular/core';
// import { Media,Config, LayoutStyle } from 'ng-opengallery/public-api';
import { Media, Config, LayoutStyle } from 'ng-opengallery';
// import { Media, Config, LayoutStyle } from 'ng-opengallery/src/public-api';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }
  title = 'ng-opengallery';
  data: Media[] = [];
  config:Config={
    diaporamaDuration: 10,
    layout: LayoutStyle.SIMPLE,
    prefMediaHeight: 350,
    spacing: 3,
    viewerEnabled: true,
    enableAutoPlay: true
  };

  config0:Config={
    diaporamaDuration: 13,
    layout: LayoutStyle.CAROUSEL,
    prefMediaHeight: 350,
    spacing: 3,
    viewerEnabled: true,
    enableAutoPlay: false
  };

  ngOnInit(): void {

    this.loadData();

  }

  loadData()
  {
    this.data=[
      new Media('assets/img/1.jpg','Gallery Pics'),
      new Media('assets/img/2.jpg','Gallery Pics'),
      new Media('assets/img/3.jpg','Gallery Pics'),
      // new Media('https://media.cntraveller.in/wp-content/uploads/2018/05/Shantiniketan2.jpg', 'Gallery Pics'),
      // new Media('https://static.toiimg.com/photo/56001286.cms', 'Gallery Pics'),
      new Media('assets/img/4.jpg','Gallery Pics'),
      new Media('assets/img/5.jpg', 'Gallery Pics'),
      new Media('assets/img/6.jpg','Gallery Pics'),
      new Media('assets/img/7.jpg','Gallery Pics'),
      new Media('assets/img/8.jpg','Gallery Pics'),
      new Media('assets/img/9.jpg','Gallery Pics'),
      new Media('assets/img/10.jpg','Gallery Pics'),
      new Media('assets/img/11.jpg','Gallery Pics'),
      new Media('assets/img/12.jpg','Gallery Pics'),
      new Media('assets/img/13.jpg','Gallery Pics'),
      new Media('assets/img/14.jpg','Gallery Pics'),
      new Media('assets/img/15.jpg','Gallery Pics'),
      new Media('assets/img/16.jpg','Gallery Pics'),
      new Media('assets/img/17.jpg','Gallery Pics'),
      new Media('assets/img/18.jpg','Gallery Pics'),
      new Media('assets/img/19.jpg','Gallery Pics'),
      new Media('assets/img/20.jpg','Gallery Pics')
    ];
  }

  onChange(event) {
    // console.log('CHANGE event: ' + event);
  }
  onError(event) {
    // console.log('ERROR event: ' + event);
  }
  onSelection(event) {
    // console.log('SELECTION event: ' + event);
  }
  onOpen(event) {
    // console.log('OPEN event: ' + event);
  }
}
