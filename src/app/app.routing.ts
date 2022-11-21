import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { Error404Component } from "./components/error404/error404.component";
import { HospitalesComponent } from "./components/hospitales/hospitales.component";

const appRoutes : Routes = [
    {path : "" , component : HospitalesComponent},
    {path : "**" , component : Error404Component},
];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

