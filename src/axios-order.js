import axios from 'axios'

const instance=axios.create({
    baseURL:'https://burger-builder-eedad-default-rtdb.firebaseio.com/'
});
 export default instance