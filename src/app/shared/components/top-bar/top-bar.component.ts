import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  isDarkMode: boolean = true;

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add("dark-mode");
  }

  public toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;

    document.body.classList.toggle("dark-mode");
  }
}
