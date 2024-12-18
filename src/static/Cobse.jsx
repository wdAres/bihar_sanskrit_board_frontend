import React from 'react'
import classes from './About.module.css'
import PageHeader from '../components/PageHeader/PageHeader'
import AboutLayout from '../components/uiBased/AboutLayout'
const Cobse = () => {
    return (
        <>
            <PageHeader
                title={'COBSE'}
                path={'Home / COBSE'}
            />
            <AboutLayout>
                <h1 className="universal_h1">COBSE </h1>
                
                <p className="universal_p">
                Check COBSE Membership,
                Recognized by COBSE.
                </p>
                <a className='universal_a' href="https://www.cobse.org.in/" target='_blank'>https://www.cobse.org.in/</a>
                <p className='universal_p'></p>
                <a className='universal_a' href="cbose.pdf" download={true} target='_blank'>Download File</a>
            </AboutLayout>
        </>
    )
}

export default Cobse