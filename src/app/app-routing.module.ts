import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlignmentComponent } from './alignment/alignment.component';
import { BlogComponent } from './blog/blog.component';
import { CommentsComponent } from './comments/comments.component';
import { DisabledComponent } from './disabled/disabled.component';
import { FloatsComponent } from './floats/floats.component';
import { FormattingComponent } from './formatting/formatting.component';
import { Level1Component } from './level/level1/level1.component';
import { Level2Component } from './level/level2/level2.component';
import { Level2aComponent } from './level/level2a/level2a.component';
import { Level2bComponent } from './level/level2b/level2b.component';
import { Level3Component } from './level/level3/level3.component';
import { Level3bComponent } from './level/level3b/level3b.component';
import { Level3aComponent } from './level3a/level3a.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ShapelyComponent } from './shapely/shapely.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path:'',component:ShapelyComponent},
  {path:'blog',component:BlogComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'shop',component:ShopComponent},
  {path:'alignment',component:AlignmentComponent},
  {path:'foramatting',component:FormattingComponent},
  {path:'float',component:FloatsComponent},
  {path:'comments',component:CommentsComponent},
  {path:'disable',component:DisabledComponent},
  {path:'about',component:AboutComponent},
  {path:'level1',component:Level1Component},
  {path:'level2',component:Level2Component},
  {path:'level2a',component:Level2aComponent},
  {path:'level2b',component:Level2bComponent},
  {path:'level3',component:Level3Component},
  {path:'level3a',component:Level3aComponent},
  {path:'level3b',component:Level3bComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
