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
import { CreateLanguageComponent } from './create-language/create-language.component';
import { LanguageaListComponent } from './languagea-list/languagea-list.component';



@NgModule({
  declarations: [CreateLanguageComponent, LanguageaListComponent],
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
        component: LanguageaListComponent
      },
      {
        path: 'create',
        component: CreateLanguageComponent
      },
      {
        path: 'edit/:id',
        component: CreateLanguageComponent
      },
    ]),
  ]
})
export class LanguageModule { }
