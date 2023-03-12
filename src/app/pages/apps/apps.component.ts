import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

  constructor(){}
  descriptionApps = [
    'Autonum adalah sebuah aplikasi yang digunakan untuk membuat penomoran secara otomatis',
    'Docman adalah sebuah aplikasi yang berguna untuk '
  ]

  ngOnInit(): void {

  }
}
