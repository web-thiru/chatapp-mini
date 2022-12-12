import React from 'react'
import firebase from 'firebase'
import { auth } from '../firebase.js'
import Button from '@mui/material/Button';

function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div style={{ position: "fixed", top: 10, right: 10 }}>
            <Button variant="outlined" color="primary" onClick={signInWithGoogle}>Sign In</Button>
        </div>
    )
}

export default SignIn

