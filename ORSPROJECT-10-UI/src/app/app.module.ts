import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './login/sign-up.component';
import { FooterComponent } from './footer/footer.component';
import { HttpServiceService } from './http-service.service';
import { AuthServiceService } from './auth-service.service';
import { EndpointServiceService } from './endpoint-service.service';
import { ServiceLocatorService } from './service-locator.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { CourseComponent } from './course/course.component';
import { CollegeComponent } from './college/college.component';
import { SubjectComponent } from './subject/subject.component';
import { StudentComponent } from './student/student.component';
import { TimetableComponent } from './timetable/timetable.component';
import { FacultyComponent } from './faculty/faculty.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { UserListComponent } from './user/user-list.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { StudentListComponent } from './student/student-list.component';
import { RoleListComponent } from './role/role-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { CourseListComponent } from './course/course-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ChangePasswordComponent } from './user/change-password.component';
import { MyprofileComponent } from './user/myprofile.component';
import { MarksheetMeritListComponent } from './marksheet/marksheet-merit-list.component';
import { JasperComponent } from './jasper/jasper.component';
import { GetmarksheetComponent } from './marksheet/getmarksheet.component';
import { ForgetPasswordComponent } from './login/forget-password.component';
import { AllowComponent } from './allow/allow.component';
import { AllowListComponent } from './allow/allow-list.component';
import { GeofenceComponent } from './geofence/geofence.component';
import { GeofenceListComponent } from './geofence/geofence-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { MobileverificationComponent } from './mobileverification/mobileverification.component';
import { MobileverificationListComponent } from './mobileverification/mobileverification-list.component';
import { LoginhistoryComponent } from './loginhistory/loginhistory.component';
import { LoginhistoryListComponent } from './loginhistory/loginhistory-list.component';
import { QrscannerComponent } from './qrscanner/qrscanner.component';
import { QrscannerListComponent } from './qrscanner/qrscanner-list.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileListComponent } from './profile/profile-list.component';
import { AccountComponent } from './account/account.component';;
import { AccontListComponent } from './account/accont-list.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    FooterComponent,
    DashboardComponent,
    UserComponent,
    RoleComponent,
    CourseComponent,
    CollegeComponent,
    SubjectComponent,
    StudentComponent,
    TimetableComponent,
    FacultyComponent,
    MarksheetComponent,
    UserListComponent,
    TimetableListComponent,
    SubjectListComponent,
    StudentListComponent,
    RoleListComponent,
    MarksheetListComponent,
    CourseListComponent,
    CollegeListComponent,
    FacultyListComponent,
    GetmarksheetComponent,
    ChangePasswordComponent,
    MyprofileComponent,
    MarksheetMeritListComponent,
    JasperComponent,
    AllowComponent,
    AllowListComponent,
    GeofenceComponent,
    GeofenceListComponent,
    EmployeeComponent,
    EmployeeListComponent,
    MobileverificationComponent,
    MobileverificationListComponent,
    LoginhistoryComponent,
    LoginhistoryListComponent,
    QrscannerComponent,
    QrscannerListComponent,
    ProfileComponent,
    ProfileListComponent,
    AccountComponent,
    AccontListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  providers: [
    HttpServiceService,
    AuthServiceService,
    EndpointServiceService,

    {
      provide: HTTP_INTERCEPTORS, useClass: AuthServiceService, multi: true
    },
    ServiceLocatorService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
