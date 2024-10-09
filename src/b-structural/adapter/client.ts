import { EmailValidatorClassAdapter } from "./validation/email-validator-class-adapter";
import { emailValidatorFnAdapter } from "./validation/email-validator-fn-adapter";
import { EmailValidatorFnProtocol, EmailValidatorProtocol } from "./validation/email-validator-protocol";

function validateEmailClass(
    emailValidator: EmailValidatorProtocol, 
    email: string,
): void {
    if (emailValidator.isEmail(email)) {
        console.log('Email is valid - (CLASS)');
    } else {
        console.log('Email is invalid - (CLASS)');
    }
}

function validateEmailFn(
    emailValidator: EmailValidatorFnProtocol, 
    email: string,
): void {
    if ( emailValidator(email)) {
        console.log('Email is valid - (FN)');
    } else {
        console.log('Email is invalid - (FN)');
    }
} 

const emailEx = 'pedro@gmail.com';
validateEmailClass(new EmailValidatorClassAdapter(), emailEx);
validateEmailFn(emailValidatorFnAdapter, emailEx);
