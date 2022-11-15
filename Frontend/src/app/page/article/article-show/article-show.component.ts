import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-show',
  templateUrl: './article-show.component.html',
  styleUrls: ['./article-show.component.scss']
})
export class ArticleShowComponent implements OnInit {

  constructor(private articleService:ArticleService) { }

  articles:any;

  ngOnInit(): void {
    this.articleService.listArticles().subscribe((data)=>{
      this.articles = data;
      console.log(this.articles);
    })
  }

}
