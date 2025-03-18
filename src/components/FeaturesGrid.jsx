import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLock, FaMoneyBillWave, FaClock } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const FeaturesGrid = () => {
  return (
    <section className="features-grid-section">
      <Container>
        <div className="features-header">
          <div className="text-center">
            <p className="features-subtitle">FinanTex</p>
            <h2 className="features-title">Nền tảng FinanTex được xây dựng</h2>
            <h3 className="features-highlight">Trên sự đột phá</h3>
          </div>
          <img src="/favicon.png" alt="FinanTex Logo" className="features-logo" />
        </div>
        
        <Row className="features-row">
          <Col lg={4} md={6} xs={12} className="feature-column">
            <div className="feature-icon">
              <FaLock size={40} />
            </div>
            <h4 className="feature-column-title">FinanTex Ổn định & Bảo mật</h4>
            <p className="feature-column-text">
              Nền tảng của chúng tôi rất ổn định và có sẵn trên toàn thế giới. Chúng tôi bảo vệ tài sản của bạn bằng các phương pháp bảo mật tốt nhất.
            </p>
          </Col>
          
          <Col lg={4} md={6} xs={12} className="feature-column">
            <div className="feature-icon">
              <FaMoneyBillWave size={40} />
            </div>
            <h4 className="feature-column-title">Giới thiệu & Kiếm tiền</h4>
            <p className="feature-column-text">
              Giới thiệu bạn bè và cùng nhau kiếm tiền bằng cách giao dịch trên.
            </p>
          </Col>
          
          <Col lg={4} md={12} xs={12} className="feature-column">
            <div className="feature-icon">
              <FaClock size={40} />
            </div>
            <h4 className="feature-column-title">Nhanh chóng & Miễn phí</h4>
            <p className="feature-column-text">
              Không có phí gửi tiền và phí rút tiền nhỏ. Giao dịch được thực hiện trong vòng vài phút.
            </p>
          </Col>
        </Row>
        
        <div className="crypto-partners">
          <img src="/binance.png" alt="Binance" className="partner-logo" />
          <img src="/bitcoin.png" alt="Bitcoin" className="partner-logo" />
          <img src="/tether.png" alt="Tether" className="partner-logo d-md-inline d-sm-block" />
        </div>
      </Container>
    </section>
  );
};

export default FeaturesGrid; 