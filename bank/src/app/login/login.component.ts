import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
aim="your perfect banking partner"                                         //string interpolation
accno="Account number please"   //class to html data share //prop binding
acno=""                            
pwd=""              
database:any={
    1000:{acno:1000,uname:"rose",password:1000,balance:5000},
    1001:{acno:1001,uname:"tiffu",password:1001,balance:5000},
    1002:{acno:1002,uname:"achu",password:1002,balance:5000}
  }

    //register group model creation
    loginForm=this.fb.group({
      //form array create
      acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
      pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  
    })
  constructor(private routerLogin:Router, private ds:DataService , private fb:FormBuilder) { }            //navigateUrl router setting

  ngOnInit(): void {
  }
  //acno change
  acnoChange(event:any){
    // console.log(event);
    this.acno=event.target.value
    console.log(this.acno);      
  }
  //pwd change
  pwdChange(event:any){
    this.pwd=event.target.value
    console.log(this.pwd);      
  }
  //login
//   login(a:any,p:any){
//     // alert("login clicked !!!!")                                                  //event binding
//     console.log(a);
    
//     var acno=a.value
//     var pwd= p.value
//     let database=this.database
//     if(acno in this.database){
//       if(pwd==database[acno]["password"]){                               //acno index inside database thats way is used []
//         alert("login success")
//       }else{
//         alert("incorrect password")
//       }
//     }else{
//       alert("user doesnot exit")
//     }
//   }
// }
login(){
  // alert("login clicked !!!!")                                                  //event binding
  var acno=this.loginForm.value.acno
  var pwd= this.loginForm.value.pwd
  if(this.loginForm.valid){
    //async call-login
    this.ds.login(acno,pwd).subscribe((result:any)=>{
      if(result){
        localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno))
        localStorage.setItem('currentUname',JSON.stringify(result.currentUname))
        localStorage.setItem('token',JSON.stringify(result.token))
        alert(result.message)
        this.routerLogin.navigateByUrl("dashboard")
      }
    },
    (result)=>{
    alert(result.error.message)
    }
    )
  }
  else{
    alert("invalid user")
  }
}
}