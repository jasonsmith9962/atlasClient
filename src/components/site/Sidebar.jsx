import React from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';

function Sidebar () {
    return (
        <div>
            <ul>
                <li><Link to='/'></Link></li>
            </ul>
        </div>
        // <div>
        //     <Switch>
        //     <Route path='/'>< /></Route>
        //     </Switch>
        // </div>
    )
}

export default Sidebar;