//import { useState, useEffect } from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
//import {Component} from 'react';
import css from './App.module.css';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import fetchSearchedImages from 'services/api';
import Modal from './Modal/Modal';
import { InfinitySpin } from 'react-loader-spinner';

const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('cats');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [tags, setTags] = useState('');
  

  useEffect(() => {
    if(searchQuery) {
      fetchImg();
    }

    async function fetchImg () {
      try {
        const {data} = await fetchSearchedImages(searchQuery, currentPage)
        console.log(data)
        setImages(prevImages => data.totalHits === 0 ? toast.warn('Unfortunately, we didnt find any pictures. Please, try another query') : [...prevImages, ...data.hits])
        console.log(images)
      } catch (error) {
        setError('Ooops, something went wrong. Please reload page');
      }
      finally {

      }
      
    }
    
    //const controller = new AbortController();
    
    
    
    //const fetchImages = async () => {
      // try {
      //         setIsLoading(true);
      //         const {totalHits, hits} = await fetchSearchedImages(searchQuery, currentPage);
      //         console.log(hits);
      //         setImages(prevImages => totalHits === 0 ? toast.warn('Unfortunately, we didnt find any pictures. Please, try another query') : [...prevImages, ...hits])
          
      //       } catch(error) {
      //         setError('Ooops, something went wrong. Please reload page');
      //       } finally {
      //         setIsLoading(false);
      //       }   
      //   }
    //  if(searchQuery) {
    //   fetchImages(); 
    // }
    // return () => {
    //   controller.abort();
    // }
 } , [searchQuery, currentPage]);

 
//  const imageValues = ({data}) => {
//   return data.map(({ id, largeImageURL, webformatURL, tags }) => ({
//     id,
//     largeImageURL,
//     webformatURL,
//     tags,
//   }));

  const handleFormSubmit = ({searchQuery}) => {
        setSearchQuery(searchQuery);
        setCurrentPage(1);
        setImages([]); 
        }
    
  const onLoadMore = () => setCurrentPage(prevPage => prevPage + 1);
   
  const toggleModal = () => setShowModal(!showModal);
    
  const openModal = ({largeImageURL, tags}) => {
       toggleModal();
       setLargeImageURL(largeImageURL);
       setTags(tags);  
      }
        
        return (
          <div className={css.container}>
            <SearchBar onSubmit={handleFormSubmit}/>
            {isLoading &&
              <InfinitySpin width='200' color="#008080"/>}
            {images &&
              <ImageGallery images={images} openModal={openModal}/>}
            {images.length !== 0 && 
              <Button text="Load more" onClick={onLoadMore}/>} 
            {showModal && 
              <Modal imageUrl={largeImageURL} tags={tags} onClickModal={toggleModal}/>}
            {error && 
              <p>{error.message}</p>}
            <ToastContainer />
          </div>
        );
};

export default App;

// export default class App extends Component {
//   state = {
//     images: [],
//     searchQuery: '',
//     isLoading: false,
//     error: null,
//     currentPage: 1,
//     showModal: false,
//     largeImageURL: '',
//     tags: '',
//   }

//  async componentDidUpdate(prevProps, prevState) {
//     const prevSearch = prevState.searchQuery;
//     const nextSearch = this.state.searchQuery;
//     const prevCurrentPage = prevState.currentPage;
//     const currentPage = this.state.currentPage;
//    if(prevSearch !== nextSearch || prevCurrentPage !== currentPage) {
//     try {
//       this.setState({isLoading: true, error: null});
//       const {hits, totalHits} = await fetchSearchedImages(nextSearch, currentPage);
       
//       if(totalHits === 0) {
//         toast.warn('Unfortunately, we didnt find any pictures. Please, try another query');
//       }
      
//       const newImages = imageValues(hits);
//       this.setState(({ images }) => ({
//         images: [...images, ...newImages],
//         totalHits,
//       }));
//     } catch(error) {
//       this.setState({
//         error: 'Ooops, something went wrong. Please reload page',
//       })
//     } finally {
//       this.setState({isLoading: false});
//     }   
//  }
// } 

//   handleFormSubmit = searchQuery => {
//     const stateSearchQuery = this.state.searchQuery
//     if(searchQuery !== stateSearchQuery) {
//     this.setState({
//       searchQuery,
//       currentPage: 1,
//       images: ''})  
//     }
//   }

//   onLoadMore = () => {
//     this.setState(prevState => ({
//       currentPage: prevState.currentPage + 1,
//     }));
//   }
  
//   toggleModal = () => {
//     this.setState(({showModal}) => ({
//       showModal: !showModal,
//     })
//     )
//   }

//   openModal = (largeImageURL, tags) => {
//    this.toggleModal();
//    this.setState({
//     largeImageURL,
//     tags,
//   })
//   }

//   render () {
//     const {isLoading, images, error, largeImageURL, showModal,tags} = this.state;
    
//     return (
//       <div className={css.container}>
//         <SearchBar onSubmit={this.handleFormSubmit}/>
//         {isLoading &&
//           <InfinitySpin width='200' color="#008080"/>}
//         {images &&
//           <ImageGallery images={images} openModal={this.openModal}/>}
//         {images.length !== 0 && 
//           <Button text="Load more" onClick={this.onLoadMore}/>} 
//         {showModal && 
//           <Modal imageUrl={largeImageURL} tags={tags} onClickModal={this.toggleModal}/>}
//         {error && 
//           <p>{error.message}</p>}
//         <ToastContainer />
//       </div>
//     );
//     }
// }
