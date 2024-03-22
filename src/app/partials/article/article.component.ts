import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../../services/articles.service';
import { DatePipe } from '@angular/common';
import { Article } from '../../interfaces/article';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {

  id: number = 0;
  article? : Article;

  constructor(private route: ActivatedRoute, private router: Router, private articleService: ArticlesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.id = +params['id'];
    });
    this.article = this.articleService.getArticle(this.id);
  }

  nav() {
    this.router.navigate(['/main']);
  }


}
