import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-ex',
  templateUrl: './databinding-ex.component.html',
  styleUrls: ['./databinding-ex.component.css']
})
export class DatabindingExComponent implements OnInit {
  userName: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onClearUserName() {
    this.userName = ""
  }

}
