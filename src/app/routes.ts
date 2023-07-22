import { Routes } from "@angular/router";
import { PcComponent } from 'src/app/pc/pc.component';

export const appRoutes : Routes = [
    {path:"pc",component:PcComponent},
    {path:"**",redirectTo:"pc",pathMatch:"full"},
]