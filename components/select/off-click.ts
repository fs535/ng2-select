import { Directive, HostListener, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[offClick]'
})

export class OffClickDirective implements OnInit, OnDestroy {
  /* tslint:disable */
  @Input('offClick') public offClickHandler: any;
  /* tslint:enable */
  @HostListener('click', ['$event']) public onClick($event: MouseEvent): void {
    if ((!document['ng2selected'] || $event.currentTarget == document['ng2selected'])){
      $event.stopPropagation();
    }
    document['ng2selected'] = $event.currentTarget;
  }

  public ngOnInit(): any {
    setTimeout(() => {document.addEventListener('click', this.offClickHandler);}, 0);
  }

  public ngOnDestroy(): any {
    document.removeEventListener('click', this.offClickHandler);
  }
}
