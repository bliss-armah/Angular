import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: { type: string; name: string; content: string };
  constructor() {
    console.log('constructor called');
  }

  @Input() name:string

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }
}
