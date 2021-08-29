import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
  @ViewChild('viewpargraph') viewpargraph:ElementRef;
  title = 'mywork';
  ngOnInit():void{
    console.log('text',this.viewpargraph)
  }
  ngAfterViewInit():void{
    console.log('text',this.viewpargraph.nativeElement.textContent)
  }
}
