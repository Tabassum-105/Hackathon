import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details-component/details-component';
import { OrderEntryComponent } from './order-entry-component/order-entry-component';

const routes: Routes = [{ path: '', component: OrderEntryComponent },
// { path: 'detail', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRouting {}