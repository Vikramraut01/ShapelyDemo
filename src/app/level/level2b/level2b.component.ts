import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-level2b',
  templateUrl: './level2b.component.html',
  styleUrls: ['./level2b.component.css']
})
export class Level2bComponent {



  

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
