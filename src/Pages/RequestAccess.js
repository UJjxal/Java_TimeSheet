import { useState } from 'react';


export default function RequestAccess() {


    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("Select Role");

    const onRequest = (event) => {
        event.preventDefault();
    }

    return (
        <div className='container py-5'>
            <div className="rounded mt-5 shadow text-center p-5 w-400px mx-auto">
                <input type="email" className="inputBox form-control border-dark fw-bold" placeholder="User ID"
                    value={id} onChange={(data) => setId(data.target.value)} required></input>
                <input type="text" className="inputBox form-control border-dark fw-bold mt-2  mx-auto"
                    placeholder="Name" value={name} onChange={(data) => setName(data.target.value)} required />
                <select className='inputBox form-select border-dark fw-bold mt-2  mx-auto' value={role}
                    onChange={(data) => setRole(data.target.value)}>
                    <option value="Role">Select Role</option>
                    <option value="Lead">Lead</option>
                    <option value="Admin">Admin</option>
                    <option value="Developer">Developer</option>
                </select>
                <br></br>
                <button type="submit" className="btn btn-primary" onClick={(event) => onRequest(event)}>Request Access
                </button>
            </div>
        </div>
    );
}