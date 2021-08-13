import React from 'react'

const LoginPage = () => {
    return (
        <div className="wrapper">
            <div className="form-container">
                <form className="form" id="login">
                    <h1 className="form-title">Login</h1>
                    <div className="form-message form-error"></div>
                    <div className="input-group">
                        <input type="text" className="form-input" autofocus placeholder="Username email" /> 
                        <div className="input-group"></div>
                    </div>
                    <div className="input-group">
                        <input type="password" className="form-input" autofocus placeholder="Password" />
                        <div class="form-input-errormessage"></div>
                    </div>
                    <button className="btn form-btn" type="button">login</button>
                    <p className="form-text">
                        <a href="#" className="form-link">Forgot your password?</a>
                    </p>
                    <p className="form-text">
                        <a className="form-url" href="#" id="createAccount">Don't have an account? Create account</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;
