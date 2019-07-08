import React from 'react';
import {
    Form,
} from 'antd';
import { withRouter } from 'react-router-dom';
import { getProduct, clearProduct } from '../products/products.reducer';
import { connect } from 'react-redux';
import { RegistrationForm } from './product.registration';

class ProductEdit extends React.Component {

    componentDidMount() {
        // load product if we are editing 
        if (this.props.match.params.id) {
            this.props.loadProduct(this.props.match.params.id);
        }
        else { 
            this.props.clearProduct();
        }
    } 

    render() {
        debugger;
        const ProductForm = withRouter(Form.create({ name: 'register' })(RegistrationForm));
        return (<div>
            {
                this.props.loading &&
                <span>Loading...</span>
            }
            {
                !this.props.loading &&
                <div>
                    <ProductForm product={this.props.product} />
                </div>
            }
        </div>);

    }
}

const mapState = (state) => {
    return {
        loading: state.product.productLoading,
        product: state.product.product
    }
};

const mapDispatch = (dispatch) => {
    return {
        loadProduct(id) {
            dispatch(getProduct(id));
        },
        clearProduct(id) {
            dispatch(clearProduct());
        }
        
    };
};

const CreateEditContainer = withRouter(connect(mapState, mapDispatch)(ProductEdit));
export default CreateEditContainer;
