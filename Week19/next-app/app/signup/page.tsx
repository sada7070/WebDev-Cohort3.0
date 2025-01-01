"use client"

import axios from "axios"
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Signyp() {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="border p-2">
            <input type="text" className="text-black" placeholder="username.." onChange={e => {             // e = event. when a new  keystroke happen it will be set
                setUserName(e.target.value);
            }}></input>
            <input type="text" className="text-black" placeholder="password.." onChange={e => {
                setPassword(e.target.value);
            }}></input>

            <button onClick={() => {
                axios.post("http://localhost:3000/api/v1/signup", {
                    username,                                                   // sending values to backend/DB
                    password
                })

                // to change page to sigin after succussful signup
                router.push("/signin");
            }}>Sign up</button>
        </div>
    </div>
}