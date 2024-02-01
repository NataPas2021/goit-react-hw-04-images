import axios from "axios";



axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
    key: '28539221-d5e0309a6fde535568a0abe02',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: '12',
}
 const fetchSearchedImages = (searchQuery, currentPage) => {
    const response = axios.get(`?q=${searchQuery}&page=${currentPage}`);
    console.log(response);
    return response;      
}

export default fetchSearchedImages;

// export function imageValues(data) {
//     return data.map(({ id, largeImageURL, webformatURL, tags }) => ({
//       id,
//       largeImageURL,
//       webformatURL,
//       tags,
//     }));
//   }
    


//controller
// const controller = new AbortController();
//     const response = await axios.get(`?q=${searchQuery}&page=${currentPage}`,{
//         signal: controller.signal
//      });
