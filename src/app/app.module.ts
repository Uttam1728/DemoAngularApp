import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DataBindingDemoComponent } from './data-binding-demo/data-binding-demo.component';
import { NgFordemoComponent } from './ng-fordemo/ng-fordemo.component';
import { RecordsService } from './records.service'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path : 'ngfor',
    component : NgFordemoComponent 
  },
  {
    path : 'databind',
    component : DataBindingDemoComponent 
  }
]

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DataBindingDemoComponent,
    NgFordemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
