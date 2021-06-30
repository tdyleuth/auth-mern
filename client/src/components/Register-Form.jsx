import { useState } from 'react';
import '../components/Register-Form.css';

const RegisterForm = ({ setIsSubmitted }) => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
    });

    const [validationMessage, setValidationMessage] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.password !== values.password2) {
            setValidationMessage(true);
        } else {
            setIsSubmitted(true);
        }
    };
    console.log(values);
    return (
        <div className='form-container'>
            <form className='register-form' onSubmit={handleSubmit}>
                <h1>
                    Please fill out the information below then hit register!
                </h1>
                <div className='form-inputs'>
                    <label htmlFor='firstName' className='form-label'>
                        First Name:
                    </label>
                    <input
                        id='firstName'
                        className='form-input'
                        type='text'
                        name='firstName'
                        placeholder='Enter your First Name'
                        value={values.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='lastName' className='form-label'>
                        Last Name:
                    </label>
                    <input
                        id='lastName'
                        className='form-input'
                        type='text'
                        name='lastName'
                        placeholder='Enter your Last Name'
                        value={values.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>
                        Email:
                    </label>
                    <input
                        id='email'
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='Enter your Email'
                        value={values.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password' className='form-label'>
                        Password:
                    </label>
                    <input
                        id='password'
                        className='form-input'
                        type='password'
                        name='password'
                        placeholder='Enter your Password'
                        value={values.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password2' className='form-label'>
                        Confirm Password:
                    </label>
                    <input
                        id='password2'
                        className='form-input'
                        type='password'
                        name='password2'
                        placeholder='Confirm your Password'
                        value={values.password2}
                        onChange={handleChange}
                        required
                    />

                    {validationMessage ? (
                        <p className='validation-message'>
                            Passwords do not match
                        </p>
                    ) : null}
                </div>

                <button className='form-input-btn' type='submit'>
                    Register
                </button>
                <span className='form-input-login'>
                    Already have an account? Login <a href='#'>here</a>
                </span>
            </form>
        </div>
    );
};

export default RegisterForm;
