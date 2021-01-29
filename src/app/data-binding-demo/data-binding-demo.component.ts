import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-demo',
  templateUrl: './data-binding-demo.component.html',
  styleUrls: ['./data-binding-demo.component.css']
})
export class DataBindingDemoComponent implements OnInit {
  
  constructor() { }
  // sourse to target
  bindthis = "bindthis"
  enable = !true
 // two way 
  twoway = "twoway"
  ngmodeldemo = ''
  ngOnInit(): void {
      setInterval(()=>{
        this.bindthis = Math.random().toString()
      },500)

  }

  // target to sourse
  clickbuttonEvent(){
    this.enable = !this.enable
    console.log("Button Clicked")
  }

  //twowayinput 
  twowayinput(e){
    this.twoway = e.target.value
    console.log(e.target.value)
  }


}
