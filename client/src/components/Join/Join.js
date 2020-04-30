import React, {useState} from "react";
import {Link} from 'react-router-dom';
import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return(
        <div className="outCont">
            <div className="inCont">
                <h1 className="heading">Join</h1>
                <input placeholder="Name" type="text" className="joinIn" onChange={e => setName(e.target.value)}/>
                <input placeholder="Room" type="text" className="joinIn" onChange={e => setRoom(e.target.value)}/>
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                <button className="linkBut" type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;