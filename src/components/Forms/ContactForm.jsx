import React, { useState } from 'react';
import classes from './ContactForm.module.css'; // Assuming you have a CSS file for styling
import useHttp2 from '../../hooks/useHttp2';

const ContactForm = ({cls}) => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: ''
    });
    const [errors, setErrors] = useState({});
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const {sendRequest,isLoading} = useHttp2()

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formValues.name) newErrors.name = 'Name is required';
        if (!formValues.email) newErrors.email = 'Email ID is required';
        else if (!emailRegex.test(formValues.email)) newErrors.email = 'Invalid email format';
        if (!formValues.subject) newErrors.subject = 'Subject is required';
        if (!formValues.message) newErrors.message = 'Message is required';
        if (!formValues.phone) newErrors.phone = 'Phone Number is required';
        else if (!/^\d+$/.test(formValues.phone)) newErrors.phone = 'Phone Number must be digits only';
        else if (formValues.phone.length !== 10) newErrors.phone = 'Phone Number must be 10 digits';

        setErrors(newErrors);
        setIsButtonDisabled(Object.keys(newErrors).length > 0);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
        validateForm();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm();


        sendRequest({
            url:`inquiry`,
            method:'POST',
            body:formValues
        },res=>{
            setFormValues({
                name: '',
                email: '',
                subject: '',
                message: '',
                phone: ''
            })
        },true)

        // if (Object.keys(errors).length === 0) {
        //     console.log('Form submitted:', formValues);
        //     // Perform form submission logic here
        // }
    };

    return (
        <form className={`${classes.right_box_form} ${cls}`} onSubmit={handleSubmit}>
            <div>
                <input type="text" name="name" placeholder="Name" value={formValues.name} onChange={handleChange} />
                {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div>
                <input type="number" name="phone" placeholder="Phone Number" value={formValues.phone} onChange={handleChange} />
                {errors.phone && <p className="error">{errors.phone}</p>}
            </div>
            <div>
                <input type="text" name="email" placeholder="Email ID" value={formValues.email} onChange={handleChange} />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
                <input type="text" name="subject" placeholder="Subject" value={formValues.subject} onChange={handleChange} />
                {errors.subject && <p className="error">{errors.subject}</p>}
            </div>
            <div>
                <textarea name="message" placeholder="Message" value={formValues.message} onChange={handleChange}></textarea>
                {errors.message && <p className="error">{errors.message}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
