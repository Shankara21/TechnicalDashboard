import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
   private url = 'http://localhost:3000/';
  private techtalk = 'http://192.168.9.47:3125/'
  constructor(private HttpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  ///////////////////////
  ///// ProjectDev /////
  //////////////////////

  // Projects
  getAllProjects() {
    return this.HttpClient.get(this.url + 'projects/index')
      .pipe(catchError(this.errorHttpHandler))
  }
   filterALLChartYear(year: any) {
    return this.HttpClient.get(this.url + `projects/filterAllByYear/${year}`)
      .pipe(catchError(this.errorHttpHandler))
  }
  filterChartBySection(section: any, year: any) {
    return this.HttpClient.get(this.url + `projects/filterBySection/${year}/${section}`)
      .pipe(catchError(this.errorHttpHandler))
  }


  ///////////////////////
  ////// TechTalk //////
  //////////////////////

  // Categories
  getCategories() {
    return this.HttpClient.get(this.url + 'categories')
      .pipe(catchError(this.errorHttpHandler))
  }
  showCategories(id: any) {
    return this.HttpClient.get(this.url + 'categories/' + id)
      .pipe(catchError(this.errorHttpHandler))
  }
  createCategory(params: any) {
    return this.HttpClient.post(this.url + `categories`, params)
      .pipe(catchError(this.errorHttpHandler))
  }
  updateCategory(id: any, params: any) {
    return this.HttpClient.put(this.url + `categories/${id}`, params)
      .pipe(catchError(this.errorHttpHandler))
  }
  deleteCategory(id: any) {
    return this.HttpClient.delete(this.url + `categories/${id}`)
      .pipe(catchError(this.errorHttpHandler))
  }

  // Articles
  getArticles() {
    return this.HttpClient.get(this.url + 'articles')
      .pipe(catchError(this.errorHttpHandler))
  }
  showArticles(title: any) {
    return this.HttpClient.get(this.url + 'articles/' + title)
      .pipe(catchError(this.errorHttpHandler))
  }
  createArticle(params: any) {
    return this.HttpClient.post(this.url + `articles`, params)
      .pipe(catchError(this.errorHttpHandler))
  }
  updateArticle(id: any, params: any) {
    return this.HttpClient.put(this.url + `articles/${id}`, params)
      .pipe(catchError(this.errorHttpHandler))
  }
  deleteArticle(id: any) {
    return this.HttpClient.delete(this.url + `articles/${id}`)
      .pipe(catchError(this.errorHttpHandler))
  }
  filterCategory(name: any) {
    return this.HttpClient.get(this.url + `articles/filter/${name}`)
      .pipe(catchError(this.errorHttpHandler))
  }




   // Error handling
  errorHttpHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error ${error.error.message}`
    }
    else {
      errorMessage = `Error code : ${error.status}\n${error.message}`
    }
    return throwError(errorMessage)
  }
}
