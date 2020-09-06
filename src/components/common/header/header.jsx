import React from 'react';
import NewsItem from '../NewsItem/NewsItem';

import {logo} from '../../../assets/images';

const Header = () => {
    return(
        <React.Fragment>
            <header>
                <h1 className="text-center">Hacker News</h1>
            </header>
        </React.Fragment>
    );
}

export default Header;