"use client"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"

const FeatureSection = () => {
  const { openLoginModal } = useAuth()
  return (
    <section className="feature-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="order-lg-1 order-1 mb-5 mb-lg-0">
            <div className="feature-image-container">
              <img src="/mockup-tablet-phone.png" alt="Trading Features" className="feature-image" />
            </div>
          </Col>
          <Col lg={6} className="order-lg-2 order-2">
            <h2 className="feature-title">Các chỉ báo giao dịch giúp khách hàng kiếm được nhiều tiền hơn</h2>
            <p className="feature-description">
              FinanTex phát triển các chỉ báo cực kỳ tiên tiến và dễ sử dụng để giúp các nhà giao dịch đưa ra quyết định
              tốt hơn trong giao dịch.
            </p>
            <Button className="feature-button" onClick={openLoginModal}>
              BẮT ĐẦU MIỄN PHÍ
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FeatureSection

