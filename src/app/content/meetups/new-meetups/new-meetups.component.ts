import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MeetupService } from '../../../_services/meetups/meetup.service';
import { MentorService } from '../../../_services/mentors/mentor.service';
import { AlertService } from '../../../_services/alert.service';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import * as moment from 'moment';

@Component({
  selector: 'app-new-meetups',
  templateUrl: './new-meetups.component.html',
  styleUrls: ['./new-meetups.component.css']
})
export class NewMeetupsComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  loggedInUser: any;
  isLoading: any = false;
  isEdit: any = false;
  images = [];
  imageList: any = [];
  @BlockUI('iconTabs') blockUIIconTabs: NgBlockUI;
  public breadcrumb: any;
  viewSubscriptionList: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  iconTab: FormGroup;
  meetupId: any;
  private mentorLists: Array<any> = [];
  mentorList: any;
  d4: any;
  mentorId: any;


  constructor(private formBuilder: FormBuilder,
    private meetupService: MeetupService,
    private mentorsService: MentorService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router, ) {
    if (window.localStorage.getItem('currentUser')) {
      this.loggedInUser = JSON.parse(window.localStorage.getItem('currentUser'));
    }
  }

  ngOnInit(): void {
    this.breadcrumb = {
      'mainlabel': 'Create Meetups',
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard'
        },
        {
          'name': 'Meetups',
          'isLink': false,
          'link': '/meetups/create'
        },
      ]
    };
    // this.registerForm = this.formBuilder.group({
    //     password: ['', Validators.required],
    //     comparepassword: ['', ]
    //   });

    this.iconTab = this.formBuilder.group({
      // corpID: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      about: ['', Validators.required],
      // website: ['', Validators.required],
      // instagram: ['', Validators.required],
      // facebook: ['', Validators.required],
      // twitter: ['', Validators.required],
      mentor: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      startDate: ['', Validators.required],
    });
    if (this.route.snapshot.params.id) {
      this.meetupService.getMeetupsById(this.route.snapshot.params.id)
        .then((res: any) => {
          this.isEdit = true
          this.meetupId = res.id
          console.log('edit Meetups ', res);
          if (res && res.id) {
            this.iconTab.patchValue(res);
          }
        })
    }
    this.mentorsService.getAllMentors()
      .then((res: any) => {
        console.log('mentorList ', res);
        this.mentorList = res;

        // this.mentorLists =  mentorList.name || [];
        // console.log('mentorListnnnnnn ',   this.mentorList);
      })
  }

  onDropdownChange(e){
  console.log(e)//you will get the id
  this.mentorId =e //if you want to bind it to your model
}

  reloadIconTabs() {
    this.blockUIIconTabs.start('Loading..');

    setTimeout(() => {
      this.blockUIIconTabs.stop();
    }, 2500);
  }

  cancel() {
    console.log("form submitted");
    console.log(this.iconTab.value)
    this.iconTab.reset();
  }

  chooseFile() {
    document.getElementById("avatar").click();
  }

  //  comparepassword(control: AbstractControl): ValidationErrors {
  //   if (control.parent != undefined) {
  //     var password: string = control.parent.get("password").value;
  //     var cpassword: string = control.parent.get("comparepassword").value;
  //     if (password !== cpassword) {
  //       return { matchPassword: true };
  //     }
  //   }
  //   return null;
  // }

  upload() {
    // Create a root reference
    let storageRef = firebase.storage().ref();

    for (let selectedFile of [(<HTMLInputElement>document.getElementById('avatar')).files[0]]) {
      let path = '/mentors/' + Date.now() + `${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        snapshot.ref.getDownloadURL()
          .then((url) => {
            this.imageList = this.iconTab.value.fileSource || [];
            this.imageList.push(url);
            this.iconTab.patchValue({
              fileSource: this.imageList
            });
            console.log('downloadURL ', url, this.iconTab.value);

          })
      });
    }
  }

  removeImage(index) {
    this.imageList.splice(index, 1);
  }
  selectDate(event) {
    console.log(event);
    let year = event.year;
    let month = event.month <= 9 ? '0' + event.month : event.month;;
    let day = event.day <= 9 ? '0' + event.day : event.day;;
    let finalDate = day + "-" + month + "-" + year;
    this.iconTab.patchValue({
      dates: finalDate
    })
    this["dates"] = finalDate;
  }

  get f() {
     return this.iconTab.controls;
   }

   // get j() {
   //    return this.registerForm.controls;
   //  }

    createMeetups() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.iconTab.invalid) {
          this.alertService.showError('Invalid inputs !', '3000', 'Enter Mandatory fields !');
          return;
        }

        console.log("form submitted");
        console.log(this.iconTab.value);
        let data = {
          ...this.iconTab.value,
          // tenantId: this.currOrganization.tenantId,
          // hotelId: this.currOrganization.id,
          // hotelData: this.currOrganization,
          mentorId: this.mentorId,
          createdBy: this.loggedInUser,
          createdOn: moment().format('DD-MM-YYYY hh:mm A'),
          createdAt: moment().format('x')
        }
        this.isLoading = true;
        this.meetupService.addMeetups(data)
          .then(() => {
            this.isLoading = false;
            this.alertService.showSuccess('Meetups added successfully !!');
            this.iconTab.reset();
            this.imageList = [];
            this.router.navigate(['/meetups/list']);
            // this.router.navigate(['/h/master/banquet']);
          })
          .catch(() => {
            this.isLoading = false;
          })
      }


  // createMeetups() {
  //
  //   if(!this.iconTab.value.name || !this.iconTab.value.description  || !this.iconTab.value.about
  //      || !this.iconTab.value.price  || !this.iconTab.value.mentor || !this.iconTab.value.startTime
  //      || !this.iconTab.value.endTime || !this.iconTab.value.dates
  //   ) {
  //     this.alertService.showError('Invalid inputs !', '3000', 'Enter Mandatory fields !');
  //     return false;
  //   }
  //   console.log("form submitted");
  //   console.log(this.iconTab.value);
  //   let data = {
  //     ...this.iconTab.value,
  //     // tenantId: this.currOrganization.tenantId,
  //     // hotelId: this.currOrganization.id,
  //     // hotelData: this.currOrganization,
  //     createdBy: this.loggedInUser,
  //     createdOn: moment().format('DD-MM-YYYY hh:mm A'),
  //     createdAt: moment().format('x')
  //   }
  //   this.isLoading = true;
  //   this.meetupService.addMeetups(data)
  //     .then(() => {
  //       this.isLoading = false;
  //       this.alertService.showSuccess('Meetups added successfully !!');
  //       this.iconTab.reset();
  //       this.imageList = [];
  //       this.router.navigate(['/meetups/list']);
  //       // this.router.navigate(['/h/master/banquet']);
  //     })
  //     .catch(() => {
  //       this.isLoading = false;
  //     })
  // }

  updateMeetup() {
    this.isLoading = true;
    let data = {
      ...this.iconTab.value,
      mentorId: this.mentorId,
      id: this.meetupId,
      updatedBy: this.loggedInUser,
      updatedOn: moment().format('DD-MM-YYYY hh:mm A')
    }
    console.log('data ', data);
    this.meetupService.updateMeetups(data.id, data)
      .then(() => {
        this.isLoading = false;
        this.alertService.showSuccess('Meetups updated successfully !!')
        this.router.navigate(['/meetups/list']);
      })
  }


}
