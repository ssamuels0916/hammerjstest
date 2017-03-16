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
      listName: 'Account Selection',

      visible: true
    },
    {
      id:1,
      listName: 'Portfolio Selection',
   
      visible: false
    },
    {
      id:2,
      listName: 'Personal Details',
     
      visible: false
    },
    {
      id:3,
      listName: 'Deposit Details',
   
      visible: false
    },
    {
      id:4,
      listName: 'Review Sign',
   
      visible: false
    }
  ];

  //action triggered when user swipes
  swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {
    console.log(currentIndex);
    //if out of range
    if (currentIndex > this.navItems.length || currentIndex < 0) return;
    let nextIndex = 0;

    //if swipe right, next nav item
    if(action === this.SWIPE_ACTION.RIGHT){
      const isFirst = currentIndex === 0;
      nextIndex = isFirst ? this.navItems.length - 1 : currentIndex - 1;
    }

    //if swipe left, previous nav item
    if(action === this.SWIPE_ACTION.LEFT) {
      const isLast = currentIndex === this.navItems.length - 1;
      nextIndex = isLast ? 0 : currentIndex + 1;
    }

    // toggle nav item visibility
    let i = 2;
      this.navItems.forEach((x, i) => x.visible = (i === nextIndex));
  }






}
