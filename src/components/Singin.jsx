import React, { useEffect, useState } from 'react'
import axios from "axios"


function Singin() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    const [callApi, setCallApi] = useState(false);

    const [form, setForm] = useState({ display: "block" });
    const [imgSucces, setImgSuccess] = useState({ display: "none" });
    const [imgFailed, setImgFailed] = useState({ display: "none" });

    function login(e) {
        e.preventDefault();
        setCallApi(true)
    };

    useEffect(() => {
        if (callApi === true) {
            const url = 'https://jsonplaceholder.typicode.com/users'
            axios.get(url).then((res) => {
                if (res.data) {
                    let allItems = res.data;
                    let allEmails = allItems.map((item) => { return item.email })
                    let find = allEmails.includes(email);
                    if (find === true) {
                        setForm({ display: "none" });
                        setImgSuccess({ display: "block" })
                    } else {
                        setForm({ display: "none" });
                        setImgFailed({ display: "block" })
                    }
                };
            })
                .catch((err) => { console.log(err); })
        }
    }, [callApi])

    return (
        <>
            <div className="successful text-center my-5 py-5" style={imgSucces}>
                <img src="images/login-success.jpg" alt="" onClick={() => {
                    setForm({ display: "block" });
                    setImgSuccess({ display: "none" })
                    setEmail("");
                    setPassword("");
                }} />
                <h3 className='text-center'>you have been successflly signed</h3>
            </div>

            <div className="failed text-center my-5 py-5" style={imgFailed}>
                <img src="images/login-failed.png" alt="" onClick={() => {
                    setForm({ display: "block" });
                    setImgFailed({ display: "none" });
                    setEmail("");
                    setPassword("");
                }} />
            </div>

            <main className="form-signin w-100 m-auto " style={form} >
                <form className='my-5 py-5' onSubmit={(e) => { login(e) }}>

                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="form-floating">
                        <input onChange={(e) => { setEmail(e.target.value) }}
                            value={email}
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input onChange={(e) => { setPassword(e.target.value) }}
                            value={password}
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">
                        Sign in
                    </button>

                </form>

            </main>


        </>

    )
}

export default Singin