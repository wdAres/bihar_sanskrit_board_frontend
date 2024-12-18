import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import classes from './layoutBased.module.css'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'; 
import { FaChevronDown } from 'react-icons/fa';
const Sidebar = ({ closeSidebar, sidebar }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleSubmenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };
  return (
    // <>
    //   {sidebar && <div className={classes.overlay}></div>}
    //   <div className={`${classes.sidebar} ${sidebar && classes.active_sidebar}`}>

    //     <RxCross1 onClick={closeSidebar} className={classes.sidebar_icon} />
    //     <nav className={classes.sidebar_links}>
    //       <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/'}>Home</Link>
    //       <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/about'}>About</Link>
    //       <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/about/general_info'}>- General Information</Link>
    //       <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/about/chairman_message'}>- Chairman's Message</Link>
    //       <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/about/objectives'}>- Objectives</Link>
    //       <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/about/aim'}>- Aim</Link>
    //       <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/admissions'}>Admissions</Link>
    //       <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/about/rules'}>- Rules & Regulations</Link>
    //       <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/admissions'}>Admissions</Link>
    //       <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/authorised_centers'}>Authorised Centers</Link>
    //       <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/courses'}>Courses</Link>
    //       <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/results'}>Results</Link>
    //       <a target='_blank' className={classes.sidebar_link} href={'http://13.127.79.175:8082/login'}>School Login</a>
    //       <a target='_blank' className={classes.sidebar_link} href={'http://13.127.79.175:8083/login'}>Board Login</a>
    //       <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/results'}>Results</Link>
    //       <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/contact'}>Contact</Link>

    //     </nav>

    //   </div>
    // </>
    <>
    {sidebar && <div className={classes.overlay} onClick={closeSidebar}></div>}
    <div className={`${classes.sidebar} ${sidebar && classes.active_sidebar}`}>
      <RxCross1 onClick={closeSidebar} className={classes.sidebar_icon} />
      <nav className={classes.sidebar_links}>
        <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/'}>
          Home
        </Link>

        {/* Dropdown Menu Example with Icon */}
        <div className={classes.menu_item}>
          <div
            onClick={() => toggleSubmenu('about')}
            className={`${classes.sidebar_link} ${classes.dropdown}`}
          >
            About
            {openMenu === 'about' ? (
              <AiOutlineUp className={classes.dropdown_icon} />
            ) : (
              <FaChevronDown className={classes.dropdown_icon} />
             
            )}
          </div>
          {openMenu === 'about' && (
            <div className={classes.submenu}>
              <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/about/general_info'}>
                - General Information
              </Link>
              <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/about/chairman_message'}>
                - Chairman's Message
              </Link>
              <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/about/cobse'}>
                - Cobse
              </Link>
              <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/about/objectives'}>
                - Objectives
              </Link>
              <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/about/aim'}>
                - Aim
              </Link>
              <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/about/rules'}>
                - Rules & Regulations
              </Link>
            </div>
          )}
        </div>

        <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/admissions'}>
          Admissions
        </Link>
        <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/authorised_centers'}>
          Authorised Centers
        </Link>
        <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/courses'}>
          Courses
        </Link>
        <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/results'}>
          Results
        </Link>
        <a
          target="_blank"
          className={classes.sidebar_link}
          href={'http://13.127.79.175:8082/login'}
        >
          School Login
        </a>
        <a
          target="_blank"
          className={classes.sidebar_link}
          href={'http://13.127.79.175:8083/login'}
        >
          Board Login
        </a>
        <Link onClick={closeSidebar} className={classes.sidebar_link} to={'/contact'}>
          Contact
        </Link>
      </nav>
    </div>
  </>
  )
}

export default Sidebar