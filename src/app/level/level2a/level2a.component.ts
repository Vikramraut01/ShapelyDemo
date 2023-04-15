import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-level2a',
  templateUrl: './level2a.component.html',
  styleUrls: ['./level2a.component.css']
})
export class Level2aComponent {



  

  login=new FormGroup ({
    name:new FormControl(''),
    mail:new FormControl(''),
    web:new FormControl(''),
    comment:new FormControl('')
  })
  
  send()
  {
  console.log(this.login.value)
  
  }
  

}
