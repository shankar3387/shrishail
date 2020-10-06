import React, { useState } from 'react';
import { Form, Input, Tooltip,Radio, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify';
import AuthSer from '../Server/server'
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
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

const FormSeller = (props) => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form: ', values);
    AuthSer.postSellerRegistration(values).then(results=>{
      console.log(results.data)
      toast.success('successfully added')
    })
   
    // this.props.onFinish(values)
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
       <Option value="91">+91</Option>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = value => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map(website => ({
    label: website,
    value: website,
  }));
  return (
    <Form {...formItemLayout} form={form} name="register" onFinish={onFinish} scrollToFirstError>
      <Form.Item
        name="business_name"
        label="Business Name"
        rules={[
          {
            required: true,
            message: 'Please input your Business Name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },({ getFieldValue }) => ({
            validator(rule, value) {
              return AuthSer.postSellerEmailValidation({email:value}).then(result=>{
                console.log(result)
                if(result.error){
                  return Promise.reject('exists');
                }
                return Promise.resolve();

              });

              // return Promise.reject('The two passwords that you entered do not match!');
            },
          })
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="city"
        label="City"
        rules={[
          {
            required: true,
            message: 'City name required!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
      <Form.Item>
      <Radio.Group>
        <Radio value={true}>Taxable</Radio> <br />
        <Radio value={false}>Non Taxable</Radio>
    </Radio.Group>

    </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormSeller;
