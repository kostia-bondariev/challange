import React from 'react';
import { Table, Divider, Tag } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import productsService from './products.service';
import { getProductsList } from './products.reducer';

export class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  delete = (id) => {
    productsService.delete(id)
      .then((response) => {
        this.props.loadProducts();
      })
      .catch(error => {
        //todo: add some error message
        console.log(error);
      });
  }

  render() {
    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, product) => {
          return <Link to={`/product/${product.id}`}>{text}</Link>
        }
      },
      {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
      },
      {
        title: 'Status',
        key: 'active',
        dataIndex: 'active',
        render: active => {
          if (active) {
            return <Tag color="green">
                    Active
                  </Tag>
          } else {
            return <Tag color="volcano">
                    Not Active
                  </Tag>
          }
        },
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <Link to={`/product/${record.id}`}>Edit</Link>
            <Divider type="vertical" />
            <a href="#" onClick={() => this.delete(record.id)}>Delete</a>
          </span>
        ),
      },
    ];

    return (
      <Table
        columns={columns}
        dataSource={this.props.data}
        loading={this.props.loading}>
      </Table>);
  }
};

const mapState = (state) => {
  return {
    loading: state.product.loading,
    data: state.product.products
  }
};

const mapDispatch = (dispatch) => {
  return {
    loadProducts() {
      dispatch(getProductsList());
    }
  };
};

const ProductsContainer = connect(mapState, mapDispatch)(Products);
export default ProductsContainer;



