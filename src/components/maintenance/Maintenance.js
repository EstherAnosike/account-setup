import React from 'react';

import Button from './../UI/button/Button';

const Maintenance = () => {
        return (
                <div className="main">
                    <h2>Request Maintenance</h2>
                    <textarea placeholder="Description...">
                    </textarea>
                    <div>
                        <Button>Send Request</Button>
                    </div>
                </div>
        );
}
 
export default Maintenance;