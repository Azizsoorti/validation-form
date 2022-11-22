import React, { useEffect, useState } from 'react'
import axios from "axios"

function Singin() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    const [callApi, setCallApi] = useState(false);
    const [checkEmail, setCheckEmail] = useState("")
    const [success, setSuccess] = useState(false)

    function login(e) {
        e.preventDefault();
        setCallApi(true)
        for (let i = 0; i < checkEmail.length; i++) {
            if (checkEmail[i] === email) {
                setSuccess(true)
                console.log("successfly matched");
            } 
        };
      

    };





    useEffect(() => {
        if (callApi === true) {
            const url = 'https://jsonplaceholder.typicode.com/users'
            axios.get(url).then((res) => {
                if (res.data) {

                    let allItems = res.data;
                    let allEmails = allItems.map((item) => {
                        return item.email
                    })
                    setCheckEmail(allEmails)

                }
            })
                .catch((err) => { console.log(err); })
        }

    }, [callApi])

    return (

        <> 
                <main className="form-signin w-100 m-auto " >
                    <form className='my-5 py-5' onSubmit={(e)=>{login(e)}}>
        
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
                        <button  className="w-100 btn btn-lg btn-primary" type="submit">
                            Sign in
                        </button>
        
                    </form>
                
                </main>
        
        
                </>
        
            )
        }

export default Singin