import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaChevronDown } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer py-5" style={{ backgroundColor: '#0e0e0e' }}>
      <Container className="footer-container">
        {/* Logo */}
        <div className="footer-logo text-center mb-4">
          <img src="/finantex-logo.png" alt="FinanTex Logo" className="footer-logo-img" />
        </div>

        {/* Links - Two columns in desktop, stacked in mobile */}
        <div className="footer-links-wrapper">
          <Row className="footer-links-row">
            {/* Hỗ trợ */}
            <Col xs={6} className="footer-links">
              <h5 className="footer-heading">Hỗ trợ</h5>
              <ul className="footer-links-list">
                <li><a href="#" className="footer-link">Nghĩa vụ thành viên VIP</a></li>
                <li><a href="#" className="footer-link">Chính sách bảo mật</a></li>
              </ul>
            </Col>

            {/* Bảo mật */}
            <Col xs={6} className="footer-links">
              <h5 className="footer-heading">Bảo mật</h5>
              <ul className="footer-links-list">
                <li><a href="#" className="footer-link">Điều khoản và Điều kiện</a></li>
                <li><a href="#" className="footer-link">Cảnh báo rủi ro</a></li>
                <li><a href="#" className="footer-link">Miễn trừ trách nhiệm</a></li>
              </ul>
            </Col>
          </Row>
        </div>

        {/* Ngôn ngữ */}
        <div className="language-selector-wrapper text-center my-4">
          <Button className="language-selector">
            <span className="flag-icon">VN</span> Tiếng Việt <FaChevronDown size={8} className="ms-1" />
          </Button>
        </div>

        {/* Thông báo pháp lý */}
        <div className="footer-disclaimer mt-4">
          <p className="disclaimer-text">
            Cảnh báo rủi ro: Giao dịch và đầu tư vào các tùy chọn kỹ thuật số có mức độ rủi ro đáng kể và không phù hợp và / hoặc thích hợp cho tất cả khách hàng. Vui lòng đảm bảo rằng bạn cẩn thật cân nhắn mục tiêu đầu tư, mức độ kinh nghiệm và khẩu vị rủi ro trước khi mua hoặc bán bất kỳ tài sản kỹ thuật số nào. Bạn nên nhận thức và hiểu đầy đủ tất cả các rủi ro liên quan đến giao dịch và đầu tư vào tài sản kỹ thuật số, bạn không nên đầu tư các khoản tiền mà bạn không thể để mất.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 