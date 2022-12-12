import React, { useState } from 'react'
import { db, auth } from '../firebase'
import firebase from 'firebase'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser
        const msgs = msg;
        setMsg("");
        const res = await db.collection('messages').add({
            id:0,
            text: msgs,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        db.collection("messages").doc(res.id).set({
            id:res.id,
            text: msgs,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <TextField variant="standard" style={{ width: '60%', fontSize: '15px', fontWeight: '550', marginLeft: '0px', marginBottom: '0px' }} placeholder='Message...'  type="text" value={msg} onChange={e => setMsg(e.target.value)} />&nbsp;&nbsp;
                    <Button variant="contained" color="primary" type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage
