import React from 'react';
import { Menu, Badge, Dropdown } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const Navbar = ({ cartItems = [] }) => {  // Set a default value for cartItems to be an empty array

  const cartMenu = (
    <Menu>
      {cartItems.length === 0 ? (
        <Menu.Item key="0">
          No items in cart
        </Menu.Item>
      ) : (
        cartItems.map(item => (
          <Menu.Item key={item.id}>
            {item.name} - {item.quantity}
          </Menu.Item>
        ))
      )}
    </Menu>
  );

  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        Shopping Site
      </Menu.Item>
      <Menu.Item key="products">
        Products
      </Menu.Item>
     
      <Menu.Item key="cart" style={{ float: 'right' }}>
        <Dropdown menu={cartMenu} trigger={['click']}>
          <Badge count={cartItems.length} showZero>  {/* Updated from cartItemCount to cartItems.length */}
            <ShoppingCartOutlined style={{ fontSize: '20px' }} />
          </Badge>
        </Dropdown>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
