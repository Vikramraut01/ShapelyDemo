import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-level3a',
  templateUrl: './level3a.component.html',
  styleUrls: ['./level3a.component.css']
})
export class Level3aComponent {




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
