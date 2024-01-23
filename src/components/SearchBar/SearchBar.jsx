import css from './SearchBar.module.css';
import PropTypes from 'prop-types';
import SearchForm from 'components/SearchForm/SearchForm';

const SearchBar = ({onSubmit}) => {
    return (
<header className={css.searchBar}>
  <SearchForm onSubmit={onSubmit}/>
</header>
    )
}

export default SearchBar;

SearchBar.propTypes = {
 onSubmit: PropTypes.func.isRequired,
}