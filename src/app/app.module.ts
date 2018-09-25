import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestDetailComponent } from './test-detail/test-detail.component';
import { TestCreateComponent } from './test-create/test-create.component';
import { TestEditComponent } from './test-edit/test-edit.component';

const appRoutes: Routes = [
  {
    path: 'tests',
    component: TestComponent,
    data: { title: 'Test List' }
  },
  {
    path: 'test-details/:id',
    component: TestDetailComponent,
    data: { title: 'Test Details' }
  },
  {
    path: 'test-create',
    component: TestCreateComponent,
    data: { title: 'Test Create' }
  },
  {
    path: 'test-edit/:id',
    component: TestEditComponent,
    data: { title: 'Edit Test' }
  },
  {
    path: '',
    redirectTo: '/tests',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestDetailComponent,
    TestCreateComponent,
    TestEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
