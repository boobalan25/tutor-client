import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InModule } from 'innerproject/app/app.module';
import { AddContentComponent } from 'innerproject/app/components/add-content/add-content.component';
import { ContentViewerComponent } from 'innerproject/app/components/content-viewer/content-viewer.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'addContent', component: AddContentComponent },
  { path: 'content/..', component: ContentViewerComponent },
  { path: 'login', component: LoginComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    InModule.forRoot()
  ],  
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
