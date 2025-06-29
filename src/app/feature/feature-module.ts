import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details-component/details-component';
import { FeatureRouting } from './feature-routing-module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { OrderEntryComponent } from './order-entry-component/order-entry-component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    DetailsComponent,
    OrderEntryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FeatureRouting,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class FeatureModule { }
