import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private articles: Article[] = [
    {
      id: 0,
      titre: 'Brendan a un problème avec moi',
      contenu:
        "Brendan et moi avons toujours été proches, mais récemment, j'ai remarqué qu'il semblait distant. Nos conversations sont devenues courtes et tendues, et je sens qu'il évite délibérément de passer du temps avec moi. Je me demande ce qui a pu se passer pour qu'il développe ce problème avec moi. Peut-être qu'une conversation franche est nécessaire pour résoudre ce malentendu et rétablir notre relation.",
      date: new Date(2024, 4, 12),
    },
    {
      id: 1,
      titre: "De toutes façon windows c'est de la merde",
      contenu:
        "Il est indéniable que Windows est le système d'exploitation le plus répandu, mais beaucoup d'utilisateurs expriment des frustrations à son égard. Des plantages inopinés aux mises à jour forcées, les utilisateurs ont souvent l'impression que Windows ne répond pas à leurs attentes en termes de fiabilité et de convivialité. Bien sûr, il a ses avantages, mais il est temps de reconnaître et d'explorer les alternatives pour un environnement informatique plus stable et sécurisé.",
      date: new Date(2023, 10, 24),
    },
    {
      id: 2,
      titre: "Angular est-il l'avenir des animaux de compagnie",
      contenu:
        "Angular, un framework JavaScript développé par Google, a connu une montée en popularité dans le domaine du développement web. Mais peut-on étendre son potentiel à d'autres domaines, même inattendus comme les animaux de compagnie? Avec ses caractéristiques de modularité et de facilité d'utilisation, Angular pourrait révolutionner la manière dont nous interagissons avec nos amis à fourrure. Imaginez des applications de suivi de santé animale ou des jeux interactifs basés sur Angular, ouvrant ainsi de nouvelles perspectives pour nos compagnons à poils.",
      date: new Date(2024, 2, 9),
    },
    {
      id: 3,
      titre: "Oui mais quid de l'alimentation des alpagas ?",
      contenu:
        "Les alpagas, ces adorables créatures domestiques, sont souvent négligés lorsqu'il s'agit de discuter de leur alimentation. Pourtant, une nutrition adéquate est essentielle pour leur santé et leur bien-être. Des régimes équilibrés comprenant une variété de fourrages et de suppléments nutritifs sont nécessaires pour maintenir leur pelage luxuriant et leur système immunitaire robuste. En explorant les besoins nutritionnels spécifiques des alpagas, nous pouvons garantir qu'ils mènent une vie heureuse et saine dans nos élevages.",
      date: new Date(2024, 8, 9),
    },
  ];

  getArticles() {
    return this.articles;
  }

  getArticle(index: number) {
    return this.articles[index];
  }
}
