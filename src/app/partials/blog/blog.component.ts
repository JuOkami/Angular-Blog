import { Component } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { DatePipe, SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Article } from '../../interfaces/article';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [DatePipe, RouterLink, SlicePipe],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  articles : Article[] = [];

  constructor (private articleService : ArticlesService){
    this.articles = articleService.getArticles();
  }

}
