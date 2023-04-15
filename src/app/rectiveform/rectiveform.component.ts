import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators,FormBuilder } from '@angular/forms'; 


@Component({
  selector: 'app-rectiveform',
  templateUrl: './rectiveform.component.html',
  styleUrls: ['./rectiveform.component.css']
})
export class RectiveformComponent {
  
constructor(private fb:FormBuilder){

}

  
loginform  = this.fb.group({
    
  firstName:new FormControl('',[Validators.required,this.Nospace]),
  lastName:new FormControl('',[Validators.required,this.Nospace]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)]),
  });
get email()
{
return this.loginform.get('email');
}
get password()
{
  return this.loginform.get('password');
}
login()
{
  console.warn(this.loginform.value)
}
get firstName()
{
  return this.loginform.get('firstName');
}
get lastName()
{
  return this.loginform.get('lastName');
}
Nospace(controle:FormControl)
{
 if(controle.value.indexOf(' ')!=-1)
 {
  return {'removeSpaces':true}
 }
 return null;

}


}
