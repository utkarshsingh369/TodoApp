import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './MyComponents/main-component/main-component.component';
import { AllTodosComponent } from './MyComponents/all-todos/all-todos.component';
import { ActiveTodosComponent } from './MyComponents/active-todos/active-todos.component';
import { CompletedTodosComponent } from './MyComponents/completed-todos/completed-todos.component';
import { DesignActiveTodosComponent } from './MyComponents/design-active-todos/design-active-todos.component';
import { DesignCompletedTodosComponent } from './MyComponents/design-completed-todos/design-completed-todos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    AllTodosComponent,
    ActiveTodosComponent,
    CompletedTodosComponent,
    DesignActiveTodosComponent,
    DesignCompletedTodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
