import axios from 'axios'

const productsService = {
  getList () { 
    return axios.get('/api/product/list');
  },

  getById(id){ 
    debugger;
    return axios.get(`/api/product/${id}`);
  },

  delete(id){ 
    return axios.delete(`/api/product/delete/${id}`);
  },

  create(model){ 
    return axios.post(`/api/product/create`, model);
  },

  update(model){ 
    return axios.put(`/api/product/update`, model);
  }
} 

export default productsService;
