export class Register {
  id: number;
  name: string;
  email: string;
  zipcode: number;
  location:String;
}
/* import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
 
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ModalService {
 
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) {}
 
  getZipcode( zipcode : number)romise<any> {
    console.log(zipcode);
    return this.http.get("http://maps.googleapis.com/maps/api/geocode/json?address=" + zipcode)
      .toPromise()
      .then(data =>data.json())
      .catch(this.handleError);
       
  }
  private handleError(error: any): Promise<any> {
    console.error('Error', error); 
    return Promise.reject(error.message || error);
  }
} */
