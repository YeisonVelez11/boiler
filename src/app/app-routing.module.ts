import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent,
		HomeComponent,
	 } from '../pages/index.paginas';

const appRoutes: Routes = [
	{path: '', component: NotFoundComponent},
	{path: 'home/:niu', component: HomeComponent},
	{path: '**', component: NotFoundComponent},
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
