import React from 'react';
import './Doctor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Doctor = (props) => {
    // console.log(props.doctor);
    // accept data with props 
    const {doctor, handleAddededDoctor} = props;
    const {name, img, specialist, language, salary, age} = props.doctor 
    const alt = "Doctor Image";
    // store font awsome icon in a variable 
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div>
            <div className="card shadow card-style d-flex h-100">
                <img src={img} className="card-img-top mt-2 image" alt={alt}/>
                <div className="card-body">
                    <h5 className="card-title">Name: <small>{name}</small></h5>
                    <h6>Age: {age}</h6>
                    <h6>Language: {language}</h6>
                    <h6>Specialist: {specialist}</h6>
                    <h6>Salary: ${salary}</h6>
                </div>
                <div>
                    <button className="btn add-btn mb-3 mt-auto w-50" onClick={() => handleAddededDoctor(doctor)}>Add Doctor {element}</button>
                </div>
                <div className="social-icons mb-3">
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    );
};

export default Doctor;