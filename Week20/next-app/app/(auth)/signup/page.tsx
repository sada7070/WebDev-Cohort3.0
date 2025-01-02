export default function Signup() {

    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="border p-2">
            <input type="text" className="text-md text-black" placeholder="username..."></input>
            <input type="text" className="text-md border m-2 text-black" placeholder="password..."></input>
            <button>Signup</button>
        </div>
    </div>
}