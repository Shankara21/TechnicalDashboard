import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ControlService } from './../../../services/control.service';

import * as moment from 'moment';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {

  constructor(private ControlService:ControlService,private router: Router,){}
   article: any;
  id: any;
  msg: any;
  diffTime: any;


  ngOnInit():void {
    this.id = this.router.url.split('/')[2];
    this.ControlService.showArticles(this.id).subscribe((data: any) => {
      this.article = data;
      // membuat waktu yang sudah berlalu
      setTimeout(() => {
        this.diffTime = moment(this.article.createdAt).fromNow();
      }, 1000);
    })
  }

}
