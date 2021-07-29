import {
  Directive,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  OnInit,
  Input,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[showFor]'
})

export class ShowForDirective implements AfterViewInit, OnDestroy, OnInit {
  currUserRole: any;
  allPermissions: any = [];
  constructor(
    public el: ElementRef,
    public renderer: Renderer2,
  ) { }
  @Input('showFor') roles: any;

  ngOnChanges() {

    if (!window.localStorage.getItem('permissions')) {
      console.log('You do not have permissions ');
      return false;
    }
    this.allPermissions = JSON.parse(window.localStorage.getItem('permissions'));
    let pos = this.allPermissions.indexOf(this.roles);
    console.log('pos ', pos);
    if (pos == -1) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    }

  }
  ngOnInit(): void { }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
  }
}
