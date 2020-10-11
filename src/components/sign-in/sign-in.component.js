import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustonButton from '../custom-button/custom-button.component';
import { SignInWithGoogle } from '../../firebase/firebase.utils';



class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email : '',
            password : ''
        }
    }

    HundleSubmit = (event) => {
        event.preventDefauld();
        this.setState({
            email: '',
            passwd:''
        })
        console.log(event.target.value)
    }
    HundleChange = (event) => {
        const { value, name } = event.target;
        this.setState( { 
            [name]: value 
        } )
        
        console.log()
    }

    render() {
        return(
            <div className="sign-in">
                <h2> I have already an account </h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.HundleSubmit} >
                    <FormInput 
                       name="email" 
                       type="email" 
                       value={this.state.email} 
                       label="email"
                       hundleChange={this.HundleChange}
                       required 
                    />
                    <FormInput 
                       name="password" 
                       type="password" s
                       value={this.state.password} 
                       label="password"
                       hundleChange={this.HundleChange}
                       required 
                    />
                    <div className="buttons">
                        <CustonButton type="submit"> SIGN IN </CustonButton>
                        <CustonButton onClick={ SignInWithGoogle } isGoogleSignIn> SIGN IN WITH GOOGLE</CustonButton>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SignIn;