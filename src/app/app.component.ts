import { Component } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm }  from '@angular/forms';
// import { NgForm } from '@angular/forms';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'project_name';
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  count=0
  counter(typy:string){
   typy==='add'? this.count++:this.count--;
  }
  users =[
    {name:'deepak',phone:'7692959680'},
    {name:'sunil',phone:'769295968'},
    {name:'sumit',phone:'769295680'},
    {name:'pravin',phone:'769295980'},
    {name:'kundan',phone:'769259680'},
    
  ]
  userData:any={};

  getData(data:NgForm){
    console.warn(data)
    this.userData=data
  }
  // toggle element
  displya=true;
  toggle()
  {
this.displya=!this.displya;
  }

}
