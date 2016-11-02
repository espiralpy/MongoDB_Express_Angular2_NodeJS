import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService{

  constructor(private http:Http){
    console.log('Task Service Initialized...');
  }

  getTasks(){
    return this.http.get('http://127.0.0.1:5001/api/tasks/')
      .map(res => res.json());
  }

  addTask(newTask){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://127.0.0.1:5001/api/task', JSON.stringify(newTask), {headers : headers})
      .map(res => res.json());
  }

  deleteTask(id){
    return this.http.delete('http://127.0.0.1:5001/api/task/' + id)
      .map(res => res.json());
  }
}
