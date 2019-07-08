import React from 'react';
import ProductsContainer from './products/products';
import { connect, dispatch } from 'react-redux';
import { getProductsList } from './products/products.reducer';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export class Home extends React.Component {

	componentDidMount() {
		this.props.loadProducts();
	}

	render() {
		return (<div>
			<div className="products-header">
				<h1 className="title">Products</h1>
				<Link to='/product'><Button type="primary" className="add-button">Add new</Button></Link>
			</div>

			<ProductsContainer />
		</div>)

	}
};

const mapState = (state) => {
	return {
		test: true
	}
};

const mapDispatch = (dispatch) => {
	return {
		loadProducts() {
			dispatch(getProductsList());
		}
	};
};

const HomeContainer = connect(mapState, mapDispatch)(Home);
export default HomeContainer;