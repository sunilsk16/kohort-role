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
  selector: 'app-create-coupons',
  templateUrl: './create-coupons.component.html',
  styleUrls: ['./create-coupons.component.css']
})
export class CreateCouponsComponent implements OnInit {
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
  monialId: any;
  submitted = false;

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
      'mainlabel': 'Create Coupons',
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard'
        },
        {
          'name': 'Coupons',
          'isLink': false,
        },
      ]
    };

    this.iconTab = this.formBuilder.group({
      name: ['', Validators.required],
      minBilligAmt: ['', Validators.required],

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

  cancel() {
    console.log("form submitted");
    console.log(this.iconTab.value)
    this.iconTab.reset();
  }

  createCoupon() {
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
      createdBy: this.loggedInUser,
      createdOn: moment().format('DD-MM-YYYY hh:mm A'),
      createdAt: moment().format('x')
    }
    this.isLoading = true;
    this.mentorsService.createCoupons(data)
      .then(() => {
        this.isLoading = false;
        this.alertService.showSuccess(' added successfully !!');
        this.iconTab.reset();
        this.imageList = [];
        this.router.navigate(['/coupons/list']);
      })
      .catch(() => {
        this.isLoading = false;
      })
  }
  updateCoupon() {
    this.isLoading = true;
    let data = {
      ...this.iconTab.value,
      id: this.monialId,
      updatedBy: this.loggedInUser,
      updatedOn: moment().format('DD-MM-YYYY hh:mm A')
    }
    console.log('data ', data);
    this.mentorsService.updateCoupons(data.id, data)
      .then(() => {
        this.isLoading = false;
        this.alertService.showSuccess(' updated successfully !!')
          this.router.navigate(['/coupons/list']);
      })
  }
  }
