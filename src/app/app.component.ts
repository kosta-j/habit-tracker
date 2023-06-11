import { Component } from '@angular/core';
import { Habit } from './models/habit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'habit-tracker';
  public habits: Habit[] = [
    <Habit>{
      name: '15 min walk',
      frequency: 'daily',
      description: 'This habit makes my kitchen look nice and makes my day better the next morning.'
    },
    <Habit>{
      name: 'Weed the garden',
      frequency: 'weekly',
      description: 'The weeds get so out of hand if they wait any longer, and I like how nice our home looks with a clean lawn.'
    }
  ];
}
