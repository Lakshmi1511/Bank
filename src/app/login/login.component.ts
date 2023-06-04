import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   data="Your perfect banking partner"
   placeHolderData="enter acno"
//model
loginForm=this.fb.group({
  acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
  psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
})
 

  constructor(private rout:Router,private fb:FormBuilder,private ds:DataService,private router:Router){ }
  ngOnInit(): void {
     
  }
  login(){
    if(this.loginForm.valid){
      var path=this.loginForm.value
      this.ds.loginApi(path.acno,path.psw).subscribe((result:any)=>{
       
        //store token in local storage
        localStorage.setItem("token",JSON.stringify(result.token))

        alert(result.message)
        this.rout.navigateByUrl('home')
       // console.log(result);
       localStorage.setItem("currentAcno",result.currentAcno)
       localStorage.setItem("currentUser",result.currentUser)
        
      },
      result=>{
        alert(result.error.message)
      })
      
    }
    else{
      alert('invalid form')
    }
   // console.log("this.uname,this.psw");
    this.rout.navigateByUrl('home')
   
  }

}
