import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../../_services/alert.service';
import { UserService } from '../../../_services/user/user.service';
import * as _ from 'underscore';
import * as moment from 'moment';
import 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  public breadcrumb: any;
  userList: any = [];
  public roleList = [];
  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private router: Router,
    private alertService: AlertService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    }
    this.userService.getAllRoles()
    .then((res:any) =>{
      console.log('rolemanagement ', res);
      this.roleList = res;
      this.dtTrigger.next();
    })
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
          'isLink': false
        }
      ]
    };
  }

  editRole(role:any){
    console.log('edit role ', role);
    this.router.navigate(['/roles/edit'], { queryParams: {id: role.roleValue }});
  }

  deleteRole(role:any){
    console.log('deleteRole ', role);
    // this.userService.deleteRoleById(role.id);
  }

  ngOnDestroy(): void {
   this.dtTrigger.unsubscribe();
 }

}
