import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaChevronDown } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container className="footer-container">
        {/* Top section with logo, links, and language selector */}
        <div className="footer-top">
          {/* Logo */}
          <div className="footer-logo">
            <img src="/finantex-logo.png" alt="FinanTex Logo" className="footer-logo-img" />
          </div>
          
          {/* Links - Two columns */}
          <div className="footer-links-section">
            <div className="footer-links">
              <h5 className="footer-heading">Hỗ trợ</h5>
              <ul className="footer-links-list">
                <li><a href="#" className="footer-link">Nghĩa vụ thành viên VIP</a></li>
                <li><a href="#" className="footer-link">Chính sách bảo mật</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h5 className="footer-heading">Bảo mật</h5>
              <ul className="footer-links-list">
                <li><a href="#" className="footer-link">Điều khoản và Điều kiện</a></li>
                <li><a href="#" className="footer-link">Cảnh báo rủi ro</a></li>
                <li><a href="#" className="footer-link">Miễn trừ trách nhiệm</a></li>
              </ul>
            </div>
          </div>
          
          {/* Language Selector */}
          <div className="language-selector-wrapper">
            <Button className="language-selector">
              <span className="flag-icon">VN</span> Tiếng Việt <FaChevronDown size={8} className="ms-1" />
            </Button>
          </div>
        </div>

        {/* Thông báo pháp lý */}
        <div className="footer-disclaimer">
          <p className="disclaimer-text">
          Cảnh báo rủi ro: Giao dịch và đầu tư vào các tùy chọn kỹ thuật số có mức độ rủi ro đáng kể và không phù hợp và / hoặc thích hợp cho tất cả khách hàng. Vui lòng đảm bảo rằng bạn cân nhắc cẩn thận các mục tiêu đầu tư, mức độ kinh nghiệm và khẩu vị rủi ro trước khi mua hoặc bán bất kỳ tài sản kỹ thuật số nào. Bạn nên nhận thức và hiểu đầy đủ tất cả các rủi ro liên quan đến giao dịch và đầu tư vào tài sản kỹ thuật số, bạn không nên đầu tư các khoản tiền mà bạn không thể để mất. Bạn được cấp các quyền hạn chế không độc quyền để sử dụng tài sản trí tuệ có trong trang web này cho mục đích sử dụng cá nhân, phi thương mại, không thể chuyển nhượng liên quan đến các dịch vụ được cung cấp trên trang web.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 