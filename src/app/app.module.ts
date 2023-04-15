import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { RectiveformComponent } from './rectiveform/rectiveform.component';
import { ShapelyComponent } from './shapely/shapely.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ShopComponent } from './shop/shop.component';
import {MatMenuModule} from '@angular/material/menu';
import { AlignmentComponent } from './alignment/alignment.component';
import { FormattingComponent } from './formatting/formatting.component';
import { FloatsComponent } from './floats/floats.component';
import { CommentsComponent } from './comments/comments.component';
import { DisabledComponent } from './disabled/disabled.component';
import { AboutComponent } from './about/about.component';
import { Level1Component } from './level/level1/level1.component';
import { Level2aComponent } from './level/level2a/level2a.component';
import { Level2bComponent } from './level/level2b/level2b.component';
import { Level2Component } from './level/level2/level2.component';
import { Level3Component } from './level/level3/level3.component';
import { Level3aComponent } from './level3a/level3a.component';
import { Level3bComponent } from './level/level3b/level3b.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    RectiveformComponent,
    ShapelyComponent,
    HeaderComponent,
    BlogComponent,
    PortfolioComponent,
    ShopComponent,
    AlignmentComponent,
    FormattingComponent,
    FloatsComponent,
    CommentsComponent,
    DisabledComponent,
    AboutComponent,
    Level1Component,
    Level2aComponent,
    Level2bComponent,
    Level2Component,
    Level3Component,
    Level3aComponent,
    Level3bComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
