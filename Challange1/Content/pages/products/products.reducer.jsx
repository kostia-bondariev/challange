import productsService from './products.service';
const TABLE_LOADING_STATE_SET = "TABLE_LOADING_STATE_SET";
const PRODUCT_LOADING_STATE_SET = "PRODUCT_LOADING_STATE_SET";
const PRODUCTS_LIST_SUCCESS = "PRODUCTS_LIST_SUCCESS";
const PRODUCT_SUCCESS = "PRODUCT_SUCCESS"
const PRODUCT_FAILURE = "PRODUCT_FAILURE"
const PRODUCT_CLEAR = "PRODUCT_CLEAR"

const initialState = {
  loading: true,
  productLoading: true,
  data: [

  ]
}

const productReducer = (state = initialState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case PRODUCTS_LIST_SUCCESS:
      newState.loading = false;
      newState.products = action.payload.data;
      newState.count = action.payload.count;
      break;

    case TABLE_LOADING_STATE_SET:
      newState.loading = action.payload;
      break;

    case PRODUCT_LOADING_STATE_SET:
      newState.productLoading = action.payload;
      break;

    case PRODUCT_SUCCESS:
      newState.product = action.payload.product;
      newState.productLoading = false;
      break;

    case PRODUCT_CLEAR: 
      newState.productLoading = false;
      newState.product = {}
      break;
  }
  return newState;
}

export const getProductsList = () => {
  return (dispatch) => {
    dispatch(setTableLoadingState(true));

    productsService
      .getList()
      .then((response) => {
        // timeout for emulation some load, 
        // just to test table loading :)
        setTimeout(() => {
          dispatch(productListSuccess(response.data))
        }, 300);
      })
      .catch(error => {
        dispatch(setTableLoadingState(false));
        //todo: add some error message
        console.log(error);
      });
  }
}

export const getProduct = (id) => {
  return (dispatch) => {
    setProductLoadingState(true);
    productsService
      .getById(id)
      .then((response) => {
        dispatch(getProductSuccess(response.data));
      })
      .catch(error => {
        setProductLoadingState(false);
        //todo: add some error message
        console.log(error);
      });
  }
}

const setTableLoadingState = (loading) => {
  return {
    type: TABLE_LOADING_STATE_SET,
    payload: loading
  }
}

const setProductLoadingState = (loading) => {
  return {
    type: PRODUCT_LOADING_STATE_SET,
    payload: loading
  }
}


const productListSuccess = (response) => {
  return {
    type: PRODUCTS_LIST_SUCCESS,
    payload: {
      data: response.data,
      count: response.count
    }
  }
}

const getProductSuccess = (response) => {
  return {
    type: PRODUCT_SUCCESS,
    payload: {
      product: response,
    }
  }
}

export const clearProduct = () => {
  return {
    type: PRODUCT_CLEAR,
  }
}


export default productReducer;