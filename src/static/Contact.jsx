import React from 'react'
import PageHeader from '../components/PageHeader/PageHeader'
import classes from './Contact.module.css'
import ContactForm from '../components/Forms/ContactForm'

const Contact = () => {
    return (
        <>
            <PageHeader
                title={'Contact'}
                path={'Home / Contact'}
            />
            <section className={`${classes.section} universal_width`}>
                <div className={classes.left_box}>
                    <p className="universal_p">SAVE PAPER , SAVE TREES</p>
                    <p className="universal_p">Be the part of this campaign</p>
                    <p className="universal_p">Any department/ embassy / third party / personal Can verify documents by email also</p>
                    <p className="universal_p">bssbpatna17@gmail.com</p>
                    <p className="universal_p">
                    Tel. No.- 0612-2217880
                    </p>
                    <p className="universal_p">
                     Mobile number 9472269757 / 9472269759
                    </p>
                    <p className="universal_p">For any type verification / information / query etc details, send us registered post :</p>
                    <p className="universal_p">To</p>
                    <p className="universal_p">Chairman</p>
                    <p className="universal_p">BIHAR BOARD</p>
                    <p className="universal_p">17, Back Harding Road, Patna 800001
                    </p>

                </div>
                <div className={classes.right_box}>
                    <h1 className='universal_h1'>Contact Us</h1>
                    {/* <div className={classes.right_box_form}>
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Email ID' />
                        <input type="text" placeholder='Subject' />
                        <textarea placeholder='Message'></textarea>
                        <button>Submit</button>
                    </div> */}
                    <ContactForm />
                </div>
            </section>
        </>
    )
}

export default Contact