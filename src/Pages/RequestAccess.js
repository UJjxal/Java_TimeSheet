import {useState } from 'react';


export default function RequestAccess(){

    
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("Lead");

    const onRequest=(event)=>{
        event.preventDefault();
        alert(`New Request(${id}, ${name}, ${role}) has been created successfully!!`);
    }

    return (
        <div className='row'>
        <h1 className="border border-dark py-3 px-5 text-center">AssetMark - Shift Allowance App</h1>
        <div className='col-5 mx-auto mt-3 border border-primary p-3'>
            <h2 className='text-center'>Request Access:</h2>
            <hr/>
            <form>
                <table className='mx-auto'>
                <tr className='row'>
                    <td className='col fw-bold'>User Id:</td>
                    <td className='col'><input className="float-end" type="email" value={id} onChange={(data)=>setId(data.target.value)} required/></td>
                </tr>
                <tr className='row'>
                    <td className='col fw-bold'>Name:</td>
                    <td className='col'><input className="float-end" type="text" value={name} onChange={(data)=>setName(data.target.value)} required/></td>
                </tr>
                <tr className='row'>
                    <td className='col fw-bold'>Role:</td>
                    <td className='col'>
                        <select className="float-end" value={role} onChange={(data)=>setRole(data.target.value)}>
                        <option value="Lead">Lead</option>
                        <option value="Admin">Admin</option>
                        <option value="Developer">Developer</option>
                    </select></td>
                </tr>
                <tr className='row'>
                    <td className='col d-grid'><button className="btn btn-primary mt-5" onClick={(event)=>onRequest(event)}>Request</button></td>
                </tr>
                </table>
            </form>
        </div>
        </div>
    );
}