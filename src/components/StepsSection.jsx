import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const StepsSection = () => {
  return (
    <section className="steps-section py-5" style={{ backgroundColor: '#000000' }}>
      <Container className="position-relative">
        {/* Tether coin image */}
        <div className="tether-coin-container">
          <img src="/tether-coin.png" alt="Tether Coin" className="tether-coin-steps" />
        </div>
        
        <div className="text-center mb-5 pt-4">
          <h2>
            <span className="text-white">Bắt đầu với </span>
            <span className="text-warning">FinanTex</span>
            <span className="text-white"> chỉ sau 5 phút</span>
          </h2>
        </div>
        
        <div className="d-flex justify-content-center align-items-center mb-5 steps-icons-container">
          <div className="text-center mx-4">
            <div className="icon-box">
              <img src="/icons-5.svg" alt="Đăng ký" width="80" height="80" />
            </div>
          </div>
          
          <div className="connector-line">
            <svg width="120" height="10" xmlns="http://www.w3.org/2000/svg">
              <line x1="5" y1="5" x2="115" y2="5" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
              <circle cx="5" cy="5" r="4" fill="white" />
              <circle cx="115" cy="5" r="4" fill="white" />
            </svg>
          </div>
          
          <div className="text-center mx-4">
            <div className="icon-box">
              <img src="/icons-6.svg" alt="Ký quỹ" width="80" height="80" />
            </div>
          </div>
          
          <div className="connector-line">
            <svg width="120" height="10" xmlns="http://www.w3.org/2000/svg">
              <line x1="5" y1="5" x2="115" y2="5" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
              <circle cx="5" cy="5" r="4" fill="white" />
              <circle cx="115" cy="5" r="4" fill="white" />
            </svg>
          </div>
          
          <div className="text-center mx-4">
            <div className="icon-box">
              <img src="/icons-7.svg" alt="Giao dịch" width="80" height="80" />
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center steps-text-container">
          <div className="col-md-3 col-4 text-center mb-4">
            <p className="text-muted small mb-2">Bước 1</p>
            <h4 className="text-white">Đăng ký FinanTex</h4>
            <p className="text-muted small">Sử dụng địa chỉ email của bạn và tạo một tài khoản FinanTex miễn phí.</p>
          </div>
          
          <div className="col-md-3 col-4 text-center mb-4">
            <p className="text-muted small mb-2">Bước 2</p>
            <h4 className="text-white">Ký quỹ</h4>
            <p className="text-muted small">Nạp bằng nhiều loại tiền điện tử phổ biến.</p>
          </div>
          
          <div className="col-md-3 col-4 text-center mb-4">
            <p className="text-muted small mb-2">Bước 3</p>
            <h4 className="text-white">Bắt đầu giao dịch</h4>
            <p className="text-muted small">Kiếm tiền từ việc dự đoán giá của tài sản.</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StepsSection; 