import {NgModule} from '@angular/core';
import { DetailsReviewsComponent } from '../components/details-reviews/details-reviews.component';
import { RouterModule, Routes } from '@angular/router';
import { AppDetailsActorsComponent } from '../components/app-details-actors/app-details-actors.component';
import { DetailsMoviesComponent } from '../components/details-movies/details-movies.component';
import { HomeComponent } from '../components/home/home.component';
import { SearchComponent } from '../components/search/search.component';
import { DetailsComponent } from '../components/details/details.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'details/:id', component: DetailsComponent},
    {path:'details/actors/:id', component: AppDetailsActorsComponent},
    {path:'details/movies/:id', component: DetailsMoviesComponent},
    {path:'details/reviews/:id', component: DetailsReviewsComponent},
    {path:'search/:movieTitle', component: SearchComponent},
    // {path:'feedback', component: FeedbackComponent}

    // 404 page for non-existing URL's

    {path:'**', component: NotFoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes),],
    exports: [RouterModule]
})

export class AppRoutesModule{}