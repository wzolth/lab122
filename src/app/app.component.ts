import { Component, Output, EventEmitter } from '@angular/core';
import {
  MyWorker,
  MyWorkersDatabase,
  MyWorkerType,
} from './shared/worker.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  @Output() changeWorker = new EventEmitter<MyWorker>();
  title = 'Список сотрудников';
  workers: MyWorker[] = MyWorkersDatabase;
  myWorkerType = MyWorkerType;
   formChanger = new FormGroup({
    name: new FormControl(),
    surname: new FormControl(),
    type: new FormControl(),
    number: new FormControl()
  });
  public mask = ['+', /[1-9]/, /[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
  getByType(type: number) {
    return this.workers.filter((worker) => worker.type === type);
  }

  onDeleteById(id: number) {
    let index = this.workers.findIndex((worker) => worker.id === id);
    if (index !== -1) {
      this.workers.splice(index, 1);
    }
  }

  constructor(private form_build: FormBuilder, public activeModal: NgbActiveModal) { }


  onAddWorker(worker) {


    let id =
      this.workers.length > 0 ? this.workers[this.workers.length - 1].id + 1 : 0;
    worker.id = id;
    this.workers.push(worker);
    

  }
   showCover() {
    let coverDiv = document.createElement('div');
    coverDiv.id = 'cover-div';

    // убираем возможность прокрутки страницы во время показа модального окна с формой
    document.body.style.overflowY = 'hidden';

    document.body.append(coverDiv);
  }

 

   onChangeWorker(worker){
     
    let numCheck = /^[+,0-9]+$/;
    this.formChanger = this.form_build.group
    
    

      ({

        name: new FormControl(worker.name, [Validators.required,]),
        surname: new FormControl(worker.surname, [Validators.required,]),
        type: new FormControl(worker.type, [Validators.required,]),
        number: new FormControl((worker.number), [Validators.pattern(numCheck),Validators.required])
      })
    document.getElementsByTagName("dialog")[0].showModal();
    let but=document.getElementById("ok");
    but.onclick=function(){
      worker.name=(<HTMLInputElement>document.getElementById("DropdownName")).value;
      worker.surname=(<HTMLInputElement>document.getElementById("DropdownSurname")).value;
      worker.number=(<HTMLInputElement>document.getElementById("DropdownNumber")).value;
      worker.type=parseInt((<HTMLInputElement>document.getElementById("DropdownType")).value);
      document.getElementsByTagName("dialog")[0].close();
    }
      

    console.log(this.workers)
  //    console.log(worker)
  // worker.name=prompt("Измените имя",worker.name);
  //    worker.surname=prompt("Измените фамилию",worker.surname);
  //   worker.type=prompt("Измените профессию \n 1.Программист \n 2.Дизайнер \n 3.Рекламщик \n 4.Менеджер",(worker.type+1));
  //   console.log(parseInt(worker.type))
  //   worker.number=prompt("Измените номер телефона, пример номера: +79160884519",worker.number);



  //   if((worker.type<1)||(worker.type>4)||(worker.name=='')||(worker.surname=='')){
  //     alert("Проверьте введенные значения")
  //    this.onChangeWorker(worker)
  //  }
  //   worker.type--;
    
    
    
 }

 }
