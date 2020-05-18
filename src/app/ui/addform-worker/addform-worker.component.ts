import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

//import { worker } from 'cluster';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css'],
})
export class AddformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  name: string;
  surname: string;
  type = 0;

  public mask = ['+', /[1-9]/, /[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
  form_workers: FormGroup;

  

  @Output() addWorker = new EventEmitter<MyWorker>();
  

  constructor(private form_build: FormBuilder) {


  }

  ngOnInit(){
     
     this.form_workers = this.form_build.group
    
    ({

      name: new FormControl ("",[Validators.required,]),
      surname: new FormControl("",[Validators.required,]),
      number: new FormControl("",[Validators.required,]),

    })
  }
  
 

  onAddWorker() {

    this.addWorker.emit({
      name: this.form_workers.value.name,
      surname: this.form_workers.value.surname,
      type: this.type,
      number:this.form_workers.value.number
    });
  
  }
  

}
