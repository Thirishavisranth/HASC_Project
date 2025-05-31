import { Space, Table, Typography } from "antd";
import { useState } from "react";

function Orders() {
  const [loading] = useState(false);
  const [dataSource] = useState([
    {
      key: 1,
      "Order ID": "ORD12345",
      "Customer Name": "John Doe",
      Email: "john.doe@example.com",
      "Contact No": "8978675645",
      title: "TV repair",
      price: 49.99,
      discountedPrice: 6,
      quantity: 2,
    },
    {
      key: 2,
      "Order ID": "ORD12346",
      "Customer Name": "Alice Smith",
      Email: "alice.smith@example.com",
      "Contact No": "9876543210",
      title: "Refrigerator maintenance",
      price: 29.99,
      discountedPrice: 12,
      quantity: 1,
    },
    {
      key: 3,
      "Order ID": "ORD12347",
      "Customer Name": "Bob Johnson",
      Email: "bob.johnson@example.com",
      "Contact No": "4567890123",
      title: "Oven repair",
      price: 99.99,
      discountedPrice: 3,
      quantity: 3,
    },
    {
      key: 4,
      "Order ID": "ORD12348",
      "Customer Name": "Mary Brown",
      Email: "mary.brown@example.com",
      "Contact No": "7890123456",
      title: "Washing machine maintenance",
      price: 19.99,
      discountedPrice: 6,
      quantity: 2,
    },
    {
      key: 5,
      "Order ID": "ORD12349",
      "Customer Name": "David Lee",
      Email: "david.lee@example.com",
      "Contact No": "2345678901",
      title: "AC installation",
      price: 79.99,
      discountedPrice: 12,
      quantity: 1,
    },
    {
      key: 6,
      "Order ID": "ORD12350",
      "Customer Name": "Sarah Adams",
      Email: "sarah.adams@example.com",
      "Contact No": "8765432109",
      title: "Dishwasher repair",
      price: 39.99,
      discountedPrice: 6,
      quantity: 4,
    },
    {
      key: 7,
      "Order ID": "ORD12351",
      "Customer Name": "Michael Wilson",
      Email: "michael.wilson@example.com",
      "Contact No": "3216549870",
      title: "Microwave maintenance",
      price: 69.99,
      discountedPrice: 12,
      quantity: 1,
    },
    {
      key: 8,
      "Order ID": "ORD12352",
      "Customer Name": "Linda Thomas",
      Email: "linda.thomas@example.com",
      "Contact No": "2345678901",
      title: "Vacuum cleaner repair",
      price: 49.99,
      discountedPrice: 6,
      quantity: 3,
    },
    {
      key: 9,
      "Order ID": "ORD12353",
      "Customer Name": "James White",
      Email: "james.white@example.com",
      "Contact No": "9876543210",
      title: "Toaster maintenance",
      price: 59.99,
      discountedPrice: 12,
      quantity: 2,
    },
    {
      key: 10,
      "Order ID": "ORD12354",
      "Customer Name": "Emily Harris",
      Email: "emily.harris@example.com",
      "Contact No": "4567890123",
      title: "Blender repair",
      price: 69.99,
      discountedPrice: 6,
      quantity: 1,
    },
  ]);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Order ID",
            dataIndex: "Order ID",
          },
          {
            title: "Customer Name",
            dataIndex: "Customer Name",
          },
          {
            title: "Email",
            dataIndex: "Email",
          },
          {
            title: "Contact No",
            dataIndex: "Contact No",
          },
          {
            title: "Services",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>Rs. {value}</span>,
          },
          {
            title: "Warranty",
            dataIndex: "discountedPrice",
            render: (value) => <span> {value} month</span>,
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
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

export default Orders;
