import { Component, Input } from '@angular/core';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  @Input({ required: true }) name!: string | undefined;
  @Input({ required: true }) userId!: string;
  isAddingTask = false;

  // Angular Dependency
  constructor(private tasksService : TasksService) {}

  // when we want to use the features of a service such as TaskService here. We need to create an instance of that class. We can create the instance of a class like below
  // private tasksService = new TasksService();
  // But the problem with the above approach is that if we create different instances of the same service class in diff. components. Then we will not be updated if the there is any change happens in some other instance. As we are working on diff. instances in diff. components. To avoid this we use DEPENDENCIES INJECTION.And that can be done by using a special method called constructors . In this case Angular creates its instance.

  onStartAddTask(): void {
    this.isAddingTask = true;
  }

  get SelectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

}
