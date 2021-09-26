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
  selector: 'app-new-testimonial',
  templateUrl: './new-testimonial.component.html',
  styleUrls: ['./new-testimonial.component.css']
})
export class NewTestimonialComponent implements OnInit {

  loggedInUser: any;
  isLoading: any = false;
  isEdit: any = false;
  images = [];
imageList: any = [];
  @BlockUI('iconTabs') blockUIIconTabs: NgBlockUI;
  public breadcrumb: any;
  viewSubscriptionList: any = [];
    mentorList: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  iconTab: FormGroup;
  monialId: any;
  submitted = false;
  mentorId: any;

  constructor(private formBuilder: FormBuilder,
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
      'mainlabel': 'Create Testimonial',
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard'
        },
        {
          'name': 'Testimonials',
          'isLink': false,
        },
      ]
    };

    this.iconTab = this.formBuilder.group({
      name: ['', Validators.required],
      specialties: ['', Validators.required],
      bio: ['', Validators.required],
      mentor: ['', Validators.required],
      fileSource: [[], [Validators.required]],
      // logoSource: [[], [Validators.required]],
    });

    if (this.route.snapshot.params.id) {
      this.mentorsService.getTestiMonialById(this.route.snapshot.params.id)
        .then((res: any) => {
          this.isEdit = true;
          this.monialId = res.id;

          this.imageList = res.fileSource || [];
          console.log("img", this.imageList);
          console.log('edit Mentor ', res);
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

  get f() {
    return this.iconTab.controls;
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

    upload() {
      // Create a root reference
      let storageRef = firebase.storage().ref();

      for (let selectedFile of [(<HTMLInputElement>document.getElementById('avatar')).files[0]]) {
        let path = '/testimonial/' + Date.now() + `${selectedFile.name}`;
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

  createMonial() {
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
      mentorId: this.mentorId,
      createdBy: this.loggedInUser,
      createdOn: moment().format('DD-MM-YYYY hh:mm A'),
      createdAt: moment().format('x')
    }
    this.isLoading = true;
    this.mentorsService.addTestiMonial(data)
      .then(() => {
        this.isLoading = false;
        this.alertService.showSuccess(' added successfully !!');
        this.iconTab.reset();
        this.imageList = [];
        this.router.navigate(['/testimonial/list']);
      })
      .catch(() => {
        this.isLoading = false;
      })
  }
  updateTestiMonials() {
    this.isLoading = true;
    let data = {
      ...this.iconTab.value,
      mentorId: this.mentorId,
      id: this.monialId,
      updatedBy: this.loggedInUser,
      updatedOn: moment().format('DD-MM-YYYY hh:mm A')
    }
    console.log('data ', data);
    this.mentorsService.updateTestiMonial(data.id, data)
      .then(() => {
        this.isLoading = false;
        this.alertService.showSuccess(' updated successfully !!')
          this.router.navigate(['/testimonial/list']);
      })
  }



}
