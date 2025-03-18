import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FaqSection = () => {
  // State để lưu trạng thái mở/đóng của các câu hỏi
  const [openFaq, setOpenFaq] = useState(0);

  // Danh sách các câu hỏi và câu trả lời
  const faqItems = [
    {
      question: 'FinanTex là gì?',
      answer: 'FinanTex là sàn giao dịch tùy chọn (BO) ra mắt năm 2025 với đội ngũ điều hành giàu kinh nghiệm, được thừa hưởng những công nghệ và ưu điểm của những sàn sản có trên thị trường cũng như cập nhật những công nghệ và tính năng mới giúp cho hệ thống giao dịch hoạt động một cách trơn chu nhất.'
    },
    {
      question: 'FinanTex có lừa đảo không?',
      answer: 'FinanTex là sàn giao dịch uy tín, được cấp phép bởi các cơ quan quản lý tài chính quốc tế. Chúng tôi cam kết tính minh bạch trong mọi giao dịch, bảo vệ tối đa quyền lợi của nhà giao dịch và tuân thủ nghiêm ngặt các quy định pháp luật hiện hành.'
    },
    {
      question: 'Tài khoản vip của FinanTex dùng để làm gì?',
      answer: 'Tài khoản VIP của FinanTex cung cấp nhiều đặc quyền cao cấp như phí giao dịch ưu đãi, hỗ trợ khách hàng ưu tiên 24/7, công cụ phân tích thị trường chuyên sâu, đào tạo riêng biệt và các sự kiện đặc biệt dành riêng cho hội viên VIP. Đây là giải pháp tối ưu cho các nhà giao dịch chuyên nghiệp.'
    },
    {
      question: 'Tài khoản demo dùng để làm gì?',
      answer: 'Tài khoản demo giúp người dùng làm quen với nền tảng giao dịch FinanTex mà không cần rủi ro vốn thật. Bạn có thể thực hành chiến lược giao dịch, khám phá các tính năng của nền tảng và tìm hiểu cách thức hoạt động của thị trường tài chính trong môi trường mô phỏng thực tế.'
    },
    {
      question: 'Có mấy cách kiếm tiền trên FinanTex?',
      answer: 'FinanTex cung cấp nhiều cách để kiếm tiền, bao gồm: giao dịch tùy chọn nhị phân, giao dịch tiền điện tử, chương trình tiếp thị liên kết, nhận thưởng khi giới thiệu bạn bè, và các chương trình khuyến mãi định kỳ. Mỗi cách đều có tiềm năng lợi nhuận riêng tùy thuộc vào kỹ năng và chiến lược của người dùng.'
    }
  ];

  // Toggle mở/đóng câu hỏi
  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null); // Đóng câu hỏi nếu đang mở
    } else {
      setOpenFaq(index); // Mở câu hỏi được chọn
    }
  };

  return (
    <section className="faq-section py-5" style={{ backgroundColor: '#000000' }}>
      <Container>
        <div className="text-center mb-5">
          <p className="text-warning mb-2">FAQS</p>
          <h2 className="section-title">Câu hỏi thường gặp</h2>
        </div>

        <div className="faq-container">
          {faqItems.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openFaq === index ? 'open' : ''}`}
            >
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <span>{faq.question}</span>
                <button className="faq-toggle" onClick={(e) => {
                  e.stopPropagation();
                  toggleFaq(index);
                }}>
                  {openFaq === index ? (
                    <span>&#x2715;</span> // Dấu X
                  ) : (
                    <span>&#x2b;</span> // Dấu cộng
                  )}
                </button>
              </div>
              <div className={`faq-answer ${openFaq === index ? 'show' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FaqSection; 