import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { Role } from './models/role';
import { EnrollComponent } from './components/enroll/enroll.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { CreateAssignmentComponent } from './components/create-assignment/create-assignment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'enroll', component: EnrollComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard] },
  { path: 'courses/:id', component: CourseDetailComponent, canActivate: [AuthGuard] },
  { path: 'create-course', component: CreateCourseComponent, canActivate: [AuthGuard] },
  { path: 'assignment/:id', component: AssignmentComponent, canActivate: [AuthGuard] },
  { path: 'create-assignment/:id', component: CreateAssignmentComponent, canActivate: [AuthGuard] },
  //{ path: 'profile/edit', component: EditProfileComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminGuard], data: { roles: [Role.Admin] } },
  { path: 'users', component: AdminComponent, canActivate: [AuthGuard, AdminGuard], data: { roles: [Role.Admin] } },
  { path: 'users/edit/:id', component: UserEditComponent, canActivate: [AuthGuard, AdminGuard], data: { roles: [Role.Admin] } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
