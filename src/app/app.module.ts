import { CreateOfferComponent } from './create-offer/create-offer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatListComponent } from './candidat-list/candidat-list.component';
import { CreateCandidatComponent } from './create-candidat/create-candidat.component';
import { FormsModule} from '@angular/forms';
import { UpdateCandidatComponent } from './update-candidat/update-candidat.component';
import { CandidatDetailsComponent } from './candidat-details/candidat-details.component';
import { OffersListComponent } from './offers-list/offers-list.component';
import { OfferDetailsComponent } from './offer-details/offer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatListComponent,
    CreateCandidatComponent,
    UpdateCandidatComponent,
    CandidatDetailsComponent,
    CreateOfferComponent,
    OffersListComponent,
    OfferDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
