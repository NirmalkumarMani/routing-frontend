import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { DataService } from '../data.service';
import { EmailValidator } from '@angular/forms';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

  export class RegisterComponent implements OnInit {
  private model: Register;
  private register: FormGroup;
  constructor(private dataservice : DataService) { 
 this.register = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
        zipcode:new FormControl ('',Validators.required),
      location: new FormControl('', Validators.required)
    });
  }
// export class RegisterComponent implements OnInit {
// private model: Register;
//   private register: FormGroup;
//   constructor(private dataservice : DataService,private formBuilder: FormBuilder) { 
//  this.register = this.formBuilder.group({
//    name: [null, Validators.required],
//       email: [null, [Validators.required, Validators.email]],
//        zipCode: [null, Validators.required],
//       location: [null, Validators.required],
//         });
//   }
ngOnInit() {}
  
  private onSubmit(form): void {
    this.model = form.value;
    console.log(JSON.stringify(this.model));
this.dataservice.create(this.model);
this.register.reset(form);
  }
  
  reset()
  {
    this.register.reset;
  }
//  testFunc(zipcode){
//    console.log(zipcode);
//    this.dataservice.getZipcode(zipcode);
//  }
}



