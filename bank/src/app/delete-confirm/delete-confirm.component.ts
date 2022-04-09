import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {
@Input() item:string | undefined                                                 //input decorator delete button // child view display //parent to child 
@Output() onCancel =new EventEmitter()                                         //parent view // cancel button //child to parent
@Output() onDelete = new EventEmitter()
constructor() { }

  ngOnInit(): void {
  }
cancel(){
 this.onCancel.emit()
}
delete(){
  this.onDelete.emit(this.item)
}
}
