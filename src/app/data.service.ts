import { Injectable } from '@angular/core';
import { Headers, Http,RequestOptions  } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Register } from './register';

import 'rxjs/add/operator/toPromise';



@Injectable()
export class DataService {
private customersUrl = 'http://localhost:8080/register/createRegister';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

create(register: Register): Promise<Register> {
  console.log(register);
     return this.http
   .post(this.customersUrl,register, {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Register)
      .catch(this.handleError);
  }
   
  // getZipcode( zipcode : number):Promise<any> {
  //   console.log(zipcode);
  //   return this.http.get("http://maps.googleapis.com/maps/api/geocode/json?address=" + zipcode)
  //     .toPromise()
  //     .then(data =>console.log(data.text()))
  //     .catch(this.handleError);
       
  // }
   private handleError(error: any): Promise<any> {
    console.error('Error', error); 
    return Promise.reject(error.message || error);
  }
}


