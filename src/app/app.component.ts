import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topic = 'Hammer Js';
  //const for swipe action: left or right
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight'};

  // nav items
  navItems = [
    {
      id:0,
      listName: 'first',

      visible: true
    },
    {
      id:1,
      listName: 'second',
   
      visible: false
    },
    {
      id:2,
      listName: 'third',
     
      visible: false
    },
    {
      id:3,
      listName: 'fourth',
   
      visible: false
    },
    {
      id:4,
      listName: 'fifth',
   
      visible: false
    }
  ];

  //action triggered when user swipes
  swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {

    //if out of range
    if (currentIndex > this.navItems.length || currentIndex < 0) return;

    let nextIndex = 0;

    //if swipe right, next nav item
    if(action === this.SWIPE_ACTION.RIGHT){
      const isLast = currentIndex === this.navItems.length - 1;
      nextIndex = isLast ? 0 : currentIndex + 1;
    }

    //if swipe left, previous nav item
    if(action === this.SWIPE_ACTION.LEFT) {
      const isFirst = currentIndex === 0;
      nextIndex = isFirst ? this.navItems.length - 1 : currentIndex - 1;
    }

    // toggle nav item visibility
    this.navItems.forEach((x, i) => x.visible = (i === nextIndex));
  }






}
