import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
counter_subj = new BehaviorSubject <number>(0);
counter$ : Observable<number> = this.counter_subj.asObservable();
interval = 100;
timer = 0;

speedUp()
{
  console.log('speedU');
  this.interval = this.interval*0.99;
}

uptick() {
  this.timer += 1;
  while(this.timer >= this.interval)
  {
    console.log({'t':this.timer,'i':this.interval}  );
    this.timer-=this.interval;
  let n = this.counter_subj.value;
  n += 1;
  this.counter_subj.next(n);
}  

}
ngOnInit() {
  setInterval(()=> {
    this.uptick(); },10); 
  }
}




