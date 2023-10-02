import {NgModule} from '@angular/core';
import { DetailsReviewsComponent } from '../components/details-reviews/details-reviews.component';
import { RouterModule, Routes } from '@angular/router';
import { AppDetailsActorsComponent } from '../components/app-details-actors/app-details-actors.component';
import { DetailsMoviesComponent } from '../components/details-movies/details-movies.component';
import { HomeComponent } from '../components/home/home.component';
import { SearchComponent } from '../components/search/search.component';
import { DetailsComponent } from '../components/details/details.component';

const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'details', component: DetailsComponent},
    {path:'details/movies', component: DetailsMoviesComponent},
    {path:'details/actors', component: AppDetailsActorsComponent},
    {path:'details/reviews', component: DetailsReviewsComponent},
    {path:'search', component: SearchComponent}
    // {path:'feedback', component: FeedbackComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes),],
    exports: [RouterModule]
})

export class AppRoutesModule{}