"use client"
import { useState, useEffect } from "react"
import { FaTimes, FaEye, FaEyeSlash } from "react-icons/fa"

const LoginModal = ({ show, handleClose, handleShowSignup }) => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  // Ngăn cuộn trang khi modal hiển thị
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [show])

  return (
    <div className={`login-dialog ${show ? "show" : ""}`} role="dialog" aria-modal="true">
      <div className="login-dialog-content">
        <div className="login-dialog-header">
          <div className="login-dialog-logo">
            <img src="/finantex-logo.png" alt="FinanTex Logo" />
          </div>
          <button className="login-dialog-close" onClick={handleClose}>
            <FaTimes />
          </button>
        </div>

        <div className="login-dialog-body">
          <h2 className="login-dialog-title">Đăng nhập vào Tài khoản của bạn</h2>

          <form className="login-form">
            <div className="login-form-group">
              <label className="login-form-label">
                Địa chỉ Email <span className="required">*</span>
              </label>
              <input type="email" placeholder="Điền Email..." className="login-form-input login-form-input-special" />
            </div>

            <div className="login-form-group">
              <label className="login-form-label">
                Mật khẩu <span className="required">*</span>
              </label>
              <div className="login-password-toggle">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Điền mật khẩu..."
                  className="login-form-input"
                />
                <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <div className="login-forgot-password">
              <a href="#" className="login-forgot-link">
                Quên mật khẩu?
              </a>
            </div>

            <button type="submit" className="login-submit-btn">
              Đăng nhập
            </button>

            <div className="login-footer">
              <div className="login-register">
                <span>Cần tài khoản FinanTex? </span>
                <a
                  href="#"
                  className="login-register-link"
                  onClick={(e) => {
                    e.preventDefault()
                    handleShowSignup()
                  }}
                >
                  Đăng ký
                </a>
              </div>

              <div className="login-confirmation">
                <span>Không nhận được email xác nhận? </span>
                <a href="#" className="login-confirmation-link">
                  Yêu cầu một email mới.
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginModal

