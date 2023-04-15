import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alignment',
  templateUrl: './alignment.component.html',
  styleUrls: ['./alignment.component.css']
})
export class AlignmentComponent {

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
