import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MentorService } from '../../../_services/mentors/mentor.service';
import { AlertService } from '../../../_services/alert.service';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import * as moment from 'moment';



@Component({
  selector: 'app-new-mentors',
  templateUrl: './new-mentors.component.html',
  styleUrls: ['./new-mentors.component.css']
})
export class NewMentorsComponent implements OnInit {
loggedInUser: any;
  submitted = false;
isLoading: any = false;
isEdit: any = false;
imageList: any = [];

  @BlockUI('iconTabs') blockUIIconTabs: NgBlockUI;
    public breadcrumb: any;
    viewSubscriptionList:any=[];
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject<any>();
    iconTab: FormGroup;
    mentorId: any;


    constructor(private formBuilder: FormBuilder,
     private mentorsService: MentorService,
     private alertService: AlertService,
     private route: ActivatedRoute,
    private router: Router,) {
       if (window.localStorage.getItem('currentUser')) {
       this.loggedInUser = JSON.parse(window.localStorage.getItem('currentUser'));
     }}

    ngOnInit(): void {
      this.breadcrumb = {
        'mainlabel': 'Create Mentor',
        'links': [
          {
            'name': 'Home',
            'isLink': true,
            'link': '/dashboard'
          },
          {
            'name': 'Mentor',
            'isLink': false,
            'link': '/mentors/create'
          },
        ]
      };

      this.iconTab = this.formBuilder.group({
        // corpID: ['', Validators.required],
        name: ['', Validators.required],
        designation: ['', Validators.required],
        bio: ['', Validators.required],
        shortBio: ['', Validators.required],
        specialties: ['', Validators.required],
        education: ['', Validators.required],
        language: ['', Validators.required],
        address: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        facebook: ['', Validators.required],
        instagram: ['', Validators.required],
        twitter: ['', Validators.required],
        website: ['', Validators.required],
        linkedIn: ['', Validators.required],
        experinceHours: ['', Validators.required],
        achievement: ['', Validators.required],
        duration: ['', Validators.required],
        othersOne: ['', Validators.required],
        othersTwo: ['', Validators.required],
        othersThree: ['', Validators.required],
        joinFrom: ['', Validators.required],
        fileSource: [[], [Validators.required]],
        logoSource: [[], [Validators.required]],


      });

    if (this.route.snapshot.params.id) {
      this.mentorsService.getMentorsById(this.route.snapshot.params.id)
        .then((res: any) => {
          this.isEdit = true;
          this.mentorId = res.id;
            this.imageList = res.fileSource || [];
            console.log(this.imageList);

          console.log('edit Mentor ', res);
          if (res && res.id) {
            this.iconTab.patchValue(res);
          }
        })
    }
    }

    get f() {
         return this.iconTab.controls;
  }

    reloadIconTabs() {
      this.blockUIIconTabs.start('Loading..');

      setTimeout(() => {
        this.blockUIIconTabs.stop();
      }, 2500);
    }

    cancel(){
      console.log("form submitted");
      console.log(this.iconTab.value)
      this.iconTab.reset();
    }

    chooseFile() {
    document.getElementById("avatar").click();
  }

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

  createMentor() {
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
      createdBy: this.loggedInUser,
      createdOn: moment().format('DD-MM-YYYY hh:mm A'),
      createdAt: moment().format('x')
    }
    this.isLoading = true;
    this.mentorsService.addMentor(data)
      .then(() => {
        this.isLoading = false;
        this.alertService.showSuccess('Mentor added successfully !!');
        this.iconTab.reset();

        this.router.navigate(['/mentor/list']);
      })
      .catch(() => {
        this.isLoading = false;
      })
  }


    updateMentors() {
      this.isLoading = true;

      let data = {

        ...this.iconTab.value,
        id: this.mentorId ,

        updatedBy: this.loggedInUser,
        updatedOn: moment().format('DD-MM-YYYY hh:mm A')
      }
      console.log('data ', data);
      this.mentorsService.updateMentor(data.id, data)
        .then(() => {
          this.isLoading = false;
          this.alertService.showSuccess('Mentor updated successfully !!')
            this.router.navigate(['/mentor/list']);
        })
    }


  //   createMentor(value) {
  //   // this.createCode();
  //   let data: any = {};
  //   if (this.isEdit) {
  //     data.name = this.iconTab.value.name;
  //     data.bio = this.iconTab.value.bio;
  //     data.specialties = this.iconTab.value.specialties;
  //     data.achievement = this.iconTab.value.achievement;
  //     // mentorId: this.iconTab.value.mentorId,
  //     data.facebook = this.iconTab.value.facebook;
  //     data.twitter = this.iconTab.value.twitter;
  //     data.website = this.iconTab.value.website;
  //     data.instagram = this.iconTab.value.instagram;
  //
  //     // role.updated_on = moment().format('DD-MM-YYYY hh:mm A');
  //     // role.timeStamp = moment().format('x');
  //   } else {
  //     data = {
  //       created_by: this.loggedInUser,
  //       name: this.iconTab.value.name,
  //       bio: this.iconTab.value.bio,
  //       specialties: this.iconTab.value.specialties,
  //       achievement: this.iconTab.value.achievement,
  //       // mentorId: this.iconTab.value.mentorId,
  //       facebook: this.iconTab.value.facebook,
  //       twitter: this.iconTab.value.twitter,
  //       website: this.iconTab.value.website,
  //       instagram: this.iconTab.value.instagram,
  //
  //       // created_on: moment().format('DD-MM-YYYY hh:mm A'),
  //       // updated_on: moment().format('DD-MM-YYYY hh:mm A'),
  //       // timeStamp: moment().format('x')
  //     }
  //   }
  //   console.log(data);
  //   // this.helper.showLoading();
  //   this.mentorsService.addMentor(data)
  //     .then(() => {
  //       // return this.refreshPages();
  //     })
  //     .then(() => {
  //       // this.helper.hideLoading();
  //       let msg = this.isEdit ? 'Updated' : 'Created'
  //       this.alertService.showSuccess(' successfully');
  //       // this.roleName = ''
  //     })
  //     .catch((err: any) => {
  //       // this.helper.hideLoading();
  //         this.alertService.showError('Error updating !!');
  //       console.log(err);
  //     })
  // }


}
