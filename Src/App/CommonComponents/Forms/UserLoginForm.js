import { Grid } from '@material-ui/core';
import React from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { FieldWrapper } from '../Containers/FormContainers';
import { renderTextField } from './RenderFormFields';
import { hideMessageBars, postUserLogin } from '../../Actions/UserSignupActions';
import { ErrorMessage } from '../MessageBars/FormSnackbars';

const submit = (values, dispatch, props) => {
    props.postUserLogin(values);
    setTimeout(() => {
        props.hideMessageBars();
    }, 6000);
}

const validate = values => {
  const errors = {}
  const requiredFields = [
    'user_email',
    'user_password'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.user_email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.user_email)
  ) {
    errors.user_email = 'Invalid email address'
  }
  if(values.user_password && values.user_password.length < 6) {
      errors.user_password = "Please Enter Password of length greater than or equal to 6";
  }
  return errors
}

let UserLoginForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <div>
        <ErrorMessage open={props.login_error}
                      message={props.message_bar.message}/>
            <form onSubmit={handleSubmit}>
                <FieldWrapper>
                    <Field name="user_email" component={renderTextField} label="Email" type="text"/>
                </FieldWrapper>
                <FieldWrapper>
                    <Field name="user_password" component={renderTextField} label="Password" type="password"/>
                </FieldWrapper>
            </form>
    </div>
  )
}

UserLoginForm = reduxForm({
  form: 'userLoginForm', // a unique identifier for this form
  onSubmit: submit,
  validate
})(UserLoginForm);

const WrappedComponent = connect(({ userSignupReducer }) => ({
    login_error: userSignupReducer.login_error,
    message_bar: userSignupReducer.message_bar
}), (dispatch) => ({
    postUserLogin: (userData) => dispatch(postUserLogin(userData)),
    hideMessageBars: () => dispatch(hideMessageBars())
}))(UserLoginForm);

export default WrappedComponent;