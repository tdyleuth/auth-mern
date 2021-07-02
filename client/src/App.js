import React, { useState } from 'react';
import './App.css';
import RegisterForm from './components/Register-Form.jsx';
import LoginForm from './components/Login-Form.jsx';
import FormSuccess from './components/FormSuccess';

function App() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitForm = () => {
        setIsSubmitted(true);
    };
    return (
        <div className='App'>
            {!isSubmitted ? (
                <RegisterForm
                    setIsSubmitted={setIsSubmitted}
                    submitForm={submitForm}
                />
            ) : (
                <FormSuccess />
            )}
        </div>
    );
}

export default App;
