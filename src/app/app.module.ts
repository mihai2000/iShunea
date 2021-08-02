import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import {AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { AcasaPageComponent } from './pages/acasa-page/acasa-page.component';
import { ServiciiPageComponent } from './pages/servicii-page/servicii-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { DespreNoiPageComponent } from './pages/despre-noi-page/despre-noi-page.component';
import { ContactePageComponent } from './pages/contacte-page/contacte-page.component';
import { NavbarComponent } from './pages/acasa-page/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarieraPageComponent } from './pages/cariera-page/cariera-page.component';
import { AcasaDetaliiComponent } from './pages/acasa-page/acasa-detalii/acasa-detalii.component';
import { ComandaConsultatiiComponent } from './pages/acasa-page/comanda-consultatii/comanda-consultatii.component';
import { CumLucramNoiComponent } from './pages/acasa-page/cum-lucram-noi/cum-lucram-noi.component';
import { SpecificatiiComponent } from './pages/acasa-page/specificatii/specificatii.component';
import { ParteneriComponent } from './pages/acasa-page/parteneri/parteneri.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComandaApelComponent } from './pages/acasa-page/comanda-apel/comanda-apel.component';
import { NavbarServiciiComponent } from './pages/servicii-page/navbar-servicii/navbar-servicii.component';
import { NavbarPortfolioComponent } from './pages/portfolio-page/navbar-portfolio/navbar-portfolio.component';
import { NavbarDespreNoiComponent } from './pages/despre-noi-page/navbar-despre-noi/navbar-despre-noi.component';
import { NavbarContacteComponent } from './pages/contacte-page/navbar-contacte/navbar-contacte.component';
import { NavbarCarieraComponent } from './pages/cariera-page/navbar-cariera/navbar-cariera.component';


@NgModule({
  declarations: [
    AppComponent,
    AcasaPageComponent,
    ServiciiPageComponent,
    PortfolioPageComponent,
    DespreNoiPageComponent,
    ContactePageComponent,
    NavbarComponent,
    CarieraPageComponent,
    AcasaDetaliiComponent,
    ComandaConsultatiiComponent,
    CumLucramNoiComponent,
    SpecificatiiComponent,
    ParteneriComponent,
    FooterComponent,
    ComandaApelComponent,
    NavbarServiciiComponent,
    NavbarPortfolioComponent,
    NavbarDespreNoiComponent,
    NavbarContacteComponent,
    NavbarCarieraComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
