import React, { useEffect, useState } from 'react';
import AboutLayout from '../components/uiBased/AboutLayout';
import { MdOutlinePictureAsPdf } from 'react-icons/md';
import { FaEye, FaLink } from 'react-icons/fa6';
import useHttp2 from '../hooks/useHttp2';
import moment from 'moment';


function AllImportantLinks() {
    const [linkData, setLinkData] = useState([]);
    const [pageDetails, setPageDetails] = useState({});
    const [page, setPage] = useState(1);
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const { sendRequest: getLink, isLoading: linkLoading } = useHttp2();

    useEffect(() => {
        setIsButtonLoading(true);
        getLink({ url: `important-link?page=${page}&limit=10` }, res => {
            setLinkData(prev => [...prev, ...res.data.docs]);
            setPageDetails({ ...res.data, docs: null });
            setIsButtonLoading(false);
        });
    }, [page]);

    const loadMore = () => {
        if (!pageDetails?.hasNextPage) {
            return;
        }
        setPage(prev => prev + 1);
    };

    return (
        <AboutLayout>
            <h1 className='universal_h1'>All Links</h1>

            <div className="history_table">
                <div className="grid-header">
                    <div>Name</div>
                    <div>Date</div>
                    <div>Action</div>
                </div>
                {linkData.map((item, index) => (
                    <div key={index} className="grid-row">
                        <div className="name-column">
                            <p className="table_p">
                            <FaLink className="icon" size={20}/>
                                {/* <MdOutlinePictureAsPdf  /> */}
                                {item.label}
                            </p>
                        </div>
                        <div>{moment(item.createdAt).format('DD-MM-YYYY')}</div>
                        <div className="action-column">
                            <div className="link-icon">
                                <button className="action_btn view_btn" onClick={() => window.open(item.url, '_blank')}>
                                    <FaEye />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {pageDetails?.hasNextPage && (
                    <button 
                        onClick={loadMore} 
                        className="load-more-btn"
                        disabled={linkLoading}
                    >
                        {linkLoading ? 'Loading Data' : 'Load More'}
                    </button>
                )}
            </div>
        </AboutLayout>
    );
}

export default AllImportantLinks;
