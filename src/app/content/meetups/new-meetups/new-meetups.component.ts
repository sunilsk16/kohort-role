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
  // registerForm: FormGroup;


  loggedInUser: any;
  submitted = false;
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
  mentorName: any;
  startDate: any;
  minDate: any;
  maxDate: any;
  currMinDate: any;


  constructor(private formBuilder: FormBuilder,
    private meetupService: MeetupService,
    private mentorsService: MentorService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router, ) {
    if (window.localStorage.getItem('currentUser')) {
      this.loggedInUser = JSON.parse(window.localStorage.getItem('currentUser'));
    }
    const current = new Date();
    console.log("current",current);

    this.minDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate()
    };
    console.log("minDate",this.minDate);

    this.maxDate = {
      year: current.getFullYear(),
      month: current.getMonth(),
      day: current.getDate(),
    };
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
      mentor: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      startDate: ['', Validators.required],
      aboutOne: ['', Validators.required],
      aboutTwo: ['', Validators.required],
      aboutThree: ['', Validators.required],
      aboutFour: ['', Validators.required],
      aboutFive: ['', Validators.required],
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
      })


  }
  get f() {
       return this.iconTab.controls;
}

  // getMinDate() {
  //   if (this.startDate) {
  //     return this.startDate
  //   } else {
  //     return this.minDate
  //   }
  // }

  onDropdownChange(event) {
    console.log(event)//you will get the id
    this.mentorId = event
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
  upload() {

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
    this.currMinDate = event;
    console.log(event);
    let year = event.year;
    let month = event.month <= 9 ? '0' + event.month : event.month;;
    let day = event.day <= 9 ? '0' + event.day : event.day;;
    let finalDate = day + "-" + month + "-" + year;
    if (this.iconTab.value.startDate) {
      let firstDate = year + "-" + month + "-" + day;
      let lastDate = moment(this.iconTab.value.startDate, 'DD-MM-YYYY').format('YYYY-MM-DD')
    }
    this.iconTab.patchValue({
      startDate: {
        day: event.day,
        month: event.month,
        year: event.year
      }
    })
    console.log(finalDate, this.iconTab.value);
    this["startDate"] = finalDate;
  }



  readableDateFormat(userDate: any, isDate?: any) {
    if (isDate) {
      return userDate;
    } else {
      let year = userDate.year;
      let month = userDate.month <= 9 ? '0' + userDate.month : userDate.month;;
      let day = userDate.day <= 9 ? '0' + userDate.day : userDate.day;;
      let finalDate = day + "-" + month + "-" + year;
      return finalDate;
    }
  }

  createMeetups() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.iconTab.invalid) {
      this.alertService.showError('Invalid inputs !', '3000', 'Enter Mandatory fields !');
      return;
    }
    // this.submitted = true;
    // if (this.iconTab.invalid) {
    //   this.alertService.showError('Invalid inputs !', '3000', 'Enter Mandatory fields !');
    //   return false;
    // }
    let endTimeStamp = this.startDate + ' ' + this.getReadableTime(this.iconTab.value.endTime)
    console.log('endTimeStamp ', endTimeStamp);
    let data = {
      ...this.iconTab.value,
      mentorId: this.mentorId,
      startDate: this.iconTab.value.startDate,
      startDateTime: moment(endTimeStamp, 'DD-MM-YYYY hh:mm A').format('x'),
      createdBy: this.loggedInUser,
      createdOn: moment().format('DD-MM-YYYY hh:mm A'),
      createdAt: moment().format('x'),
    }
    this.isLoading = true;
    this.meetupService.addMeetups(data)
      .then(() => {
        this.isLoading = false;
        this.alertService.showSuccess('Meetups added successfully !!');
        this.imageList = [];
        this.router.navigate(['/meetups/list']);
      })
      .catch(() => {
        this.isLoading = false;
      })
  }

  getReadableTime(userTime) {
    if(userTime){
      let hourFormat = userTime.hour <= 9 ? ('0' + userTime.hour) : userTime.hour
      let minFormat = userTime.minute <= 9 ? ('0' + userTime.minute) : userTime.minute
      let format = userTime.hour <= 12 ? 'AM' : 'PM'
      if (format == 'PM') {
        hourFormat = hourFormat - 12
        hourFormat = hourFormat <= 9 ? ('0' + hourFormat) : hourFormat
      }
      return (hourFormat || 0) + ':' + (minFormat || 0) + ' ' + format;
    }
  }

  updateMeetup() {
    this.isLoading = true;
    let endTimeStamp = this.startDate + ' ' + this.getReadableTime(this.iconTab.value.endTime)
    console.log('endTimeStamp ', endTimeStamp);
    let data = {
      ...this.iconTab.value,
      mentorId: this.mentorId,
      id: this.meetupId,
      startDate: this.iconTab.value.startDate,
      startDateTime: moment(endTimeStamp, 'DD-MM-YYYY hh:mm A').format('x'),
      createdBy: this.loggedInUser,
      createdOn: moment().format('DD-MM-YYYY hh:mm A'),
      createdAt: moment().format('x')
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
