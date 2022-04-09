import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  acno=""
  pwd=""
  uname=""
  //register group model creation
  registerForm=this.fb.group({
    //form array create
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]]  //chk string or not

  })
  constructor(private ds:DataService , private router:Router , private fb:FormBuilder  ) { }                                                                //dependency inject means to communicate data between class/component
  ngOnInit(): void {
  }
  register(){
    // alert("register clicked !!!!")      
    // console.log(this.registerForm.get('uname')?.errors);
    var acno=this.registerForm.value.acno
    var pwd= this.registerForm.value.pwd
    var uname=this.registerForm.value.uname
  
  if(this.registerForm.valid){
     //asynchronous
    this.ds.register(acno,pwd,uname).subscribe((result:any)=>{
      if(result){
        alert(result.message)
        this.router.navigateByUrl("")
      }
    },(result)=>{
      alert(result.error.message)
    })
  
  }
  else{
    alert('invalid form')
  }
  }
}












































































