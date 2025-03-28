
import { Container, Row, Col, Button } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"

const HeroSection = () => {
  const { openLoginModal } = useAuth()

  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="content-column order-lg-1 order-2">
            <h6 className="hero-title-small">HUẤN LUYỆN THÔNG MINH, KỸ NĂNG PHÁT TRIỂN</h6>
            <h1 className="hero-title">Nền tảng giao dịch lý tưởng để kiếm tiền FinanTex</h1>
            <p className="hero-description">
              FinanTex là nền tảng giao dịch và kiếm thu nhập không giới hạn. Với giao diện đơn giản mang đến trải
              nghiệm đẳng cấp thế giới cho mọi người.
            </p>
            <Button className="hero-button" onClick={openLoginModal}>
              BẮT ĐẦU MIỄN PHÍ
            </Button>
          </Col>
          <Col lg={6} className="image-column order-lg-2 order-1">
            <div className="hero-image-container">
              <img src="/mockup-phone-coin.png" alt="Trading App" className="hero-phone-image" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection

