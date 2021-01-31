import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface MyData{
  obj : Object[]
}



@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private _http: HttpClient) { }

  getData(){
    return this._http.get<MyData>('/api/data.php')
    
  }
}
