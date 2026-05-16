import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './login/sign-up.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { StudentComponent } from './student/student.component';
import { CollegeComponent } from './college/college.component';
import { FacultyComponent } from './faculty/faculty.component';
import { TimetableComponent } from './timetable/timetable.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { CourseListComponent } from './course/course-list.component';
import { StudentListComponent } from './student/student-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { RoleListComponent } from './role/role-list.component';
import { UserListComponent } from './user/user-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
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
import { AccountComponent } from './account/account.component';
import { AccontListComponent } from './account/accont-list.component';
import { NftassetComponent } from './nftasset/nftasset.component';
import { NftassetListComponent } from './nftasset/nftasset-list.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome'
  },

  {
    path: 'welcome',
    component: WelcomeComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'signup',
    component: SignUpComponent
  },

  {
    path: 'footer',
    component: FooterComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },

  {
    path: 'user',
    component: UserComponent
  },

  {
    path: 'user/:id',
    component: UserComponent
  },

  {
    path: 'userList',
    component: UserListComponent
  },
  {
    path: 'role',
    component: RoleComponent
  },
  {
    path: 'role/:id',
    component: RoleComponent
  },
  {
    path: 'roleList',
    component: RoleListComponent
  },
  {
    path: 'college',
    component: CollegeComponent
  },
  {
    path: 'college/:id',
    component: CollegeComponent
  },
  {
    path: 'collegeList',
    component: CollegeListComponent
  },
  {
    path: 'subject',
    component: SubjectComponent
  },
  {
    path: 'subjectList',
    component: SubjectListComponent
  },
  {
    path: 'subject/:id',
    component: SubjectComponent
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'student/:id',
    component: StudentComponent
  },
  {
    path: 'studentList',
    component: StudentListComponent
  },
  {
    path: 'course',
    component: CourseComponent
  },
  {
    path: 'course/:id',
    component: CourseComponent
  },
  {
    path: 'courseList',
    component: CourseListComponent
  },
  {
    path: 'faculty',
    component: FacultyComponent
  },

  {
    path: 'faculty/:id',
    component: FacultyComponent
  },

  {
    path: 'facultyList',
    component: FacultyListComponent
  },

  {
    path: 'marksheet',
    component: MarksheetComponent
  },

  {
    path: 'marksheet/:id',
    component: MarksheetComponent
  },

  {
    path: 'marksheetList',
    component: MarksheetListComponent
  },

  {
    path: 'marksheetmeritList',
    component: MarksheetMeritListComponent
  },
  {
    path: 'getmarksheet',
    component: GetmarksheetComponent
  },

  {
    path: 'timetable',
    component: TimetableComponent
  },
  {
    path: 'timetableList',
    component: TimetableListComponent
  },
  {
    path: 'timetable/:id',
    component: TimetableComponent
  },
  {
    path: 'changepassword',
    component: ChangePasswordComponent
  },

  {
    path: 'myprofile',
    component: MyprofileComponent
  },
  {
    path: 'myprofile/:id',
    component: MyprofileComponent
  },
  {
    path: 'forgetPassword',
    component: ForgetPasswordComponent
  },

  {
    path: 'jasper',
    component: JasperComponent
  },

  {
    path: 'allow',
    component: AllowComponent
  },
  {
    path: 'allowList',
    component: AllowListComponent
  },
  {
    path: 'allow/:id',
    component: AllowComponent
  },

  {
    path: 'geoFence',
    component: GeofenceComponent
  },
  {
    path: 'geoFenceList',
    component: GeofenceListComponent
  },
  {
    path: 'geoFence/:id',
    component: GeofenceComponent
  },

  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'employeeList',
    component: EmployeeListComponent
  },
  {
    path: 'employee/:id',
    component: EmployeeComponent
  },

   {
    path: 'mobile',
    component: MobileverificationComponent
  },
  {
    path: 'mobileList',
    component: MobileverificationListComponent
  },
  {
    path: 'mobile/:id',
    component: MobileverificationComponent
  },

   {
    path: 'loginhistory',
    component: LoginhistoryComponent
  },
  {
    path: 'loginhistoryList',
    component: LoginhistoryListComponent
  },
  {
    path: 'loginhistory/:id',
    component: LoginhistoryComponent
  },

   {
    path: 'qrscanner',
    component: QrscannerComponent
  },
  {
    path: 'qrscannerList',
    component: QrscannerListComponent
  },
  {
    path: 'qrscanner/:id',
    component: QrscannerComponent
  },

   {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'profileList',
    component: ProfileListComponent
  },
  {
    path: 'profile/:id',
    component: ProfileComponent
  },

    {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'accountList',
    component: AccontListComponent
  },
  {
    path: 'account/:id',
    component: AccountComponent
  },

   {
    path: 'nft',
    component: NftassetComponent
  },
  {
    path: 'nftList',
    component: NftassetListComponent
  },
  {
    path: 'nft/:id',
    component: NftassetComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]

})
export class AppRoutingModule { }
