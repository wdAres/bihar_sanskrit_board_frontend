import React from 'react'
import PageHeader from '../components/PageHeader/PageHeader'
import AboutLayout from '../components/uiBased/AboutLayout'

const Vision = () => {
    return (
        <>
            <PageHeader
                title={'About Us'}
                path={'Home / Aim'}
            />
            <AboutLayout>
                <h1 className={'universal_h1'}>Our Aim</h1>
                <p className={'universal_p'}>
                To Provide For The Constitution Of An Autonomous
Board For Development And’ Better Supervision Of
Sanskrit Education. Up To Madhyama Standard In The
State Of Bihar
                    </p>
               

            </AboutLayout>
        </>
    )
}

export default Vision