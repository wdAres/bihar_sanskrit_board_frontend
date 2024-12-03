import React from 'react'
import PageHeader from '../components/PageHeader/PageHeader'
import AboutLayout from '../components/uiBased/AboutLayout'
import { MdOutlineFileDownload, MdOutlinePictureAsPdf } from 'react-icons/md';
import { FaEye } from 'react-icons/fa6';
const Rules = () => {
    return (
        <>
            <PageHeader
                title={'Rules & Regulations'}
                path={'Home / Rules & Regulations'}
            />
            <AboutLayout>
                <h1 className='universal_h1'>Important Documents</h1>
                {/* <ul className="history_ul">
                    <li className="history_li universal_p">
                        <a className='universal_a' href="/files/1976_1977.pdf" download={true} target='_blank'>1976 Sanskrit School Prasukriti Niyamawali LAW 1977</a>
                    </li>
                    <li className="history_li universal_p">
                        <a className='universal_a' href="/files/1976_Niymawali_Sanskrit_School_Sevashart.pdf" download={true} target='_blank'>1976 Niymawali Sanskrit School Sevashart</a>
                    </li>
                    <li className="history_li universal_p">
                        <a className='universal_a' href="/files/1976 School Prasukrit Niyamawali.pdf" download={true} target='_blank'>1976 School Prasukrit Niyamawali</a>
                    </li>
                    <li className="history_li universal_p">
                        <a className='universal_a' href="/files/1978  Niymawali Snaskrit School Committee.pdf" download={true} target='_blank'>1978  Niymawali Snaskrit School Committee</a>
                    </li>
                    <li className="history_li universal_p">
                        <a className='universal_a' href="/files/1993 Prasukrit Niymabali   Final Fresh.pdf" download={true} target='_blank'>1993 Prasukrit Niymabali   Final Fresh</a>
                    </li>
                    <li className="history_li universal_p">
                        <a className='universal_a' href="/files/1994 BSSB, PATNA  EXAM  NIYMABALI   1994.pdf" download={true} target='_blank'>1994 BSSB, PATNA  EXAM  NIYMABALI   1994</a>
                    </li>
                    <li className="history_li universal_p">
                        <a className='universal_a' href="/files/BSSB 1981 Sanskrit Shiksha Board Patna.pdf" download={true} target='_blank'>BSSB 1981 Sanskrit Shiksha Board Patna</a>
                    </li>
                    <li className="history_li universal_p">
                        <a className='universal_a' href="/files/BSSB_Patna_1981_Niyamawali_English Version.pdf" download={true} target='_blank'>BSSB_Patna_1981_Niyamawali_English Version</a>
                    </li>
                    <li className="history_li universal_p">
                        <a className='universal_a' href="/files/BSSB_PATNA_1981_NIYMABALI.pdf" download={true} target='_blank'>BSSB_PATNA_1981_NIYMABALI</a>
                    </li>
                    <li className="history_li universal_p">
                        <a className='universal_a' href="/files/eGazette_GazettePublished_805_2_2013   Niymawali.pdf" download={true} target='_blank'>eGazette_GazettePublished_805_2_2013   Niymawali</a>
                    </li>
                    <li className="history_li universal_p">
                        <a className='universal_a' href="/files/eGazette-GazettePublished-332_2_2015   Letter No.- 100.pdf" download={true} target='_blank'>eGazette-GazettePublished-332_2_2015   Letter No.- 100</a>
                    </li>
                    <li className="history_li universal_p">
                        <a className='universal_a' href="/files/eGazette-GazettePublished-333_2_2015  Letter No.- 99.pdf" download={true} target='_blank'>eGazette-GazettePublished-333_2_2015  Letter No.- 99</a>
                    </li>
                    <li className="history_li universal_p">
                        <a className='universal_a' href="/files/eGazette-GazettePublished-337_2_2015 Letter No.- 101.pdf" download={true} target='_blank'>eGazette-GazettePublished-337_2_2015 Letter No.- 101</a>
                    </li>
                </ul> */}
               

                <div className="history_table">
                    <div className="grid-header">
                        <div>Name</div>
                        <div>Date</div>
                        <div>Action</div>
                    </div>
                    {[
                        { name: "1976 Sanskrit School Prasukriti Niyamawali LAW 1977", file: "/files/1976_1977.pdf" },
                        { name: "1976 Niymawali Sanskrit School Sevashart", file: "/files/1976_Niymawali_Sanskrit_School_Sevashart.pdf" },
                        { name: "1976 School Prasukrit Niyamawali", file: "/files/1976 School Prasukrit Niyamawali.pdf" },
                        { name: "1978 Niymawali Snaskrit School Committee", file: "/files/1978  Niymawali Snaskrit School Committee.pdf" },
                        { name: "1993 Prasukrit Niymabali Final Fresh", file: "/files/1993 Prasukrit Niymabali   Final Fresh.pdf" },
                        { name: "1994 BSSB, PATNA EXAM NIYMABALI 1994", file: "/files/1994 BSSB, PATNA  EXAM  NIYMABALI   1994.pdf" },
                        { name: "BSSB 1981 Sanskrit Shiksha Board Patna", file: "/files/BSSB 1981 Sanskrit Shiksha Board Patna.pdf" },
                        { name: "BSSB_Patna_1981_Niyamawali_English Version", file: "/files/BSSB_Patna_1981_Niyamawali_English Version.pdf" },
                        { name: "BSSB_PATNA_1981_NIYMABALI", file: "/files/BSSB_PATNA_1981_NIYMABALI.pdf" },
                        { name: "eGazette_GazettePublished_805_2_2013 Niymawali", file: "/files/eGazette_GazettePublished_805_2_2013   Niymawali.pdf" },
                        { name: "eGazette-GazettePublished-332_2_2015 Letter No.- 100", file: "/files/eGazette_GazettePublished-332_2_2015   Letter No.- 100.pdf" },
                        { name: "eGazette-GazettePublished-333_2_2015 Letter No.- 99", file: "/files/eGazette_GazettePublished-333_2_2015  Letter No.- 99.pdf" },
                        { name: "eGazette-GazettePublished-337_2_2015 Letter No.- 101", file: "/files/eGazette_GazettePublished-337_2_2015 Letter No.- 101.pdf" }
                    ].map((item, index) => (
                        <div key={index} className="grid-row">
                            <div className="name-column">
                                <p className="table_p">
                                    <MdOutlinePictureAsPdf size={20} style={{ color: '#544c86' }} />
                                    {item.name}
                                </p>
                            </div>
                            <div>{new Date().toLocaleDateString()}</div>
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
                </div>


            </AboutLayout>
        </>
    )
}

export default Rules