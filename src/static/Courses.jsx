import React from 'react'
import classes from './Home.module.css'
import PageHeader from '../components/PageHeader/PageHeader'

const Courses = () => {
    return (
        <>
            <PageHeader
                title={'Courses'}
                path={'Home / Courses'}
            />
            <section className={`${classes.another_section} universal_width`}>
                <div className={`${classes.box_1}`}>
                    <h1 className={classes.h1}> Courses List</h1>
                    <p className={classes.p}>1) English</p>
                    <p className={classes.p}>2) SST</p>
                    <p className={classes.p}>3) Maths</p>
                    <p className={classes.p}>4) Science</p>
                </div>
            </section>
        </>
    )
}

export default Courses