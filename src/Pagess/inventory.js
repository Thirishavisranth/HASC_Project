import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useState } from "react";

function Inventory() {
  const [loading] = useState(false);
  const [dataSource] = useState([
    {
      id: 1,
      title: "Washing Machine Motor",
      price: 99.99,
      rating: 4.5,
      stock: 50,
    },
    {
      id: 2,
      title: "Refrigerator Compressor",
      price: 149.99,
      rating: 4.2,
      stock: 30,
    },
    {
      id: 3,
      title: "Oven Heating Element",
      price: 39.99,
      rating: 4.8,
      stock: 75,
    },
    {
      id: 4,
      title: "Dishwasher Pump",
      price: 29.99,
      rating: 4.3,
      stock: 40,
    },
    {
      id: 5,
      title: "Microwave Glass Tray",
      price: 9.99,
      rating: 4.7,
      stock: 100,
    },
    {
      id: 6,
      title: "Air Conditioner Fan",
      price: 79.99,
      rating: 4.6,
      stock: 25,
    },
    {
      id: 7,
      title: "Vacuum Cleaner Filter",
      price: 12.99,
      rating: 4.0,
      stock: 60,
    },
    {
      id: 8,
      title: "Toaster Heating Element",
      price: 19.99,
      rating: 4.4,
      stock: 70,
    },
    {
      id: 9,
      title: "Coffee Maker Carafe",
      price: 8.99,
      rating: 4.2,
      stock: 55,
    },
    {
      id: 10,
      title: "Blender Blade",
      price: 14.99,
      rating: 4.5,
      stock: 45,
    },
  ]);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "services",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>Rs. {value}</span>,
          },
          {
            title: "Rating",
            dataIndex: "rating",
            render: (rating) => {
              return <Rate value={rating} allowHalf disabled />;
            },
          },
          {
            title: "Stock",
            dataIndex: "stock",
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
}

export default Inventory;
