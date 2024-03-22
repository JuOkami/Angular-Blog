import { Routes } from '@angular/router';
import { BlogComponent } from './partials/blog/blog.component';
import { ArticleComponent } from './partials/article/article.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { ContactComponent } from './partials/contact/contact.component';
import { PokedexComponent } from './partials/pokedex/pokedex.component';

export const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'article/:id', component: ArticleComponent, canActivate: [authGuard] },
  {path: 'login', component: LoginComponent},
  {path:'logout', component: LogoutComponent},
  {path: 'register', component: RegisterComponent},
  {path:'contact', component: ContactComponent},
  {path:'pokedex', component: PokedexComponent}
];
