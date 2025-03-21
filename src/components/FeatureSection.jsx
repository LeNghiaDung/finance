import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

const FeatureSection = () => {
    const { openLoginModal } = useAuth();
  return (
    <section className="feature-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="order-lg-1 order-1 mb-5 mb-lg-0">
            <div className="feature-image-container">
              <img
                src="/mockup-tablet-phone.png"
                alt="Trading Features"
                className="feature-image"
              />
            </div>
          </Col>
          <Col lg={6} className="order-lg-2 order-2">
            <h2 className="feature-title">
              Các ưu điểm nổi bật của <span className="text-warning">FinanTex</span>
            </h2>
            <p className="feature-description">
              Nền tảng FinanTex cung cấp môi trường giao dịch năng động và đa dạng, giúp bạn
              xây dựng tài sản bền vững và đạt được tự do tài chính. Giao dịch bằng các công cụ
              hàng đầu thị trường và được hỗ trợ bởi đội ngũ hỗ trợ chuyên nghiệp.
            </p>
            <Button className="feature-button" onClick={openLoginModal}>
              BẮT ĐẦU MIỄN PHÍ
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeatureSection; 