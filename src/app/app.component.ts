import { Component } from '@angular/core';

function functionlog(target, name, descriptor){
  console.log("target",target,"name", name, "descriptor", descriptor)

  // store original function
  let orignal = descriptor.value
  // manipulate that
  descriptor.value = function(...arg){
    console.log("arguments passed are",arg)
    let result = orignal.apply(this,arg)
    console.log("call from log",result)
    return result

  }
  // return it
  return descriptor
}

function classlog(className){
  console.log(typeof(className))
  return (...args) => {
    console.log("from classlog decorator",args)
    return new className(...args)
  }
}


/// @classlog
class Democlass {
  constructor(p1,p2) {
    console.log("call from demo class",p1,p2)
  }
}

/// const Myclass = new Democlass(2,3)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'DemoAngularApp';

  constructor(a,b){
    console.log("call from constructor",this.aSimpleMethod(5,2))
  }

@functionlog
aSimpleMethod(a,b){
  return a*b
}

}

