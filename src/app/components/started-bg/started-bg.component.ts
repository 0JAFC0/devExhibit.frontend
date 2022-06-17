import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-started-bg',
  templateUrl: './started-bg.component.html',
  styleUrls: ['./started-bg.component.css']
})
export class StartedBgComponent implements OnInit {

  imageBg: String = "../../../assets/images/forest.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
