import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatMenuModule, MatDividerModule } from '@angular/material';
import { SearchPipe } from './search.pipe';
import { MatTelInputComponent } from './mat-tel-input.component';

@NgModule({
  declarations: [
    MatTelInputComponent,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule
  ],
  exports: [MatTelInputComponent]
})
export class MatTelInputModule { }
