import { AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
   <ng-content></ng-content>
  `,
  styles: []
})
export class MyLibComponent implements OnInit,AfterContentInit {
@ContentChild('pargraph') pargraph:ElementRef;
  constructor() { }

  ngOnInit(): void {
    console.log(this.pargraph)
  }
  ngAfterContentInit(){
   console.log('textt2',this.pargraph.nativeElement.textContent)
  }
 

}
