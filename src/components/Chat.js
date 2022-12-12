import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../firebase'
import DeleteMessage from './DeleteMessage'
import SendMessage from './SendMessage'
import SignOut from './SignOut'

function Chat() {

    const scroll = useRef()
    
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    const [messages, setMessages] = useState([])
    return (
        <div>
            <SignOut />
            <div className="msgs">
                {messages.map(({ i, id, text, photoURL, uid}) => (
                    <div>
                        <div key={i} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt="" />
                            <p>{text}</p>
                            <DeleteMessage ids={id} message={text} uid={uid} />
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat
