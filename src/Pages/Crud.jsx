import React from 'react'
import '../Pages/Crud.css'
import { useState } from "react";

function Crud() {
    const [inputs, setInputs] = useState({
        name: "",
        number: "",
    });
    const [tableData, setTableData] = useState([]);
    const [editClick, setEditClick] = useState(false);
    const [editIndex, setEditIndex] = useState("");

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };

    const handleDelete = (index) => {
        const filterData = tableData.filter((item, i) => i !== index);
        setTableData(filterData);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("inputs", inputs);
        if (editClick) {
            const tempTableData = tableData;
            Object.assign(tempTableData[editIndex], inputs);
            setTableData([...tempTableData]);
            setEditClick(false);
            setInputs({
                name: "",
                email: "",
            });
        } else {
            setTableData([...tableData, inputs]);
            setInputs({
                name: "",
                email: "",
            });
        }
    };

    console.log('tableData', tableData);

    const handleEdit = (index) => {
        const tempData = tableData[index];
        setInputs({ name: tempData.name, email: tempData.email });
        setEditClick(true);
        setEditIndex(index);
    };


    return (
        <div className='main-crud'>
            <h1 className='py-5' style={{ color: "#454545" }}>
                CRUD OPERATION
            </h1>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <form onSubmit={handleSubmit} method="get" action="javascript: void(0);" id="login-form" className="login-form" autocomplete="off" role="main">
                                <h1 className="a11y-hidden">Login Form</h1>
                                <div>
                                    <label className="label-email">
                                        <input onChange={handleChange} value={inputs.name}  className="text" name="Name" placeholder="name" required />
                                        <span className="required">Name</span>
                                    </label>
                                </div>
                                <div>
                                <label className="label-email">
                                        <input onChange={handleChange} value={inputs.number} name='number' className="text" type='tel' placeholder="Phone number" required />
                                        <span className="required">Phone number</span>
                                    </label>
                                </div>
                                <input type="submit" value="ADD" />
                                <figure aria-hidden="true">
                                    <div className="person-body"></div>
                                    <div className="neck skin"></div>
                                    <div className="head skin">
                                        <div className="eyes"></div>
                                        <div className="mouth"></div>
                                    </div>
                                    <div className="hair"></div>
                                    <div className="ears"></div>
                                    <div className="shirt-1"></div>
                                    <div className="shirt-2"></div>
                                </figure>
                            </form> */}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4 flex flex-col">
                                    <label>Name</label>
                                    <input name="name" value={inputs.name} onChange={handleChange} />
                                </div>
                                <div className="mb-4 flex flex-col">
                                    <label>Email</label>
                                    <input name="email" value={inputs.email} onChange={handleChange} />
                                </div>
                                <button type="submit" className="w-full mb-4 bg-[#014d64] text-dark mt-3">
                                    {editClick ? "update" : "Add"}
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-lg-12">
                            <div className='text-dark'>
                                <table class="zigzag">
                                    <thead>
                                        <tr>
                                            <th class="header ps-3">Name</th>
                                            <th class="header px-3">email</th>
                                            <th class="header px-2">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableData.map((item, i) => (
                                            <tr>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>
                                                    <button
                                                        onClick={() => handleEdit(i)}
                                                        className="mx-3 mr-3 text-yellow-300"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(i)}
                                                        className="text-red-500"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Crud