import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NewPagePage } from './new-page/new-page.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'new-page',
    loadChildren: () => import('./new-page/new-page.module').then( m => m.NewPagePageModule)
  },
  // {
  //   path: 'new-page',
  //   component: NewPagePage
  // },
  {
    path: 'second-page',
    loadChildren: () => import('./second-page/second-page.module').then( m => m.SecondPagePageModule)
  }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
