import { Component } from '@angular/core';

@Component({
  selector: 'app-createserver',
  templateUrl: './createserver.component.html',
  styleUrls: ['./createserver.component.css']
})
export class CreateserverComponent {
  username='';
  
  onCreateServer(){
   this.username=''
  }
}
