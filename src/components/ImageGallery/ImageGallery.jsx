import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';




const ImageGallery = ({images, openModal}) => {
return (
  <>
  <ul className={css.ImageGallery} >
    {images.map(({id, webformatURL, largeImageURL, tags}) => {
    return  <ImageGalleryItem key={id} webURL={webformatURL} openModal={openModal} largeImg={largeImageURL} tags={tags} />
  })}
    </ul>
  </>
)
}

export default ImageGallery;

ImageGallery.propTypes = {
 images: PropTypes.arrayOf(
  PropTypes.shape({
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
})
).isRequired,
 openModal: PropTypes.func.isRequired,
}