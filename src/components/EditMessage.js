import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { db } from '../firebase'

function EditMessage(props) {
    const [btn, setBtn] = useState('')
    const value = props.msg;
    const [message, setMessage] = useState(props.msg);
    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const open1 = Boolean(anchorEl1);
    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };
    const handleClose1 = () => {
        setAnchorEl1(null);
    };
    useEffect(() => {
        if (value === message || message.length === 0) setBtn("disabled")
        else setBtn("contained")
    }, [message.length,message,value])

    const editMessage = () => {
        if (message.length > 0) {
            db.collection("messages").doc(props.id).update({
                text: message
            })
            handleClose1();
        }
    }
    return (
        <div>

            <Button style={{ width: "100%", textTransform: 'none' }} variant="text" onClick={handleClick1}>Edit</Button>
            <Dialog open={open1} onClose={handleClose1}>
                <DialogTitle></DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        fullWidth
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Button type="submit" style={{ width: "100%", textTransform: 'none' }} variant={btn} onClick={() => (editMessage())}>Edit</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default EditMessage