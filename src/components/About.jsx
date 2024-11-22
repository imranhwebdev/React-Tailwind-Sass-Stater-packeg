import { Container, Row, Col } from './Grid'
export default function About() {
  return (
    <div className='about'>
      <Container>
        <Row>
          <Col md={6}>
            <div className="about-content flex p-[200px]">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempora doloribus dolorum autem recusandae. Impedit maiores sed nostrum, incidunt odit quibusdam soluta sint vel, provident voluptas commodi? Qui alias, eaque in, a laboriosam inventore nesciunt ex nobis, possimus ducimus optio autem id ut quae? Ad laboriosam magnam ab quae delectus.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempora doloribus dolorum autem recusandae. Impedit maiores sed nostrum, incidunt odit quibusdam soluta sint vel, provident voluptas commodi? Qui alias, eaque in, a laboriosam inventore nesciunt ex nobis, possimus ducimus optio autem id ut quae? Ad laboriosam magnam ab quae delectus.</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="about-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempora doloribus dolorum autem recusandae. Impedit maiores sed nostrum, incidunt odit quibusdam soluta sint vel, provident voluptas commodi? Qui alias, eaque in, a laboriosam inventore nesciunt ex nobis, possimus ducimus optio autem id ut quae? Ad laboriosam magnam ab quae delectus.
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
