import React from 'react';
import {
    Form,
    Input,
    Icon,
    Button, 
    notification, 
    Checkbox,
    InputNumber
} from 'antd';
import productsService from '../products/products.service';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

export class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        loading: false
    };


    setLoadingState = (loading) => {
        this.setState({
            loading: loading
        })
    }

    openNotification = () => {
        notification.open({
            message: 'Operation success',
            description:
            'Your product was successfully updated or created',
            icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
        });
        };

    create = (values) => {
        this.setLoadingState(true);
        productsService.create(values).then((response) => {
            this.openNotification();
            // prevent loader blicking if operation is fast
            // show loader at least 500 ms 
            setTimeout(() => { 
                //window.location = '/';
                this.props.history.push('/');
            }, 500);
        })
        .catch(() => {
            this.setLoadingState(false);
        });
    }

    update = (values) => {
        this.setLoadingState(true);
        const newValues = { ...values };
        newValues.id = this.props.product.id;

        productsService
            .update(newValues)
            .then((response) => {
                this.openNotification();
                // prevent loader blicking if operation is fast
                // show loader at least 500 ms 
                setTimeout(() => { 
                    //window.location = '/';
                    this.props.history.push('/');
                }, 500);
            })
            .catch(() => {
                this.setLoadingState(false);
            });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                if (!this.props.product.id) {
                    this.create(values);
                } else {
                    this.update(values);
                }
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label=" " colon={false}>
                    <h1>Product</h1>
                </Form.Item>
                <Form.Item label="Name">
                    {getFieldDecorator('name', {
                        initialValue: this.props.product.name,
                        rules: [
                            {
                                required: true,
                                message: 'Please input product name!',
                            },
                        ],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Category">
                    {getFieldDecorator('category', {
                        initialValue: this.props.product.category,
                        rules: [
                            {
                                required: true,
                                message: 'Please input product category!',
                            },
                        ],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Price">
                    {getFieldDecorator('price', {
                        initialValue: this.props.product.price,
                        rules: [
                            {
                                required: true,
                                message: 'Please input product price!',
                            },
                        ],
                    })(<InputNumber />)}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    {getFieldDecorator('active', {
                        initialValue: this.props.product.active,
                        valuePropName: 'checked',
                    })(
                        <Checkbox>Product status ( active/not active)</Checkbox>,
                    )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" loading={this.state.loading}>
                        Save
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}