import React from 'react';
import ReactModal from 'react-modal';
import NewsItem from '../NewsItem/NewsItem';

import {logo} from '../../../assets/images';

class Modal extends React.Component {
    state = {
        modalIsOpen: false,
    }
    render() {
        return(
           <ReactModal isOpen={this.modalIsOpen}>
    
           </ReactModal>
        );
    }
}

export default Modal;