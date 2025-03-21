import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaShieldAlt, FaUsers, FaClock } from 'react-icons/fa';

const FeaturesGrid = () => {
  return (
    <section className="features-section">
      <Container className="position-relative">
        <div className="section-header text-center mb-5">
          <span className="subtitle text-warning">FinanTex</span>
          <h2 className="mt-2">Nền tảng FinanTex được xây dựng</h2>
          <h3 className="text-warning">Trên sự đột phá</h3>
        </div>
        
        {/* Logo mờ */}
        <div className="features-logo">
          <img src="/favicon.png" alt="FinanTex Logo" />
        </div>
        
        <Row className="features-row">
          <Col md={4} className="feature-column">
            <div className="feature-icon">
              <FaShieldAlt size={40} />
            </div>
            <h4 className="feature-column-title">FinanTex Ổn định & Bảo mật</h4>
            <p className="feature-column-text">
              Nền tảng của chúng tôi rất ổn định và có sẵn trên toàn thế giới. Chúng tôi bảo vệ tài sản của bạn bằng các phương pháp bảo mật tốt nhất.
            </p>
          </Col>

          <Col md={4} className="feature-column">
            <div className="feature-icon">
              <FaUsers size={40} />
            </div>
            <h4 className="feature-column-title">Giới thiệu & Kiếm tiền</h4>
            <p className="feature-column-text">
              Giới thiệu bạn bè và cùng nhau kiếm tiền bằng cách giao dịch trên.
            </p>
          </Col>

          <Col md={4} className="feature-column">
            <div className="feature-icon">
              <FaClock size={40} />
            </div>
            <h4 className="feature-column-title">Nhanh chóng & Miễn phí</h4>
            <p className="feature-column-text">
              Không có phí gửi tiền và phí rút tiền nhỏ. Giao dịch được thực hiện trong vòng vài phút.
            </p>
          </Col>
        </Row>
      </Container>
      <div className="crypto-partners">
        <img src="/binance.png" alt="Binance Smart Chain" className="partner-logo" />
        <img src="/bitcoin.png" alt="Bitcoin" className="partner-logo" />
        <img src="/tether.png" alt="Tether" className="partner-logo" />
      </div>
    </section>
  );
};

export default FeaturesGrid; 