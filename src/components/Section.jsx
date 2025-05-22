import React, { useState } from 'react';
import { Typography, Card, Button, Tooltip} from 'antd';
import { LeftOutlined, RightOutlined, ArrowRightOutlined,  HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Title, Text, Link, Paragraph  } = Typography;

// Fake data
const defaultProducts = [
  { id: 1, name: 'Sản phẩm A', price: 199000, image: '/assets/images/section1.jpg' },
  { id: 2, name: 'Sản phẩm B', price: 259000, image: '/assets/images/section1.jpg' },
  { id: 3, name: 'Sản phẩm C', price: 329000, image: '/assets/images/section1.jpg' },
  { id: 4, name: 'Sản phẩm D', price: 99000, image: '/assets/images/section1.jpg' },
  { id: 5, name: 'Sản phẩm E', price: 149000, image: '/assets/images/section1.jpg' },
  { id: 6, name: 'Sản phẩm F', price: 239000, image: '/assets/images/section1.jpg' },
  { id: 7, name: 'Sản phẩm G', price: 89000, image: '/assets/images/section1.jpg' },
];

const ProductItem = ({ product }) => {
  return (
    <Card
      hoverable
      style={{
        width: 230,
        borderRadius: 8,
        overflow: 'hidden',
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      cover={
        <div style={{ position: 'relative' }}>
          <img
            alt={product.name}
            src={product.image}
            style={{ width: '100%', height: 160, objectFit: 'cover' }}
          />
          <Tooltip title="Yêu thích">
            <HeartOutlined
              style={{
                position: 'absolute',
                top: 8,
                right: 8,
                fontSize: 20,
                color: '#666',
                background: '#fff',
                borderRadius: '50%',
                padding: 4,
              }}
            />
          </Tooltip>
        </div>
      }
    >
      <div style={{ paddingBottom: 12 }}>
        <Text type="secondary" style={{ fontSize: 12 }}>
          Extra Bass
        </Text>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Title level={5} ellipsis style={{ margin: 0, fontSize: 16 }}>
            {product.name}
          </Title>
          <Title level={5} style={{ margin: 0, color: '#000' }}>
            {product.price.toLocaleString()}₫
          </Title>
        </div>
        <Paragraph ellipsis={{ rows: 2 }} style={{ fontSize: 13, marginBottom: 4 }}>
          {product.description}
        </Paragraph>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button icon={<ShoppingCartOutlined />} />
        <Button type="primary" style={{ background: '#007E33', borderColor: '#007E33' }}>
          Buy Now
        </Button>
      </div>
    </Card>
  );
};
const ProductSection = ({ title = 'Danh mục 1', products=[], link = '#' }) => {
  const actualProducts = products && products.length > 0 ? products : defaultProducts;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleNext = () => setIsExpanded(true);
  const handlePrev = () => setIsExpanded(false);

  const displayProducts = isExpanded ? actualProducts.slice(4, 7) : actualProducts.slice(0, 4);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
        border: '1px solid #eee',
        borderRadius: 12,
        background: '#fff',
        overflow: 'hidden',
      }}
    >
      {/* Danh mục trái */}
      <div style={{ width: 180, paddingRight: 16 }}>
        <Title level={5}>{title}</Title>
      </div>

      {/* Nút trái */}
      {isExpanded && (
        <Button
          shape="circle"
          icon={<LeftOutlined />}
          onClick={handlePrev}
          style={{ marginRight: 16 }}
        />
      )}

      {/* Sản phẩm hiển thị */}
      <div style={{ display: 'flex', gap: 5,  }}>
        {displayProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}

        {/* Slot cuối nếu đã trượt: hiển thị Xem thêm sản phẩm */}
        {isExpanded && (
          <div
            style={{
              width: 200,
              height: 240,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 12,
            }}
          >
            <Link href={link} style={{ fontSize: 14 }}>
              <ArrowRightOutlined /> Xem thêm
            </Link>
          </div>
        )}
      </div>

      {/* Nút phải chỉ hiện khi chưa mở rộng */}
      {!isExpanded && (
        <Button
          shape="circle"
          icon={<RightOutlined />}
          onClick={handleNext}
          style={{ marginLeft: 16 }}
        />
      )}
    </div>
  );
};

export default ProductSection;
