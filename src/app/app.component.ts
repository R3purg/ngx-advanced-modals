import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalConfig, ModalItem, ModalSettingItems, NgxAdvancedModalsComponent } from 'ngx-advanced-modals';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'advanced-modals';

	output$: BehaviorSubject<any> = new BehaviorSubject(null);

	dialogRef: MatDialogRef<NgxAdvancedModalsComponent, ModalItem> | undefined;
	modalSettingItem: ModalSettingItems;
	modalItem: ModalConfig;

	constructor (
		public dialog: MatDialog
	) {
		this.modalSettingItem = new ModalSettingItems();
		this.modalItem = new ModalConfig(this.modalSettingItem._baseModalData);
	}

	ngOnInit(): void {
		this.openDialog().pipe(
			take(1)
		).subscribe((response: ModalItem) => {
			console.log('Response: ', response);
			if (response && response.Output)
				this.output$.next(response.Output);
		});
	}

	openDialog(): Observable<any> {
		this.dialogRef = this.dialog.open(NgxAdvancedModalsComponent, this.modalItem);
		return this.dialogRef.afterClosed();
	}

}
