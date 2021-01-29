import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DataBindingDemoComponent } from './data-binding-demo/data-binding-demo.component';
import { NgFordemoComponent } from './ng-fordemo/ng-fordemo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DataBindingDemoComponent,
    NgFordemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
