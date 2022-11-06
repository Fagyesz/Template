import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  constructor(private articleService:ArticleService ) { }

  articles:any;

  ngOnInit(): void {
    this.showArticle();
  }

  showArticle(){
    this.articleService.listArticles().subscribe(
      (data) => { // Success
        this.articles = data;
        console.log(this.articles);
      },
      (error) =>{
        console.error(error);
      }
    )
  }
}
