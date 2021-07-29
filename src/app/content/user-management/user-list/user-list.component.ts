import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgBlockUI, BlockUI } from 'ng-block-ui';

import { AuthService } from '../../../_services/auth.service';
import { AlertService } from '../../../_services/alert.service';
import { UserService } from '../../../_services/user/user.service';
import { HelperService } from '../../../_services/helper/helper.service';
import * as _ from 'underscore';
import * as moment from 'moment';
import 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  @BlockUI('basicModals') blockUIBasicModals: NgBlockUI;
  @BlockUI('modalThemes') blockUIModalThemes: NgBlockUI;
  options = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };
  public breadcrumb: any;
  userList: any = [];
  roleList: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  user: any = {
    fullName: '',
    email: '',
    organization: 'Kohort',
    roleValue: ''
  }
  isLoading: any = false;
  modalRef: any;
  loggedInUser: any;
  tempPassword:any;

  constructor(
    private alertService: AlertService,
    private userService: UserService,
    private modalService: NgbModal,
    private authService: AuthService,
    private helper: HelperService
  ) {
    if (window.localStorage.getItem('currentUser')) {
      this.loggedInUser = JSON.parse(window.localStorage.getItem('currentUser'));
    }
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    }

    this.userService.getAllRoles()
      .then((res: any) => {
        console.log('rolemanagement ', res);
        this.roleList = res;
        return this.userService.getAllAdmins()
      })
      .then((res: any) => {
        this.userList = res;
        console.log('userList ', res);
        this.dtTrigger.next();
      })

    this.breadcrumb = {
      'mainlabel': 'User Management',
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard'
        },
        {
          'name': 'User List',
          'isLink': false
        }
      ]
    };
  }

  getRoleName(roleValue: any) {
    let roleName = '';
    if (_.groupBy(this.roleList, 'roleValue')[roleValue] && _.groupBy(this.roleList, 'roleValue')[roleValue].length) {
      roleName = _.groupBy(this.roleList, 'roleValue')[roleValue][0].roleName
    }
    return roleName;
  }

  toggleUser(user){
    user.isActive = !user.isActive;
    this.userService.updateUser(user.id, user)
    .then(() =>{
      let msg = user.isActive ? 'User activated successfully !!' : 'User deactivated successfully !!'
      this.alertService.showSuccess(msg)
    })
    .catch(() =>{
      this.alertService.showError('Error updating user !!');
    })
  }

  deleteUser(user, index){
    this.userService.deleteUserById(user.id)
    .then(() =>{
      this.userList.splice(index, 1);
      this.alertService.showSuccess('User deleted successfully !!')
    })
    .catch(()=>{
      this.alertService.showError('Error deleting user !!')
    })
  }

  generatePassword() {
    var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  sendEmail(){
    return new Promise((resolve) =>{
      let subject = '[NOTICE] You are Invited | kohort.';

        let body = "<div style='border:1.1px solid #efefef;padding:5px'>" +
          "<div style='margin:-5px;text-align:center;border-bottom:1.1px solid#efefef;'>" +
          "<img style='height:70px;width:auto' src='https://stg-kohort.web.app/assets/images/logo/logo.png'/>" +
          "</div><div style='padding:10px 5px'>" +
          "Hello " + this.user.fullName + " ,<br/><br/>" +
          "You have been invited by " + this.loggedInUser.displayName + " to kohort application." +
          "<br/><br/>Click below link to accept invitation and login with temporary password.<br/><br/>" +
          "Username : " + this.user.email +
          "<br/>Password: " + this.tempPassword +
          "<br/><br/><br/><br/>" +
          "<a href='https://stg-corpcrs.web.app' style='text-decoration:none;padding:10px 10px 10px 12px;border:0;font-family:roboto,sans-serif;font-weight:500;text-transform:none;letter-spacing:0.25px;border-radius:8px;background-color:#039be5;color:#ffffff' target='_blank'>Accept pending <span class='il'>invitation</span></a>" +
          "<br/></div><br/>Regards,<br/>kohort Support Team<br/><br/>" +
          "<div style='margin:-5px;background:#78909c;padding:20px;color:white'>" +
          "kohort<span style='float:right;font-size:12px'>kohort Solutions Pvt Ltd" +
          "<br/>Banglore,Karnataka</span></div></div>";

        let toAddress = "firozss31@gmail.com";

        console.log('triggerMail ', subject, body);
        this.helper.sendEmail(subject, body, this.user.email)
          .then((res: any) => {
            console.log('res ', res);
            resolve();
          })
          .catch((err: any) => {
            console.log('err ', err);
            resolve();
          })
    })
  }

  createUser() {
    this.isLoading = true;
    if (!this.user.fullName || !this.user.email || !this.user.roleValue) {
      this.alertService.showError('Enter mandatory fields !!');
      this.isLoading = false;
      return false;
    }
    this.tempPassword = "123456" || this.generatePassword()
    console.log('invite user ', this.user, this.tempPassword);
    this.authService.doRegister({ email: this.user.email, password: this.tempPassword })
      .then((authData: any) => {
        return this.userService.updateUser(authData.user.uid, {
          uid: authData.user.uid,
          email: authData.user.email,
          name: this.user.fullName,
          roleValue: this.user.roleValue,
          organization: this.user.organization,
          isActive: true,
          mailVerified: false,
          invitedBy: this.loggedInUser,
          invitedOn: moment().format('DD-MM-YYYY hh:mm A')
        })
      })
      .then(() =>{
        return this.sendEmail();
      })
      .then(() => {
        this.isLoading = false;
        this.alertService.showSuccess('Invitation sent !!');
        this.modalRef.close();
      })
      .catch((err: any) => {
        console.log('err ', err);
        this.isLoading = false;
        this.alertService.showSuccess('Error sending invitation !!');
        this.modalRef.close();
      })
  }

  inviteUser(content) {
    this.modalRef = this.modalService.open(content, { windowClass: 'animated fadeInDown' });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
