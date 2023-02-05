import React, { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TestimonialSlide from './TestimonialSlide';



function TestimonialsFrom() {

    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [require, setRequire] = useState('');

    const [store, setStore] = useState([]);

    // console.log('booking data ->', store);

    const submitHandler = (e) => {
        e.preventDefault();

        if (!name || !city || !email || !require) {
            toast.error('All Fields are Required...', {
                position: "top-right",
                autoClose: "1000",
                limit: "1",
                theme: "colored",
            })
            // alert('all feild are required')
        } else {
            const data = { name, city, email, require };
            setStore([...store, data])
            toast.success(`${name} Thanks for beedback... `, {
                position: "top-right",
                autoClose: "2000",
                limit: "1",
                theme: "colored",
            })

            setName("")
            setCity("")
            setEmail("")
            setRequire("")
        }
    }


    return (
        <>
            <div className="container-fluid p-0 mb-5 FormData">
                <div className="row m-0">
                    <div className="col-lg-12 col-md-12 col-12">
                        <div className="form-section">
                            <form action="" className="form-data" onSubmit={submitHandler}>
                                <div className="input-fields">
                                    <label htmlFor="">Name</label>
                                    <input type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jitender Group" />
                                </div>
                                <div className="input-fields">
                                    <label htmlFor="">City</label>
                                    <input type="text" name="" id="" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Delhi" />
                                </div>
                                <div className="input-fields">
                                    <label htmlFor="">E-mail</label>
                                    <input type="email" name="" id="" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="contact@jitendergroup.com" />
                                </div>
                                <div className="input-fields textarea">
                                    <label htmlFor="">Requirements</label>
                                    <textarea name="" id="" cols="20" rows="6" value={require} onChange={(e) => setRequire(e.target.value)} placeholder="Hey..."></textarea>
                                </div>
                                <div className="input-fields">
                                    <button type="submit" className="btn">Book Now</button>
                                </div>
                            </form>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>

            <TestimonialSlide store={store} />
        </>
    )
}

export default TestimonialsFrom