import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

const TradingSection = () => {
  const { openLoginModal } = useAuth();
  
  return (
    <section className="trading-section py-5">
      <Container className="position-relative">
        {/* Gold coin image */}
        <div className="gold-coin-container">
          <img src="./finan-coin (1).png" alt="Gold Coin" className="gold-coin-trading" />
        </div>
        
        {/* Horizontal divider */}
        <div className="divider"></div>
        
        <Row>
          {/* Tablet image - always visible first */}
          <Col xs={12}>
            <div className="trading-device-container text-center">
              <img src="/tablet.png" alt="Trading Chart" className="trading-device-image" />
            </div>
          </Col>
          
          {/* Content centered below */}
          <Col xs={12}>
            <div className="trading-content-container text-center">
              <h2 className="mb-3">
                <span className="text-warning">Mọi nơi</span>
                <span className="text-white"> bạn muốn.</span>
              </h2>
              <h2 className="mb-4">
                <span className="text-warning">Mọi lúc</span>
                <span className="text-white"> bạn cần.</span>
              </h2>
              <p className="text-muted mb-5 mx-auto trading-description">
                FinanTex có thể giúp ngay cả những nhà giao dịch mới cũng có thể kiếm được thu nhập bền vững.
              </p>
              <Button variant="warning" className="trading-button" onClick={openLoginModal}>
                BẮT ĐẦU MIỄN PHÍ
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TradingSection;