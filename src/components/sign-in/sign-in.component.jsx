import React from 'react';
import FormInput from '../form-input/form-input.component' 
import CustomButton from '../custom-button/custom-button.component'

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = e => {
        const {value, name} = e.target
        this.setState({[name]: value})
    }

    render (){
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>
            
                <form>
                    <FormInput label="Email" name="email" type="email" value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput label="Password" name="password" type="password" value={this.state.password} handleChange={this.handleChange} required/>
                    <div className="buttons">
                        <CustomButton type="submit"> sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google </CustomButton>
                    </div>
                    
                    
                </form>

            </div>
            
        )
    }
}

export default SignIn;