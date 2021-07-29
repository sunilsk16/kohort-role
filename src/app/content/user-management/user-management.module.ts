import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { AgmCoreModule } from '@agm/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { BreadcrumbModule } from 'src/app/_layout/breadcrumb/breadcrumb.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlockTemplateComponent } from 'src/app/_layout/blockui/block-template.component';
import { BlockUIModule } from 'ng-block-ui';
import { environment } from 'src/environments/environment';
import {Angular2PhotoswipeModule} from 'angular2_photoswipe';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    NgxEchartsModule,
    ChartsModule,
    FormsModule,
    NgbModule,
    BreadcrumbModule,
    Angular2PhotoswipeModule,
    DataTablesModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey,
      libraries: ['places']
    }),
    RouterModule.forChild([
      {
        path: 'list',
        component: UserListComponent
      },
    ]),
  ]
})
export class UserManagementModule { }
