import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  // we add all non-stand alone components in declarations array
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent
  ],
  // we can add all stand alone components in imports array
  imports: [
    // Browser module is necessary to provide some important features to run an Angular application and also includes some modules like DatePipe etc.
    BrowserModule,
    SharedModule,
    TasksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
