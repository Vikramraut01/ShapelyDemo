import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {




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
