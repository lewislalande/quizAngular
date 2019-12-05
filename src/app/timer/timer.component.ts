import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showTime() {
    let countdown = document.getElementById("countdown")
    document.getElementById("start").addEventListener("click", function(){
      let timeleft = 15;
  
      let downloadTimer = setInterval(function function1(){
      countdown.innerHTML = timeleft + 
      "&nbsp"+"seconds remaining";
  
      timeleft -= 1;
      if(timeleft <= 0){
          clearInterval(downloadTimer);
          countdown.innerHTML = "Time is up!"
      }
      }, 1000);
  
      console.log(countdown);
  });
  }

}
