import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap';

function Product({data,status}) {
    
  return (
    data.map((data,index)=>{
        return (
            <Row style={{margin:'20px 40px 20px 40px'}} key={index}>
                <Col>
                    <Card style={{ width: '250px',height:'400px',backgroundColor:'black',color:'white',border:'none',borderRadius:'10px' }}>
                        <Card.Img variant="top" src={data.img} style={{width:'250px',height:'260px',objectFit:'cover'}} />
                        <Card.Body>
                            <Card.Title>{data.name}</Card.Title>
                            <Card.Text>
                             Rs {data.price}
                            </Card.Text>
                            <Button variant="primary" onClick={()=>{status(data,index)}}>{data.addcart ?"Remove from cart":"Add to cart"}</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        )
    })
  );
}



export default Product;