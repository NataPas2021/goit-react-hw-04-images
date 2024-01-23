//import {Component} from 'react';
import { useEffect } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({imageUrl, tags, onClickModal}) => {

 useEffect(() => {
  window.addEventListener('keydown', onKeyDown);

  return () => {window.removeEventListener('keydown', onKeyDown);}
 }
)

 const  onKeyDown = e => {
  if (e.code === 'Escape') {
    onClickModal();
  }
};

const onBackDropClick = e => {
          if (e.target === e.currentTarget) {
            onClickModal();
          }
        };


  return (
          <div className={css.overlay} onClick={onBackDropClick}>
              <div className={css.modal}>
                  <img src={imageUrl} alt={tags} />
              </div>
          </div>
          )
}
// class Modal extends Component {
//     componentDidMount() {
//         window.addEventListener('keydown', this.onKeyDown);
//       }
    
//     onKeyDown = e => {
//         if (e.code === 'Escape') {
//           this.props.onClickModal();
//         }
//       };
    
//     componentWillUnmount() {
//         window.removeEventListener('keydown', this.onKeyDown);
//       }
    
//     onBackDropClick = e => {
//         if (e.target === e.currentTarget) {
//           this.props.onClickModal();
//         }
//       };


//     render() {
//        const {imageUrl, tags} = this.props;
//         return (
//             <div className={css.overlay} onClick={this.onBackDropClick}>
//                <div className={css.modal}>
//                  <img src={imageUrl} alt={tags} />
//                </div>
//            </div>
//         )
//     }
    
// }

export default Modal;

Modal.propTypes = {
    tags: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    onClickModal: PropTypes.func.isRequired,
  };