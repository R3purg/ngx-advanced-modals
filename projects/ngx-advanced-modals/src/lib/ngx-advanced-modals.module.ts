import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxAdvancedModalsComponent } from './ngx-advanced-modals.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [
		NgxAdvancedModalsComponent
	],
	imports: [
		CommonModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
		ReactiveFormsModule,
		MatButtonModule,
		FlexLayoutModule,
		MatIconModule
	],
	providers: [
		{
			provide: MatDialogRef,
			useValue: {}
		},
		{
			provide: MAT_DIALOG_DATA,
			useValue: {}
		}
	],
	exports: [
		NgxAdvancedModalsComponent
	]
})
export class NgxAdvancedModalsModule { }
