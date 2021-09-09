import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../../_services/alert.service';
import { UserService } from '../../../_services/user/user.service';
import * as _ from 'underscore';
import * as moment from 'moment';
import 'rxjs/operators';
import { Subject } from 'rxjs';
import { MentorService } from '../../../_services/mentors/mentor.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-abrod-studies-list',
  templateUrl: './abrod-studies-list.component.html',
  styleUrls: ['./abrod-studies-list.component.css']
})
export class AbrodStudiesListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

    mentorList: any;
    isActive: any;
    breadcrumb: any;
    mentor: any = {
      name: '',
      bio: '',
      facebook: '',
      website: '',
      twitter: '',
      instagram: '',

    }
    constructor( private mentorService: MentorService,
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
        'mainlabel': 'Studies List',
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


      this.mentorService.getAllStudies()
    .then((res:any) =>{
     console.log('Studies ', res);
       this.mentorList = res;
      })
    }

    editMentor(data) {
    this.router.navigate(['/studies/edit', data.id]);
  }


  deleteMeetups(data:any){
    console.log('delete ', data);
    this.mentorService.deleteStudiesById(data.id);
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
          this.mentorService.updateStudies(data.id, data)
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
