import { useState } from 'react';
import '../components/Login-Form.css';

const LoginForm = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='form-container'>
            <form className='login-form' onSubmit={handleSubmit}>
                <h1>Login into your account</h1>
                <div className='form-inputs'>
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
                        <button className='form-login-btn' type='submit'>
                            Login
                        </button>
                        <span className='form-input-login'>
                            Don't have an account? Create account
                            <a href='#'> here</a>
                        </span>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
