import {Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
 import {IEmployee} from './employee';
 //import 'rxjs/add/operator/catch';

 /*
 @Injectable  decoratare

Injectable decoratore tells Angular  that this service might have itself 
dependencies .If we want to inject  service into another service  Injectable
decoratare is must.


-----------Observables-------
An Observable is a sequance of items that arrive anynchronously over time.
HTTP call is a single item instead of sequance of items.
Single item is a HTTP response.

An Observable is a HTTP response that arrives anynchronously.
For provide it to  the component it we need convert  it into the employee array.

 */

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   private _url: string = "/assets/data/employees.json";

  constructor(private http: HttpClient) { }

  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
     // return [
    //   {"id":1 , "name": "Andrew", "age": 30},
    //   {"id":2 , "name": "Brandon", "age": 25},
    //   {"id":3 , "name": "John", "age": 28}
    // ];
  }

}
