import { Component, Output, EventEmitter, signal, inject, Input } from '@angular/core';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {

  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  enteredTitle = '';
  enteredDate = '';
  enteredSummary = '';

  // this is an alternative to the constructor based approach of Dependency Injection
  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {

    this.tasksService.addTasks(
      {
      title : this.enteredTitle,
      summary : this.enteredSummary,
      date : this.enteredDate
      },
      this.userId)

    this.close.emit();

  }
}
