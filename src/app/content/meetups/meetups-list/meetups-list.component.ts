import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../../_services/alert.service';
import { UserService } from '../../../_services/user/user.service';
import * as _ from 'underscore';
import * as moment from 'moment';
import 'rxjs/operators';
import { Subject } from 'rxjs';
import { MeetupService } from '../../../_services/meetups/meetup.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-meetups-list',
  templateUrl: './meetups-list.component.html',
  styleUrls: ['./meetups-list.component.css']
})
export class MeetupsListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  isActive: any;
  meetupsList: any;
  breadcrumb: any;
  meetup: any = {
    name: '',
    description: '',
    startTime: '',
    endTime: '',
    dates: '',
    about: '',

  }
  constructor( private meetupService: MeetupService,
    private router: Router,
    private alertService: AlertService,)
  { }

  ngOnInit(): void {
    this.dtOptions = {
     pagingType: 'full_numbers',
     pageLength: 10,
     scrollX: true,
     processing: true, order: [],
     // scrollX: true,
   }
    this.breadcrumb = {
      'mainlabel': 'Meetups List',
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard'
        },
        {
          'name': 'List',
          'isLink': false,
        },
      ]
    };


    this.meetupService.getAllMeetups()
  .then((res:any) =>{
   console.log('meetupsList ', res);
     this.meetupsList = res;
    })


  }

  editMeetups(data) {
  this.router.navigate(['/meetups/edit', data.id]);
}


  deleteMeetups(data:any){
    console.log('delete ', data);
    this.meetupService.deleteMeetupsById(data.id);
  }

  toggleUser(data) {
    Swal.fire({
      title: 'Do you want to ' + (!data.isActive ? 'Activate' : 'Deactivate') + ' the ?',
      showCancelButton: true,
      confirmButtonText: `Continue`,
    })
      .then((result) => {
        if (result.isConfirmed) {
          data.isActive = !data.isActive;
          this.meetupService.updateMeetups(data.id, data)
            .then(() => {
              let msg = data.isActive ? ' activated successfully !!' : ' deactivated successfully !!'
              this.alertService.showSuccess(msg)
            })
            .catch(() => {
              this.alertService.showError('Error updating !!');
            })
        }
      })
  }
  ngOnDestroy(): void {
   this.dtTrigger.unsubscribe();
 }


}
