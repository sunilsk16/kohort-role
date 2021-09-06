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
  selector: 'app-create-language',
  templateUrl: './create-language.component.html',
  styleUrls: ['./create-language.component.css']
})
export class CreateLanguageComponent implements OnInit {
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
  communitieId: any;
  private mentorLists: Array<any> = [];
  mentorList: any;
  d4: any;
    d3: any;
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
      'mainlabel': 'Create Language',
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard'
        },
        {
          'name': ' Studies',
          'isLink': false,
          'link': '/communitie/create'
        },
      ]
    };
    // this.registerForm = this.formBuilder.group({
    //     password: ['', Validators.required],
    //     comparepassword: ['', ]
    //   });

    this.iconTab = this.formBuilder.group({
      name: ['', Validators.required],
      code:  ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],


    });
    if (this.route.snapshot.params.id) {
      this.mentorsService.getStudiesById(this.route.snapshot.params.id)
        .then((res: any) => {
          this.isEdit = true
          this.communitieId = res.id
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

  onDropdownChange(e) {
    console.log(e)//you will get the id
    this.mentorId = e //if you want to bind it to your model
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

  createLanguage() {
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
      // mentorId: this.mentorId,
      createdBy: this.loggedInUser,
      createdOn: moment().format('DD-MM-YYYY hh:mm A'),
      createdAt: moment().format('x')
    }
    this.isLoading = true;
    this.mentorsService.addLanguage(data)
      .then(() => {
        this.isLoading = false;
        this.alertService.showSuccess('Language added successfully !!');
        this.iconTab.reset();
        this.imageList = [];
        this.router.navigate(['/language/list']);
        // this.router.navigate(['/h/master/banquet']);
      })
      .catch(() => {
        this.isLoading = false;
      })
  }
  updateLanguage() {
    this.isLoading = true;
    let data = {
      ...this.iconTab.value,
      id: this.communitieId,
      updatedBy: this.loggedInUser,
      updatedOn: moment().format('DD-MM-YYYY hh:mm A')
    }
    console.log('data ', data);
    this.mentorsService.updateLanguage(data.id, data)
      .then(() => {
        this.isLoading = false;
        this.alertService.showSuccess('Language updated successfully !!')
        this.router.navigate(['/language/list']);
      })
  }


}
