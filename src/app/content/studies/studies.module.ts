import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'src/app/_layout/breadcrumb/breadcrumb.module';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { AgmCoreModule } from '@agm/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlockTemplateComponent } from 'src/app/_layout/blockui/block-template.component';
import { BlockUIModule } from 'ng-block-ui';
import { environment } from 'src/environments/environment';
import { Angular2PhotoswipeModule } from 'angular2_photoswipe';
import { DataTablesModule } from 'angular-datatables';
import { AbrodStudiesComponent } from './abrod-studies/abrod-studies.component';
import { AbrodStudiesListComponent } from './abrod-studies-list/abrod-studies-list.component';



@NgModule({
  declarations: [AbrodStudiesComponent, AbrodStudiesListComponent],
  imports: [
    CommonModule,
    NgxEchartsModule,
    ChartsModule,
    NgbModule,
    BreadcrumbModule,
    ReactiveFormsModule,
    Angular2PhotoswipeModule,
    FormsModule,
    ToastrModule.forRoot(),
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
        component: AbrodStudiesListComponent
      },
      {
        path: 'create',
        component: AbrodStudiesComponent
      },
      {
        path: 'edit/:id',
        component: AbrodStudiesComponent
      },
    ]),
  ]
})
export class StudiesModule { }
