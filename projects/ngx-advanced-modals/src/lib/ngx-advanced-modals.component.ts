import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalItem } from './models/ModalItem';

@Component({
	selector: 'ngx-advanced-modals',
	templateUrl: './ngx-advanced-modals.component.html',
	styleUrls: ['./ngx-advanced-modals.component.scss']
})
export class NgxAdvancedModalsComponent implements OnInit {

	formGroup: FormGroup = new FormGroup({});

	constructor (
		public dialogRef: MatDialogRef<NgxAdvancedModalsComponent>,
		@Inject(MAT_DIALOG_DATA) public data: ModalItem
	) { }

	ngOnInit(): void {
		if (this.data.FormGroup)
			this.prepareForm();
	}

	prepareForm(): void {
		this.data.FormGroup.forEach(a => {
			this.formGroup.addControl(a.Placeholder, a.Form);
		});
	}

	onNoClick(): void {
		this.dialogRef.close();
	}

	checkFormValidity(): boolean {
		let isValid: boolean = true;
		if (this.data.FormGroup) {
			this.data.FormGroup.forEach(a => {
				if (!a.Form.valid)
					isValid = false;
			});
		}
		return isValid;
	}

	input(e: any): string {
		return (<HTMLTextAreaElement>e.target).value;
	}

}
