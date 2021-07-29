import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AlertService } from '../../../_services/alert.service';
import { UserService } from '../../../_services/user/user.service';
import * as _ from 'underscore';
import * as moment from 'moment';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {

  public breadcrumb: any;
  userList: any = [];
  roleName: any = '';
  isEdit: any = false;
  roleData: any;
  loggedInUser: any;
  allPages: any = [
    {
      title: 'Role Management',
      component: 'Role Management',
      isAllChecked: false,
      permissions: [{
        name: "View",
        value: "ROLE_MANAGEMENT_VIEW",
        isChecked: false,
      }, {
        name: "Create",
        value: "ROLE_MANAGEMENT_CREATE",
        isChecked: false,
      }, {
        name: "Edit",
        value: "ROLE_MANAGEMENT_EDIT",
        isChecked: false,
      }, {
        name: "Delete",
        value: "ROLE_MANAGEMENT_DELETE",
        isChecked: false,
      }, {
        name: "Active/Inactive",
        value: "ROLE_MANAGEMENT_ACTIVE_INACTIVE",
        isChecked: false,
      }
      ]
    }, {
      title: 'User Management',
      component: 'User Management',
      isAllChecked: false,
      permissions: [{
        name: "View",
        value: "USER_MANAGEMENT_VIEW",
        isChecked: false,
      }, {
        name: "Create",
        value: "USER_MANAGEMENT_CREATE",
        isChecked: false,
      }, {
        name: "Edit",
        value: "USER_MANAGEMENT_EDIT",
        isChecked: false,
      }, {
        name: "Delete",
        value: "USER_MANAGEMENT_DELETE",
        isChecked: false,
      }, {
        name: "Active/Inactive",
        value: "USER_MANAGEMENT_ACTIVE_INACTIVE",
        isChecked: false,
      }]
    }, {
      title: 'Meetups',
      component: 'Meetups',
      isAllChecked: false,
      permissions: [{
        name: "View",
        value: "MEETUPS_VIEW",
        isChecked: false,
      }, {
        name: "Create",
        value: "MEETUPS_CREATE",
        isChecked: false,
      },
      {
       name: "Edit",
       value: "MEETUPS_EDIT",
       isChecked: false,
     },
     {
       name: "Delete",
       value: "MEETUPS_DELETE",
       isChecked: false,
     },
      {
        name: "Active/Inactive",
        value: "MEETUPS_ACTIVE_INACTIVE",
        isChecked: false,
      }]
    }, {
      title: 'Mentors',
      component: 'Mentors',
      isAllChecked: false,
      permissions: [{
        name: "View",
        value: "MENTORS_VIEW",
        isChecked: false,
      }, {
        name: "Create",
        value: "MENTORS_CREATE",
        isChecked: false,
      }, {
        name: "Edit",
        value: "MENTORS_EDIT",
        isChecked: false,
      }, {
        name: "Delete",
        value: "MENTORS_DELETE",
        isChecked: false,
      }, {
        name: "Active/Inactive",
        value: "MENTORS_ACTIVE_INACTIVE",
        isChecked: false,
      }]
    }
  ]

  constructor(
    private alertService: AlertService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {
    if (window.localStorage.getItem('currentUser')) {
      this.loggedInUser = JSON.parse(window.localStorage.getItem('currentUser'));
    }
  }

  ngOnInit() {
    if (this.route.snapshot.queryParams['id']) {
      this.isEdit = true;
      this.userService.getRoleById(this.route.snapshot.queryParams['id'])
        .then((res: any) => {
          console.log('res ', res);
          if (res && res.length) {
            this.roleData = res[0];
            this.roleName = this.roleData.roleName;
            let self = this;
            _.each(this.allPages, function(page: any) {
              _.each(page.permissions, function(p: any) {
                let index = self.roleData.permissions.indexOf(p.value);
                if (index >= 0) {
                  p.isChecked = true;
                }
              })
            })
          }
        })
    }
    this.breadcrumb = {
      'mainlabel': 'Role Management',
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard'
        },
        {
          'name': 'Role List',
          'isLink': true,
          'link': '/roles/list'
        },
        {
          'name': this.isEdit ? 'Edit Role' : 'New Role',
          'isLink': false
        }
      ]
    };
  }

  checkAllPermission(page: any) {
    _.each(page.permissions, function(p: any) {
      p.isChecked = page.isAllChecked
    })
  }

  refreshPages() {
    return new Promise((resolve) => {
      _.each(this.allPages, function(page: any) {
        page.isAllChecked = false;
        _.each(page.permissions, function(p: any) {
          p.isChecked = false;
        })
      })
      resolve();
    })
  }

  createRole() {
    console.log('am in createRole ', this.allPages);
    if (!this.roleName) {
      this.alertService.showError("Role Name is manadatory !!");
      return false;
    }
    let pList = [];
    _.filter(this.allPages, function(page: any) {
      _.each(page.permissions, function(p: any) {
        if (p.isChecked) {
          pList.push(p.value)
        }
      })
    })

    if (!pList.length) {
      this.alertService.showError("Select atleast one permission");
      return false;
    }

    let role: any = {};
    if (this.isEdit) {
      role = this.roleData;
      role.roleName = this.roleName;
      role.updated_by = this.loggedInUser;
      role.permissions = pList;
      role.updated_on = moment().format('DD-MM-YYYY hh:mm A');
      role.timeStamp = moment().format('x');
    } else {
      role = {
        roleName: this.roleName,
        roleValue: Math.floor(Math.random() * 10000),
        permissions: pList,
        created_by: this.loggedInUser,
        updated_by: this.loggedInUser,
        created_on: moment().format('DD-MM-YYYY hh:mm A'),
        updated_on: moment().format('DD-MM-YYYY hh:mm A'),
        timeStamp: moment().format('x')
      }
    }
    console.log('before :: save ', role);
    // this.helper.showLoading();
    this.userService.createRole(role)
      .then(() => {
        return this.refreshPages();
      })
      .then(() => {
        // this.helper.hideLoading();
        let msg = this.isEdit ? 'Updated' : 'Created'
        this.alertService.showSuccess('Role ' +  msg + ' successfully');
        this.roleName = ''
      })
      .catch(() => {
        // this.helper.hideLoading();
        this.alertService.showError('Error creating role');
      })
  }
}
