import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcasaPageComponent } from "./pages/acasa-page/acasa-page.component";
import {CarieraPageComponent} from "./pages/cariera-page/cariera-page.component";
import {ContactePageComponent} from "./pages/contacte-page/contacte-page.component";
import {DespreNoiPageComponent} from "./pages/despre-noi-page/despre-noi-page.component";
import {PortfolioPageComponent} from "./pages/portfolio-page/portfolio-page.component";
import {ServiciiPageComponent} from "./pages/servicii-page/servicii-page.component";

const routes: Routes = [
  {path:'',component:AcasaPageComponent},
  {path:'cariera', component:CarieraPageComponent},
  {path:'contacte', component:ContactePageComponent},
  {path:'despreNoi', component:DespreNoiPageComponent},
  {path:'portfolio', component:PortfolioPageComponent},
  {path:'servicii', component:ServiciiPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export  const routingComponents =
  [AcasaPageComponent, ServiciiPageComponent, PortfolioPageComponent, DespreNoiPageComponent, ContactePageComponent, CarieraPageComponent]
