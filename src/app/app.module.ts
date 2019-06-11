import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { AdminComponent } from './components/admin/admin.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { CourseService } from './services/course.service';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { EnrollComponent } from './components/enroll/enroll.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { CreateAssignmentComponent } from './components/create-assignment/create-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    AdminComponent,
    UserEditComponent,
    CoursesComponent,
    CreateCourseComponent,
    CourseDetailComponent,
    EnrollComponent,
    AssignmentComponent,
    CreateAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([])
  ],
  providers: [
    AuthenticationService, 
    UserService,
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

