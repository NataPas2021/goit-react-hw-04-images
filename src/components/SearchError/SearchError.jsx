import PropTypes from 'prop-types';

const SearchError = ({message}) => {
 return <>
      <p>{message}</p>
        </>
}

export default SearchError;

SearchError.propTypes = {
    message: PropTypes.string.isRequired,
}