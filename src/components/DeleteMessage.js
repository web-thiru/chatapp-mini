import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { db,auth } from '../firebase'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

import EditMessage from './EditMessage';

function DeleteMessage(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const deleteMsg = (id) => {
        handleClose();
        db.collection("messages").doc(id).delete();
    }
    const uid = props.uid;

    return (
        <div>
            
            <Button aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}> <ArrowDropDownOutlinedIcon style={{ color:`${uid === auth.currentUser.uid ? 'white' : 'blue'}`}} /> </Button>
            <Menu style={{ width: "100px" }} anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button', }}>
                <Button style={{ width: "100%", textTransform: 'none' }} onClick={() => (deleteMsg(props.ids))}>Delete</Button>
                
                <EditMessage msg={props.message} id={props.ids} />
            </Menu>
        </div>
    )
}

export default DeleteMessage