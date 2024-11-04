import React from 'react'
import classes from './layoutBased.module.css'

const Footer = () => {
  return (
    <>
    <footer className={classes.footer_top}>
        <div className={`${classes.inner_footer_top} universal_width`}>
            <div className={classes.ift_box_1}>
                <div className={classes.boxed_sub_heading}>Bihar Sanskrit Siksha Board</div> 
                <img className={classes.ift_box_1_img} src="/images/footer_img.png" alt="" />
                <p className={classes.ift_box_1_p}>
                The BIHAR SANSKRIT SHIKSHA BOARD is established for holding and conducting an examination at the end of the Secondary School stage, for prescribing course of studies for such examination and for carrying out such other objects and duties as may be considered necessary for the purpose as stated in the Act, Rules and Regulations of the Board.
                </p>
            </div>
            <div className={classes.ift_box_2}>
                <div className={classes.boxed_sub_heading}>Pages</div> 
                <div className={classes.ift_box_2_links} >
                    <a className={classes.ift_box_2_link} href="#!">Home</a>
                    <a className={classes.ift_box_2_link} href="#!">About</a>
                    <a className={classes.ift_box_2_link} href="#!">Admissions</a>
                    <a className={classes.ift_box_2_link} href="#!">Courses</a>
                    <a className={classes.ift_box_2_link} href="#!">Results</a>
                    <a className={classes.ift_box_2_link} href="#!">Contact</a>
                </div>
            </div>
            <div className={classes.ift_box_3}>
                <div className={classes.boxed_sub_heading}>Quick Inquiry</div> 
                <div className={classes.ift_box_3_form}>
                    <input type="text" placeholder='Your Name' />
                    <input type="text" placeholder='Email ID' />
                    <textarea placeholder='Message'></textarea>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </footer>
    <footer className={classes.footer_bottom}>
        <div className={`${classes.inner_footer_bottom} universal_width`}>
        © Copyright - Bihar Sanskrit Shiksha Board 
        </div>
    </footer>
    </>
  )
}

export default Footer