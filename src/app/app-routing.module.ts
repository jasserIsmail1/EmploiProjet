import { CreateOfferComponent } from './create-offer/create-offer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatListComponent } from './candidat-list/candidat-list.component';
import { CreateCandidatComponent } from './create-candidat/create-candidat.component';
import { UpdateCandidatComponent } from './update-candidat/update-candidat.component';
import { CandidatDetailsComponent } from './candidat-details/candidat-details.component';
import { OffersListComponent } from './offers-list/offers-list.component';

const routes: Routes = [
  {path: 'candidats', component: CandidatListComponent},
  {path: 'create-candidat', component: CreateCandidatComponent},
  {path: '', redirectTo: 'candidats', pathMatch: 'full'},
  {path: 'update-candidat/:id', component: UpdateCandidatComponent},
  {path: 'candidat-details/:id', component: CandidatDetailsComponent},
  {path: 'create-offer',component:CreateOfferComponent},
  {path:'offers-list',component:OffersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
