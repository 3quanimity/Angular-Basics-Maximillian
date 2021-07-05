import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-ex',
  templateUrl: './directives-ex.component.html',
  styleUrls: ['./directives-ex.component.css']
})
export class DirectivesExComponent implements OnInit {
  isDisplay: boolean = false;
  btnClickLog = []

  constructor() { }

  ngOnInit(): void {
  }

  onClickBtn() {
    this.isDisplay = !this.isDisplay;
    const now = new Date()
    this.btnClickLog.push(now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds())
  }

}
