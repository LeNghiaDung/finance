import React from 'react';
import { Container } from 'react-bootstrap';
import { FaExclamation, FaCircle, FaPlus } from 'react-icons/fa';

const StepsSection = () => {
  return (
    <section className="steps-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="steps-title">
            Bắt đầu với <span className="text-warning">FinanTex</span> chỉ sau 5 phút
          </h2>
        </div>
        
        {/* TETHER COIN */}
        <img src="/tether-coin.png" alt="Tether Coin" className="tether-coin float-animation" />
        
        <div className="steps-container">
          <div className="steps-row">
            {/* STEP 1 */}
            <div className="step-box">
              <div className="step-content">
                <div className="step-number">BƯỚC 1</div>
                <div className="step-icon-wrapper">
                  <div className="step-icon purple">
                    <FaExclamation className="text-white" />
                  </div>
                </div>
                <h4 className="step-title">Đăng ký FinanTex</h4>
                <p className="step-description">
                  Sử dụng địa chỉ email của bạn và tạo một tài khoản FinanTex miễn phí.
                </p>
              </div>
            </div>
            
            {/* Connector */}
            <div className="step-connector">
              <div className="connector-content">
                <span className="dot"></span>
                <span className="dashed-line"></span>
                <span className="dot"></span>
              </div>
            </div>
            
            {/* STEP 2 */}
            <div className="step-box">
              <div className="step-content">
                <div className="step-number">BƯỚC 2</div>
                <div className="step-icon-wrapper">
                  <div className="step-icon red">
                    <FaCircle className="text-white" />
                  </div>
                </div>
                <h4 className="step-title">Ký quỹ</h4>
                <p className="step-description">
                  Nạp bằng nhiều loại<br />tiền điện tử phổ biến.
                </p>
              </div>
            </div>
            
            {/* Connector */}
            <div className="step-connector">
              <div className="connector-content">
                <span className="dot"></span>
                <span className="dashed-line"></span>
                <span className="dot"></span>
              </div>
            </div>
            
            {/* STEP 3 */}
            <div className="step-box">
              <div className="step-content">
                <div className="step-number">BƯỚC 3</div>
                <div className="step-icon-wrapper">
                  <div className="step-icon green">
                    <FaPlus className="text-white" />
                  </div>
                </div>
                <h4 className="step-title">Bắt đầu giao dịch</h4>
                <p className="step-description">
                  Kiếm tiền từ việc dự đoán giá của tài sản.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StepsSection; 