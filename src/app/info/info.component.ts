import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  name = '';
  number = '';
  addres = '';
  isShowform = true;
  constructor() { }

  ngOnInit(): void {
  }

}
