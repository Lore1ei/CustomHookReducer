import useInput from "./hooks/use-input";

const isEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = (props) => {
    const  {value: enteredNameValue,
            hasError: errorName,
            reset: resetName,
            isValid: nameIsValid,
            valueChangeHandler: nameValueChangeHandler,
            inputBlurHandler: nameBlurHandler} = useInput(isEmpty);

    const  {value: enteredEmailValue,
        hasError: errorEmail,
        reset: resetEmail,
        isValid: emailIsValid,
        valueChangeHandler: emailValueChangeHandler,
        inputBlurHandler: emailBlurHandler} = useInput(isEmail);

    const  {value: enteredSecondNameValue,
        hasError: errorSecondName,
        reset: resetSecondName,
        isValid: secondNameIsValid,
        valueChangeHandler: secondNameValueChangeHandler,
        inputBlurHandler: secondNameBlurHandler} = useInput(isEmpty);

    let formIsValid = false;

    if(nameIsValid && emailIsValid && secondNameIsValid){
        formIsValid = true;
    }

    const submitForm = (event) => {
        event.preventDefault();

        resetName();
        resetEmail();
        resetSecondName();
        console.log(enteredNameValue)
    }

    const nameInputClasses = errorName ? 'form-control invalid' : 'form-control'
    const emailInputClasses = errorEmail ? 'form-control invalid' : 'form-control'
    const secondNameInputClasses = errorSecondName ? 'form-control invalid' : 'form-control'

    return (

    <form onSubmit={submitForm}>
      <div className='control-group'>
        <div className={`form-control ${nameInputClasses}`}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name'
                 value={enteredNameValue}
                 onBlur={nameBlurHandler}
                 onChange={nameValueChangeHandler}
          />
            {errorName && <p className='error-text'>Name is Invalid</p>}
        </div>

        <div className={`form-control ${secondNameInputClasses}`}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name'
                 value={enteredSecondNameValue}
                 onBlur={secondNameBlurHandler}
                 onChange={secondNameValueChangeHandler}
          />
            {errorSecondName && <p className='error-text'>Second name is Invalid</p>}
        </div>

      </div>

      <div  className={`form-control ${emailInputClasses}`}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name'
               value={enteredEmailValue}
               onBlur={emailBlurHandler}
               onChange={emailValueChangeHandler}
        />
          {errorEmail && <p className='error-text'>Email is Invalid</p>}
      </div>


      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
