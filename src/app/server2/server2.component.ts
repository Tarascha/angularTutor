import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']
})
export class Server2Component implements OnInit {
  foodlist = {chicken: 0, beef: 0, duck: 0, fish: 0,
              tomato: 0, potato: 0, lettuce: 0, broccoli: 0
              };
  foodmap = {chicken: '鸡丁', beef: '牛肉片', duck: '鸭肉', fish: '鱼片',
    tomato: '西红柿', potato: '土豆丝', lettuce: '生菜片', broccoli: '西兰花'};
  dishexists = false;
  dishname = '空空如也';
  othermetl: string;
  addfood(x) {
    this.foodlist[x]++;
  }
  resetfood(x) {
    this.foodlist[x] = 0;
  }
  makedish() {
    this.dishexists = false;
    if (this.othermetl !== undefined && this.othermetl !== "") {
      this.dishexists = true;
      this.dishname = this.othermetl;
      for (let food in this.foodlist) {
        if (this.foodlist[food] > 0) {
          this.dishname += '炒';
          this.dishname += this.foodmap[food];
        }
      }
      return;

    }
    if (this.foodlist.chicken > 0 && this.foodlist.chicken < 3 ) {
      if (this.foodlist.tomato > 0 && this.foodlist.potato > 0) {
        this.dishexists = true;
        this.dishname = '小锅鸡肉乱炖';
      } else if (this.foodlist.potato > 0) {
        this.dishexists = true;
        this.dishname = '小盘鸡';
      } else if (this.foodlist.tomato > 0) {
        this.dishexists = true;
        this.dishname = '小份番茄鸡肉';
      }
      return;
    }

    if (this.foodlist.chicken >= 3) {
      if (this.foodlist.tomato > 0 && this.foodlist.potato > 0){
        this.dishexists = true;
        this.dishname = '大锅鸡肉乱炖';
      } else if (this.foodlist.potato > 0) {
        this.dishexists = true;
        this.dishname = '大盘鸡';
      } else if (this.foodlist.tomato > 0) {
        this.dishexists = true;
        this.dishname = '大份番茄鸡肉';
      }
      return;
    }

    if (this.foodlist.beef > 0) {
      if (this.foodlist.broccoli > 0) {
        this.dishexists = true;
        this.dishname = '西兰花爆炒牛肉丝';
      } else if (this.foodlist.potato > 0){
        this.dishexists = true;
        this.dishname = '土豆牛肉盖饭';
      }
      return;
    }

    if (this.foodlist.duck > 0 && this.foodlist.lettuce > 0) {
      this.dishexists = true;
      this.dishname = '鸭肉刺身？？';
      return;
    }

    if (this.foodlist.fish > 0 && this.foodlist.lettuce > 0) {
      this.dishexists = true;
      this.dishname = '生鱼片';
      return;
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
