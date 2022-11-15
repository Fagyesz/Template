import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  url = 'http://localhost:8000';

  constructor(private http:HttpClient) { }

  listArticles(){
    return this.http.get(`${this.url}/api/articles`);
  }
  getArticle(){
    return this.http.get(`${this.url}/api/article`);
  }

}
