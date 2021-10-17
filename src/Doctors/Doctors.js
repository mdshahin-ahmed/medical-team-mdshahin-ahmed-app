import React, { useEffect, useState } from 'react';
import Doctor from '../Components/Header/Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setDoctors(data));
    }, [])
    return (
        <>
            <div className='doctors'>
                {
                    doctors.map(doctor => <Doctor
                            key = {doctor.id}
                            doctor = {doctor}
                        ></Doctor>)
                }
                
            </div>
        </>
    );
};

export default Doctors;