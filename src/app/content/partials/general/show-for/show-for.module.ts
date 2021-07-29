import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowForDirective } from 'src/app/_directives/show-for';

@NgModule({
  declarations: [ShowForDirective],
  imports: [
    CommonModule,
  ],
  exports: [ShowForDirective]
})
export class ShowForModule { }
