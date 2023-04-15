import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-level3b',
  templateUrl: './level3b.component.html',
  styleUrls: ['./level3b.component.css']
})
export class Level3bComponent {




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
