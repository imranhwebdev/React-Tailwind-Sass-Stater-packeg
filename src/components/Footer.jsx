import { Container, Row, Col } from './Grid'
export default function Footer() {
  return (
    <div className='footer'>
      <Container>
        <Row className='justify-center'>
          <Col xs={12} xl={9}>
            <div className="footer-content text-center">
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
