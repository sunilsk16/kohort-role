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
  selector: 'app-testimonial-list',
  templateUrl: './testimonial-list.component.html',
  styleUrls: ['./testimonial-list.component.css']
})
export class TestimonialListComponent implements OnInit {
  testiMonialList: any;
  isActive: any;
    public breadcrumb: any;
  testMonial: any = {
    name: '',
    bio: '',
    specialties: '',
  }
  constructor( private mentorService: MentorService,
    private router: Router,
    private alertService: AlertService,)
  { }

  ngOnInit(): void {
    this.breadcrumb = {
      'mainlabel': 'Testimonial List',
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

    this.mentorService.getAllTestiMonial()
  .then((res:any) =>{
   console.log('TestiMonial ', res);
     this.testiMonialList = res;
    })
  }

  editTestMonial(data) {
      console.log('edit ', data);
  this.router.navigate(['/testimonial/edit', data.id]);
}


deleteTestMonial(data:any){
  console.log('delete ', data);
  this.mentorService.deleteTestiMonialById(data.id);
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
        this.mentorService.updateTestiMonial(data.id, data)
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

}
