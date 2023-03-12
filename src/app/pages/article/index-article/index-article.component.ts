import { ControlService } from './../../../services/control.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-index-article',
  templateUrl: './index-article.component.html',
  styleUrls: ['./index-article.component.css']
})
export class IndexArticleComponent implements OnInit {
   // pagination
  p: number = 1;
  itemsPerPage: number = 10;
  totalProduct: any;
  // search
  term: any;

  articles: any[] = [];
  categories: any[] = [];

category!: FormGroup;

   constructor(public ControlService:ControlService){}
    ngOnInit():void{
      this.ControlService.getCategories().subscribe((data: any) => {
      this.categories = data;
    })
    this.ControlService.getArticles().subscribe((data: any) => {
      this.articles = data;
    })

    this.category = new FormGroup({
      name: new FormControl('', [Validators.required]),
    })
    }
    filterCategory() {
    this.ControlService.filterCategory(this.category.value.name).subscribe((data: any) => {
      this.articles = data;
    })
  }
  refresh() {
    this.ControlService.getArticles().subscribe((data: any) => {
      this.articles = data;
    })
  }
}
