import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Doctor from '../Header/Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [addDoctors, setAddDoctors] = useState([]);
    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setDoctors(data));
    }, [])
    const handleAddededDoctor = (doctor) => {
        const totalAddDoctor = [...addDoctors,doctor]; 
        setAddDoctors(totalAddDoctor);
    }
    // console.log(addDoctors);
    return (
        <div className='main-section'>
            <div className='doctors ms-3'>
                {
                    doctors.map(doctor => <Doctor
                            key = {doctor.id}
                            doctor = {doctor}
                            handleAddededDoctor = {handleAddededDoctor}
                        ></Doctor>)                        
                }
                
            </div>
            <div className='ms-3'>
                <Cart
                    addDoctors = {addDoctors}
                ></Cart>
            </div>
        </div>
    );
};

export default Doctors;