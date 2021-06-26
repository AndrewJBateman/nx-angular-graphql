import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeatureTasksModule } from '@nx-angular-graphql/feature-tasks';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, GraphQLModule, FeatureTasksModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
