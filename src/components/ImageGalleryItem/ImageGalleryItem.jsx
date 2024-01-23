//import {Component} from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({webURL, largeImg, tags, openModal}) => {
    return (
        <> 
         <li className={css.imageGalleryItem} >
           <img className={css.image} 
           src={webURL}
           alt={tags}
           onClick={() => openModal(largeImg, tags)} />
         </li>
        </>
    )
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
 webURL: PropTypes.string.isRequired,
 openModal: PropTypes.func.isRequired,
 largeImg: PropTypes.string.isRequired,
 tags: PropTypes.string.isRequired,
}