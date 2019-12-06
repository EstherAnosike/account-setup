import React from 'react';

import { Link } from 'react-router-dom';

const QuickLinks = () => {
    return ( 
        <div>
            <div className="main">
                <p>Quick Links</p>
                <div className="items">
                    <span><i className="fa fa-credit-card-alt"></i></span>
                    <span>Pay Rent</span>
                </div>
                <div className="items">
                    <span><i className="fa fa-bolt"></i></span>
                    <span>Tokens</span>
                </div>
                <Link to ="/dashboard/request-maintenance" className="items">
                    <span><i className="fa fa-wrench"></i></span>
                    <span>Maintenance</span>
                </Link>
                <div className="items">
                    <span><i className="fa fa-history"></i></span>
                    <span>Transaction History</span>
                </div>
            </div>
        </div>
     );
}
 
export default QuickLinks;