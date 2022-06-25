import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngForDirectives';

  users = ['Heron','Harun','Nayan','Zayan'];
  userDetails = [
    {name:"Heron",email:"heron@gmail.com",address:"Dhaka"},
    {name:"Harun",email:"harun@gmail.com",address:"Dhaka"},
    {name:"Nayan",email:"nayan@gmail.com",address:"Dhaka"},
    {name:"Zayan",email:"zayan@gmail.com",address:"Dhaka"}
  ]
}
