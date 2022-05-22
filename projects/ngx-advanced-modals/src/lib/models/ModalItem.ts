import { FormControl } from "@angular/forms";
import { MatDialogConfig } from "@angular/material/dialog";

export class DialogButtons {
	Text: string;
	Style: string;
	Output: any;
	constructor (text: string, style: string, output: any) {
		this.Text = text;
		this.Style = style;
		this.Output = output;
	}
}

export class DialogForm {
	Form: FormControl;
	Placeholder: string;
	Type: string;
	MinLength: number;
	MaxLength: number;
	constructor (form: FormControl, placeholder: string, type: string, minLength: number = -1, maxLength: number = -1) {
		this.Form = form;
		this.Placeholder = placeholder;
		this.Type = type;
		this.MinLength = minLength;
		this.MaxLength = maxLength;
	}
}

export class ModalItem {
	Title: string;
	Description: string;
	Input: string;
	Buttons: DialogButtons[];
	Output: any;
	OnClick: Function;
	FormGroup: DialogForm[];
	constructor (
		title: string = '',
		description: string = '',
		input: string = '',
		buttons: DialogButtons[] = [],
		output: any = null,
		onClick: Function = () => {},
		formGroup: DialogForm[] = []
	) {
		this.Title = title;
		this.Description = description;
		this.Input = input;
		this.Buttons = buttons;
		this.Output = output;
		this.OnClick = onClick;
		this.FormGroup = formGroup;
	}
}

export class ModalConfig extends MatDialogConfig<ModalItem> {
	constructor (
		customData: ModalItem = new ModalItem(),
		height: string = 'fit-content',
		maxWidth: string = 'initial',
		panelClass: string = 'my-dialog-global',
		disableClose: boolean = true,
		backdropClass: string = 'backdropBackground'
	) {
		super();
	 	this.data = customData;
		this.height = height;
		this.maxWidth = maxWidth;
		this.panelClass = panelClass;
		this.disableClose = disableClose;
		this.backdropClass = backdropClass;
	}
}
