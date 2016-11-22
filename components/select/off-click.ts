import { Directive, HostListener, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[offClick]'
})

export class OffClickDirective implements OnInit, OnDestroy {
  /* tslint:disable */
  @Input('offClick') public offClickHandler: any;
  /* tslint:enable */
  @HostListener('click', ['$event']) public onClick($event: MouseEvent): void {

    let docRef = (<any>document);

    if ((!docRef.ng2selected || $event.currentTarget == docRef.ng2selected)){
      $event.stopPropagation();
    }
    docRef.ng2selected = $event.currentTarget;
  }

  public ngOnInit(): any {
    setTimeout(() => {document.addEventListener('click', this.offClickHandler);}, 0);
  }

  public ngOnDestroy(): any {
    document.removeEventListener('click', this.offClickHandler);
  }
}
