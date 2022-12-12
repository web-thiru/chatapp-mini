import React from 'react'
import { auth } from '../firebase.js'
import Button from '@mui/material/Button';

function SignOut() {
    return (
        <div>
            <div style={{position:"fixed",top:10, right:10}}>
                <Button variant="outlined" color="primary" onClick={() => auth.signOut()}>Sign Out</Button>

            </div>
        </div>
    )
}

export default SignOut
