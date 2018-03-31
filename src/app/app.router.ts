import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { KonstantaComponent } from './contents/lain/konstanta/konstanta.component';
import { ReferensiComponent } from './contents/lain/referensi/referensi.component';
import { GlosariumComponent } from './contents/lain/glosarium/glosarium.component';
import { LainComponent } from './contents/lain/lain.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: 'app/contents/beranda/beranda.module#BerandaModule',
    },
    {
        path: 'beranda',
        loadChildren: 'app/contents/beranda/beranda.module#BerandaModule',
    },
    {
        path: 'umum',
        loadChildren: 'app/contents/umum/umum.module#UmumModule'
    },
    {
        path: 'matahari',
        loadChildren: 'app/contents/matahari/matahari.module#MatahariModule'
    },
    {
        path: 'bulan',
        loadChildren: 'app/contents/bulan/bulan.module#BulanModule'
    },
    {
        path: 'planet',
        loadChildren: 'app/contents/planet/planet.module#PlanetModule'
    },
    {
        path: '',
        loadChildren: 'app/contents/lain/lain.module#LainModule'
    },
];

// @NgModule({
//     imports: [RouterModule.forChild(routes)],
//     exports: [RouterModule]
// })
export const AppRouter: ModuleWithProviders = RouterModule.forRoot(routes);
