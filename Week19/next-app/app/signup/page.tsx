"use client"

import axios from "axios"
import { useState } from "react"

export default function Signyp() {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="border p-2">
            <input type="text" placeholder="username.." onChange={e => {             // e = event. when a new  keystroke happen it will be set
                setUserName(e.target.value);
            }}></input>
            <input type="text" placeholder="password.." onChange={e => {
                setPassword(e.target.value);
            }}></input>

            <button onClick={() => {
                axios.post("http://localhost:3000/api/v1/signup", {
                    username,                                                   // sending values to backend/DB
                    password
                })
            }}>Sign up</button>
        </div>
    </div>
}