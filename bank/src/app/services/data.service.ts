import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options={
  headers:new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentAcno:any                         //currently login acno 
  currentUname:any
  database:any={
    1000:{acno:1000,uname:"rose",password:1000,balance:5000,transaction:[]},                    
    1001:{acno:1001,uname:"tiffu",password:1001,balance:5000,transaction:[]},
    1002:{acno:1002,uname:"achu",password:1002,balance:5000,transaction:[]}
  }

  constructor(private http:HttpClient) { 
    //this.getData()
   }
  //to store data in local storage
  storeData(){
    localStorage.setItem("database",JSON.stringify(this.database))
    if(this.currentAcno){
      localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
    }
    if(this.currentUname){
      localStorage.setItem("currentUname",JSON.stringify(this.currentUname))
    }
  }
//to get data from local storage i.e to display data perminently 
  getData(){
   if(localStorage.getItem("database")){
     this.database = JSON.parse(localStorage.getItem("database")||'')
   }
   if(localStorage.getItem("currentAcno")){
    this.currentAcno = JSON.parse(localStorage.getItem("currentAcno")||'')
  }
  if(localStorage.getItem("currentUname")){
    this.currentUname = JSON.parse(localStorage.getItem("currentUname")||'')
  }
  }
  //register
  register(acno:any,pwd:any,uname:any){
    //json data
    const data ={
      acno,pwd,uname
    }
    //register API 
    return this.http.post('http://localhost:3000/register',data)

    //let database=this.database
    //if(acno in database){
      //return false
    //}else{
      //database[acno]={
    //     acno,
    //     uname,
    //     password:pwd,
    //     balance:0,
    //     transaction:[]
    //   }
    //   this.storeData()                                         //store data into local storage
    //   return true
    // }
  }
//login  /////
  login(acno:any,pwd:any){
    //rqst body
    const data ={
      acno,pwd
    }
    //login api 
    return this.http.post('http://localhost:3000/login',data)

    // let database=this.database
    // if(acno in database){
    //   if(password==database[acno]["password"]){                               //acno index inside database thats way is used []
    //     this.currentAcno = acno                                  //current acno fetch
    //    this.currentUname= database[acno]["uname"]
    //    this.storeData()                                               //store data into local storage
    //     return true
    //   }else{
    //     alert("incorrect password")
    //     return false
    //   }
    // }else{
    //   alert("user doesnot exit")
    //   return false
    // }
  }
  //deposite
  deposit(acno:any,password:any,amt:any){
    const data ={
      acno,password,amt
    }
  
    //deposit api
    return this.http.post('http://localhost:3000/deposit',data,this.getOPtions())

  //   var amount=parseInt(amt)  // converting string into num
  // let database = this.database
  // if(acno in database){
  //   if(password==database[acno]["password"]){
  //          database[acno]["balance"]+=amount    
  //          database[acno]["transaction"].push({
  //            amount:amount,                           //key:value
  //            type:"CREDIT"
  //          })
  //          console.log(database);
  //          this.storeData()                           //store data into local storage
  //       return database[acno]["balance"]
  //   }else{
  //      alert("incorrect password")
  //      return false
  // }
  // }else{
  //   alert("user doesnot exit")
  //   return false
  // }
  }
  //to add token in request header
  getOPtions(){
      //token fetch
      const token = JSON.parse(localStorage.getItem('token')||'')
      //to create request headers
      let headers = new HttpHeaders()
      if(token){
         headers=headers.append('x-access-token',token)
         options.headers=headers
      }
      return options
  }
   //withdraw 
  withdraw(acno:any,password:any,amt:any){
    //rqst body
    const data ={
      acno,password,amt
    }
    //withdraw api
    return this.http.post('http://localhost:3000/withdraw',data,this.getOPtions())

//     var amount=parseInt(amt)  //string num convert
//   let database = this.database
//   if(acno in database){
//     if(password==database[acno]["password"]){
//       if(database[acno]["balance"]>amount){
//            database[acno]["balance"]-=amount

//            database[acno]["transaction"].push({
//             amount:amount,                           //key:value
//             type:"DEBIT"
//           })
//           console.log(database);
//           this.storeData()                           //store data into local storage
          
//         return database[acno]["balance"]
//     }else{
//        alert("Insufficient Balance")
//        return false
//   }
// }else{
//     alert("incorrect password")
//     return false
//   }
//   }
//   else{
//     alert("user doesnot exit")
//     return false
//   }
}

//transaction 
getTransaction(acno:any){
const data ={
  acno
}
//transaction api 
return this.http.post('http://localhost:3000/transaction',data,this.getOPtions())

  // return this.database[acno]["transaction"]


}
//delete acc 
delete(acno:any){
  //deleteAccApi
  return this.http.delete('http://localhost:3000/deleteAcc/'+acno,this.getOPtions())
}

}

