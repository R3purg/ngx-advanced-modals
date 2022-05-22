A dynamic modal component with modal data injection for Angular 4 - 13. (https://github.com/R3purg/ngx-advanced-modals)

# NgxAdvancedModals

[![Support](https://img.shields.io/badge/Support-Angular%204%2B-blue.svg?style=flat-square)]() [![Support](https://img.shields.io/badge/Support-Angular%205%2B-blue.svg?style=flat-square)]() [![Support](https://img.shields.io/badge/Support-Angular%206%2B-blue.svg?style=flat-square)]() [![Support](https://img.shields.io/badge/Support-Angular%207%2B-blue.svg?style=flat-square)]() [![Support](https://img.shields.io/badge/Support-Angular%208%2B-blue.svg?style=flat-square)]() [![Support](https://img.shields.io/badge/Support-Angular%209%2B-blue.svg?style=flat-square)]() [![Support](https://img.shields.io/badge/Support-Angular%2010%2B-blue.svg?style=flat-square)]() [![Support](https://img.shields.io/badge/Support-Angular%2011%2B-blue.svg?style=flat-square)]() [![Support](https://img.shields.io/badge/Support-Angular%2012%2B-blue.svg?style=flat-square)]() [![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)]()

## Table of contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Available ModalItem Options](#available-modalitem-options)
  - [Using ModalItem options](#using-modalitem-options)
- [Versioning](#versioning)
- [Creator](#creator)
  - [Martynas Dambrauskas](#martynas-dambrauskas)
- [License](#license)

## Features

- Dynamic NgxAdvancedModalsComponent
- Configurable option through ModalItem
- Custom style support with ::ng-deep
- Dynamic modal forms, buttons and text
- Inject your wanted ModalItem into NgxAdvancedModals and get your desired results

## Installation

`ngx-advanced-modals` is available via [npm](https://www.npmjs.com/package/ngx-advanced-modals)

Using npm:

```bash
$ npm install ngx-advanced-modals --save
```

Using angular-cli:

```bash
$ ng add ngx-advanced-modals
```

## Usage

1. Import `NgxAdvancedModalsModule` in the root module(`AppModule`):

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxAdvancedModalsModule } from 'ngx-advanced-modals';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		NgxAdvancedModalsModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
```

2. Create 3 variables wherever you want to use the package:
```typescript
dialogRef: MatDialogRef<NgxAdvancedModalsComponent, ModalItem> | undefined;
modalSettingItem: ModalSettingItems;
modalItem: ModalConfig;
```

3. In your component, where you created the 3 previous variables, give those variables a declaration:
```typescript
this.modalSettingItem = new ModalSettingItems();
this.modalItem = new ModalConfig(this.modalSettingItem._baseModalData);
```

4. `ModalSettingItems` accepts object of type `ModalItem`:

```typescript
Title: string;
Description: string;
Input: string;
Buttons: DialogButtons[];
Output: any;
OnClick: Function;
FormGroup: DialogForm[];
```

5. Finally, you can call the dialog using the base `MatDialog` options:
```typescript
this.dialogRef = this.dialog.open(NgxAdvancedModalsComponent, this.modalItem);
```

Now use in your template:
```html
<ngx-advanced-modals></ngx-advanced-modals>
```

## Available `ModalItem` options

- **[Title]**: Title of the modal. Default value `What is yout name?`.
- **[Description]**: Description of the modal. Default value is empty string.
- **[Input]**: This variable will be set on form input, leave empty string or declare if you want to use a default input value.
- **[Buttons]**: An array of `DialogButtons`, which will be displayed in the dialog. Default are `Confirm` and `Cancel` buttons.
- **[Output]**: The output value of the dialog. Default value is `null`. When the dialog is closed, `Input` data is assigned to it.
- **[OnClick]**: `Function` that alters output data. Default function is `(output: any) => { return output; }`.
- **[FormGroup]**: An array of `DialogForm` objects. Here you declare eveyr form, that will be displayed in the modal. Default object is
```typescript
[
	new DialogForm(
		new FormControl(
			'',
			Validators.required
		),
		'Input',
		'text',
		2,
		16
	)
]
```

#### Using `ModalItem` options

```typescript
new ModalItem(
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
	(output: any) => { return output;},
	[
		new DialogForm(
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
```

---

## Versioning

ngx-advanced-modals will be maintained under the Semantic Versioning guidelines.
Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

For more information on SemVer, please visit http://semver.org.

## Creator

#### [Martynas Dambrauskas](mailto:marcius989@gmail.com)

- [@GitHub](https://github.com/R3purg)

## License

ngx-advanced-modals is [MIT licensed](./LICENSE).
