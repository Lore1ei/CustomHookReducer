import useInput from "./hooks/use-input";

const SimpleInput = (props) => {
    const {value: enteredName,
            isValid: enteredNameIsValid,
            hasError: nameInputHasError,
            reset: resetNameInput,
            valueChangeHandler: nameChangedHandler,
            inputBlurHandler: nameBlurHandler} = useInput(value => value.trim() !== '');

    const {value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: nameEmailIsInvalid,
        reset: resetEmailInput,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlur} = useInput(value => value.includes('@'));

    let formIsValid = false;

    if(enteredNameIsValid && enteredEmailIsValid){
        formIsValid = true;
    }


    const submissionHandler = event => {
        event.preventDefault();

        if(!enteredNameIsValid){
            return;
        }
        resetNameInput();
        resetEmailInput();
        console.log(enteredName)
    }

    const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'

    const emailInputClasses = nameEmailIsInvalid ? 'form-control invalid' : 'form-control'


  return (
    <form onSubmit={submissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name'
               onChange={nameChangedHandler}
               onBlur={nameBlurHandler}
               value={enteredName}/>
          {nameInputHasError &&
          <p className='error-text'>Name must be not empty</p>
          }
      </div>

        <div className={emailInputClasses}>
            <label htmlFor='name'>Your E-mail</label>
            <input type='email' id='name'
                   onChange={emailChangeHandler}
                   onBlur={emailBlur}
                   value={enteredEmail}/>
            {nameEmailIsInvalid &&
                <p className='error-text'>Email must be not empty</p>
            }
        </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
