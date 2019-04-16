import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface IUser {
  username: string;
  email: string;
  secretQuestion: string;
  answer: string;
  gender: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public defaultQuestion: string = 'pet';
  public answer: string = '';
  public submitted: boolean = false;
  public genders: string[] = [
    'male',
    'female'
  ];
  public user: IUser = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };

  @ViewChild('form')
  private _form: NgForm;

  public suggestUserName(): void {
    const suggestedName: string = 'Superuser';

    this._form.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  public onSubmit(): void {
    this.submitted = true;
    this.user.username = this._form.value.userData.username; // tslint:disable-line: no-unsafe-any
    this.user.email = this._form.value.userData.email; // tslint:disable-line: no-unsafe-any
    this.user.secretQuestion = this._form.value.secret; // tslint:disable-line: no-unsafe-any
    this.user.answer = this._form.value.questionAnswer; // tslint:disable-line: no-unsafe-any
    this.user.gender = this._form.value.gender; // tslint:disable-line: no-unsafe-any
    this._form.reset();
  }
}
