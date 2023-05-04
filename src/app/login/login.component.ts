import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   data="Your perfect banking partner"
   placeHolderData="enter acno"

  constructor(){ }
  ngOnInit(): void {
     
  }
  login(){
    console.log("this.uname,this.psw");
    //alert(this.ds.sdata)
    //alert(this.ds.checkData())
  }
  unameChange(event:any){
  console.log(event.target.value);
  }
}
