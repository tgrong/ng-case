import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() href: string;
  @Input() code: string;
  @Input() w: string;
  @Input() content: string;
  @Input() blnshow: boolean;

  @Output() clk = new EventEmitter();
  cclk(c: string) {
    this.clk.emit(c)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
