import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../styles/dashboard.css'
import useGetData from '../custom-hooks/useGetData'

const Dashboard = () => {
  const {data: products} = useGetData('products')
  const {data: users} = useGetData('users')

  return (
    <>
    <section>
      <Container>
        <Row>
          <Col className='lg-3'>
            <div className="revenue__box">
              <h5>Tổng Doanh Thu</h5>
              <span>$7890</span>
            </div>
          </Col>
          <Col className="lg-3">
          <div className="order__box">
              <h5>Đặt Hàng</h5>
              <span>789</span>
            </div>
          </Col>
          <Col className="lg-3">
          <div className="products__box">
              <h5>Tổng Sản Phẩm</h5>
              <span>{products.length}</span>
            </div>
          </Col>
          <Col className="lg-3">
          <div className="users__box">
              <h5>Tổng Người Dùng</h5>
              <span>{users.length}</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Dashboard