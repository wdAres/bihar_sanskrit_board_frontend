import React from 'react'
import PageHeader from '../components/PageHeader/PageHeader'
import classes from './Results.module.css'

const Results = () => {
    return (
        <>
            <PageHeader
                title={'Results'}
                path={'Home / Results'}
            />
            <section className={`${classes.section} universal_width`}>
                <div className={classes.form}>
                    <label htmlFor="roll_no">Registration Number</label>
                    <input type="text" />
                    <button>Submit</button>
                </div>
                <b>
                    For results related queries Contact info@bssbpatna.ac
                </b>
                <b>
                    For any Technical Feedback send mail to admin@bssbpatna.ac

                    1                </b>

                <p>

                    <b>Disclaimer</b>: Bihar Sanskrit Shiksha Board is not responsible for any inadvertent error that may have crept in the results being published on Net. The results published on Net are for immediate information to the examinees. These cannot be treated as original mark sheets.
                </p>
            </section>
        </>
    )
}

export default Results