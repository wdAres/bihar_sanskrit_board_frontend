import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader/PageHeader'
import AboutLayout from '../components/uiBased/AboutLayout'
import { MdOutlineFileDownload, MdOutlinePictureAsPdf } from 'react-icons/md';
import { FaEye } from 'react-icons/fa6';
import useHttp2 from '../hooks/useHttp2';

import moment from 'moment';
function AllTender() {
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const [tenderData,setTenderData] = useState([])
    const [pageDetails, setPageDetails] = useState({})
    const [page, setPage] = useState(1)
    const {sendRequest:getTender,isLoading:tenderLoading} = useHttp2()
    
    useEffect(() => {
        setIsButtonLoading(true);
        getTender({url:`tender?page=${page}&limit=10`},res=>{
            setTenderData(prev => [...prev, ...res.data.docs])
            setPageDetails({ ...res.data, docs: null });
            setIsButtonLoading(false);
        })
        
    }, [page])
    const loadMore = () => {
        if (!pageDetails?.hasNextPage) {
            return;
        }
        setPage(prev => prev + 1);
    };
    return (
        <>
           
            <AboutLayout>
                <h1 className='universal_h1'>All Tender</h1>



                <div className="history_table">
                    <div className="grid-header">
                        <div>Name</div>
                        <div>Date</div>
                        <div>Action</div>
                    </div>
                    {tenderData.map((item, index) => (
                        <div key={index} className="grid-row">
                            <div className="name-column">
                                <p className="table_p">
                                    <MdOutlinePictureAsPdf  className="icon" size={20} style={{ color: '#544c86' }} />
                                    {item.label}
                                </p>
                            </div>
                            <div>{moment(item.createdAt).format('DD-MM-YYYY')}</div>
                            <div className="action-column">
                                <div className="action-buttons">
                                    <button className="action_btn view_btn" onClick={() => window.open(item.file, '_blank')}>
                                        <FaEye />
                                    </button>
                                    <button className="action_btn download_btn" onClick={() => {
                                        const a = document.createElement('a');
                                        a.href = item.file;
                                        a.download = true;
                                        a.click();
                                    }}>
                                        <MdOutlineFileDownload />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {pageDetails?.hasNextPage && (
                    <button 
                        onClick={loadMore} 
                        className="load-more-btn"
                        disabled={tenderLoading}
                    >
                        {tenderLoading ? 'Loading Data' : 'Load More'}
                    </button>
                )}
                </div>


            </AboutLayout>
        </>
    )
}

export default AllTender
