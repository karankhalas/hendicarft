import React, {useState} from "react";
// import {auth} from "../Config/firebase-config"
import {auth} from '../Config/firebase-config'
import {createUserWithEmailAndPassword} from 'firebase/auth'


export const Auth = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const signIn = async ()=>{
        await createUserWithEmailAndPassword(auth,email, password)
    }
    return(
        <div>
            <input placeholder="Email.." onChange={(e)=> setEmail(e.target.value)} />
            <input  placeholder="password.." type="password" onChange={(e)=> setPassword(e.target.value)}  />
            <button onClick={()=>{
                signIn()
            }} >Sign Up</button>

        </div>
    )
}