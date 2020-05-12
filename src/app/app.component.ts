import { Component } from '@angular/core';
import {
  MyWorker,
  MyWorkersDatabase,
  MyWorkerType,
} from './shared/worker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Список сотрудников';
  workers: MyWorker[] = MyWorkersDatabase;
  myWorkerType = MyWorkerType;

  getByType(type: number) {
    return this.workers.filter((worker) => worker.type === type);
  }

  onDeleteById(id: number) {
    let index = this.workers.findIndex((worker) => worker.id === id);
    if (index !== -1) {
      this.workers.splice(index, 1);
    }
  }




  onAddWorker(worker) {


    let id =
      this.workers.length > 0 ? this.workers[this.workers.length - 1].id + 1 : 0;
    worker.id = id;
    this.workers.push(worker);
    

  }
  
  onChangeWorker(worker){
    console.log(worker)
    worker.name=prompt("Измените имя",worker.name);
    worker.surname=prompt("Измените фамилию",worker.surname);
   worker.type=prompt("Измените профессию \n 1.Программист \n 2.Дизайнер \n 3.Рекламщик \n 4.Менеджер",(worker.type+1));
   console.log(parseInt(worker.type))
   if((worker.type<1)||(worker.type>4)||(worker.name=='')||(worker.surname=='')){
      alert("Проверьте введенные значения")
    
   }
   worker.type--;
    
    
    
}
}
