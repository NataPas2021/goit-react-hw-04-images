import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({text, onClick}) => {
return (
    <button className={css.button} type='button' onClick={onClick}>{text}</button>
)
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}