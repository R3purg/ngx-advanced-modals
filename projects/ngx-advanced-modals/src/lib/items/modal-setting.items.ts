import { FormControl, Validators } from "@angular/forms";
import { DialogButtons, DialogForm, ModalItem } from "../models/ModalItem";

export class ModalSettingItems {

	constructor (
		ModalData?: ModalItem
	) {
		this._baseModalData = ModalData ?? this._baseModalData;
	}

	_baseModalData = new ModalItem(
		'What is your name?',
		'',
		'',
		[
			new DialogButtons(
				'Confirm',
				'',
				true
			),
			new DialogButtons(
				'Cancel',
				'',
				false
			)
		],
		null,
		(output: any) => { return output; },
		[
			new DialogForm(
				/*Form*/
				new FormControl(
					'',
					Validators.required
				),
				'Input',
				'text',
        2,
        16
			)
		],
	);

}
