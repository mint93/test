import { Observable, of } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from './register.service';
import { HttpClientMock } from 'src/testing/http-client-mock';
import { HttpClient } from '@angular/common/http';

class RegisterMockService extends RegisterService {
  // cunstructor() {
  //   super(new HttpClientMock());
  // }
}

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let registerService: RegisterService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        {provide: RegisterService, useClass: RegisterMockService},
        {provide: HttpClient, useClass: HttpClientMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    registerService = TestBed.get(RegisterService);
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  describe('firstName field validity', () => {
    it('firstName field invalid when empty', () => {
      const firstName = component.form.controls['firstName'];
      expect(firstName.valid).toBeFalsy();
    });

    it('firstName field required validation error', () => {
      let errors = {};
      const firstName = component.form.controls['firstName'];
      errors = firstName.errors || {};
      expect(errors['required']).toBeTruthy();
    });

    it('firstName field minlength validation error', () => {
      let errors = {};
      const firstName = component.form.controls['firstName'];
      firstName.setValue('a');
      errors = firstName.errors || {};
      expect(errors['minlength']).toBeTruthy();
    });

    it('firstName field valid', () => {
      const firstName = component.form.controls['firstName'];
      firstName.setValue('firstName');
      expect(firstName.valid).toBeTruthy();
    });
  });

  describe('lastName field validity', () => {
    it('lastName field invalid when empty', () => {
      const lastName = component.form.controls['lastName'];
      expect(lastName.valid).toBeFalsy();
    });

    it('lastName field required validation error', () => {
      let errors = {};
      const lastName = component.form.controls['lastName'];
      errors = lastName.errors || {};
      expect(errors['required']).toBeTruthy();
    });

    it('lastName field minlength validation error', () => {
      let errors = {};
      const lastName = component.form.controls['lastName'];
      lastName.setValue('a');
      errors = lastName.errors || {};
      expect(errors['minlength']).toBeTruthy();
    });

    it('lastName field valid', () => {
      const lastName = component.form.controls['lastName'];
      lastName.setValue('lastName');
      expect(lastName.valid).toBeTruthy();
    });
  });

  describe('phone field validity', () => {
    it('phone field invalid when empty', () => {
      const phone = component.form.controls['phone'];
      expect(phone.valid).toBeFalsy();
    });

    it('phone field required validation error', () => {
      let errors = {};
      const phone = component.form.controls['phone'];
      errors = phone.errors || {};
      expect(errors['required']).toBeTruthy();
    });

    it('phone field pattern validation error', () => {
      let errors = {};
      const phone = component.form.controls['phone'];
      phone.setValue('123');
      errors = phone.errors || {};
      expect(errors['pattern']).toBeTruthy();
    });

    it('phone field valid', () => {
      const phone = component.form.controls['phone'];
      phone.setValue('+48 123 123 123');
      expect(phone.valid).toBeTruthy();
    });
  });

  describe('email field validity', () => {
    it('email field invalid when empty', () => {
      const email = component.form.controls['email'];
      expect(email.valid).toBeFalsy();
    });

    it('email field required validation error', () => {
      let errors = {};
      const email = component.form.controls['email'];
      errors = email.errors || {};
      expect(errors['required']).toBeTruthy();
    });

    it('email field pattern validation error', () => {
      let errors = {};
      const email = component.form.controls['email'];
      email.setValue('email123');
      errors = email.errors || {};
      expect(errors['pattern']).toBeTruthy();
    });

    it('email field valid', () => {
      const email = component.form.controls['email'];
      email.setValue('email123@mail.com');
      expect(email.valid).toBeTruthy();
    });
  });

  describe('username field validity', () => {
    it('username field invalid when empty', () => {
      const username = component.form.controls['username'];
      expect(username.valid).toBeFalsy();
    });

    it('username field required validation error', () => {
      let errors = {};
      const username = component.form.controls['username'];
      errors = username.errors || {};
      expect(errors['required']).toBeTruthy();
    });

    it('username field minlength validation error', () => {
      let errors = {};
      const username = component.form.controls['username'];
      username.setValue('a');
      errors = username.errors || {};
      expect(errors['minlength']).toBeTruthy();
    });

    it('username field valid', () => {
      const username = component.form.controls['username'];
      username.setValue('username');
      expect(username.valid).toBeTruthy();
    });
  });

  describe('passwords field validity', () => {

    describe('password field validity', () => {
      it('password field invalid when empty', () => {
        const password = component.form.get('passwords').get('password');
        expect(password.valid).toBeFalsy();
      });

      it('password field required validation error', () => {
        let errors = {};
        const password = component.form.get('passwords').get('password');
        errors = password.errors || {};
        expect(errors['required']).toBeTruthy();
      });

      it('password field minlength validation error', () => {
        let errors = {};
        const password = component.form.get('passwords').get('password');
        password.setValue('a');
        errors = password.errors || {};
        expect(errors['minlength']).toBeTruthy();
      });

      it('password field valid', () => {
        const password = component.form.get('passwords').get('password');
        password.setValue('password');
        expect(password.valid).toBeTruthy();
      });
    });

    it('passwords field invalid when empty', () => {
      const passwords = component.form.get('passwords');
      expect(passwords.valid).toBeFalsy();
    });

    it('passwords field confirmPassword validation error', () => {
      let errors = {};
      const password = component.form.get('passwords').get('password');
      password.setValue('pass');
      const confirmPassword = component.form.get('passwords').get('confirmPassword');
      confirmPassword.setValue('pass123');
      const passwords = component.form.get('passwords');
      errors = passwords.errors || {};
      expect(errors['confirmPassword']).toBeTruthy();
    });

    it('passwords field valid', () => {
      const password = component.form.get('passwords').get('password');
      password.setValue('pass');
      const confirmPassword = component.form.get('passwords').get('confirmPassword');
      confirmPassword.setValue('pass');
      const passwords = component.form.get('passwords');
      expect(passwords.valid).toBeTruthy();
    });
  });

  describe('submit a from successfuly', () => {

    beforeEach(() => {
      spyOn(registerService, 'save').and.returnValue(
        Observable.create(observer => observer.complete())
      );
      fixture.detectChanges();
    });

    it('should set success to true', () => {
      expect(component.form.valid).toBeFalsy();
      component.form.controls['firstName'].setValue('first name');
      component.form.controls['lastName'].setValue('last name');
      component.form.controls['phone'].setValue('+48 123 123 123');
      component.form.controls['email'].setValue('email@mail.com');
      component.form.controls['username'].setValue('username');
      component.form.get('passwords').get('password').setValue('pass');
      component.form.get('passwords').get('confirmPassword').setValue('pass');
      expect(component.form.valid).toBeTruthy();

      component.register();

      expect(component.success).toBeTruthy();
    });
  });

  describe('submit a from unsuccessfuly', () => {

    beforeEach(() => {
      spyOn(registerService, 'save').and.returnValue(
        Observable.create(observer => observer.error())
      );
      fixture.detectChanges();
    });

    it('should set success to false', () => {
      expect(component.form.valid).toBeFalsy();
      component.form.controls['firstName'].setValue('first name');
      component.form.controls['lastName'].setValue('last name');
      component.form.controls['phone'].setValue('+48 123 123 123');
      component.form.controls['email'].setValue('email@mail.com');
      component.form.controls['username'].setValue('username');
      component.form.get('passwords').get('password').setValue('pass');
      component.form.get('passwords').get('confirmPassword').setValue('pass');
      expect(component.form.valid).toBeTruthy();

      component.register();

      expect(component.success).toBeFalsy();
    });
  });

});
