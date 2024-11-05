import React from 'react'
import PageHeader from '../components/PageHeader/PageHeader'
import AboutLayout from '../components/uiBased/AboutLayout'

const Vision = () => {
    return (
        <>
            <PageHeader
                title={'About Us'}
                path={'Home / Vision'}
            />
            <AboutLayout>
                <h1 className={'universal_h1'}>Our Vision</h1>
                <p className={'universal_p'}>
                To perform the premier technology institute recognized for its quality education and human values.
                    </p>
                <h1 className={'universal_h1'}>Our Mission</h1>
                <p className={'universal_p'}>
                Teaching and Research on emerging technologies in a cross cultural environment. Working on enabling technologies for social transformation.
                   </p>

            </AboutLayout>
        </>
    )
}

export default Vision