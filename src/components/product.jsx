import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap';
import { useState } from 'react';

function Product() {
    const [data,setData] =useState([{
        id:"1",
        name:"Samsung mobile",
        img:"https://thumbs.dreamstime.com/b/samsung-galaxy-s-plus-mobile-phone-taipei-taiwan-march-studio-shot-new-cellphone-reflective-white-surface-141609046.jpg",
        price:"17000",
        addcart:false
    },
    {
        id:"2",
        name:"Google pixel",
        img:"https://m.media-amazon.com/images/I/51ZPXPyp0AL.jpg",
        price:"45000",
        addcart:false
    },
    {
        id:"3",
        name:"Vivo mobiles",
        img:"https://www.businessinsider.in/photo/73191839/best-vivo-smartphones-under-20000-in-india.jpg?imgsize=200540",
        price:"17499",
        addcart:false
    },
    {
        id:"4",
        name:"Redmi mobiles",
        img:"https://media.istockphoto.com/id/1313476612/photo/xiaomi-launch-new-smartphone-redmi-note-10-pro.jpg?s=612x612&w=0&k=20&c=E1TNdRB3FOhqiLrOJplWwOuUk8wUavicdaQ2q68GvWo=",
        price:"20000",
        addcart:false
    },
    {
        id:"5",
        name:"Apple mobiles",
        img:"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-red.jpg",
        price:"55000",
        addcart:false
        },
    {
        id:"6",
        name:"Oppo mobiles",
        img:"https://image.oppo.com/content/dam/oppo/in/mkt/phonelist/products/find-x2-blue.png",
        price:"23000",
        addcart:false
    },
    {
        id:"7",
        name:"Poco mobiles",
        img:"https://cdn1.smartprix.com/rx-iSSevt1SF-w1200-h1200/SSevt1SF.jpg",
        price:"21000",
        addcart:false
    },
    {
        id:"8",
        name:"Oneplus mobiles",
        img:"https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-8-polar-silver.jpg",
        price:"38000",
        addcart:false
    }
]);
    const [count,setCount]=useState(0);
    const status = (Data,index)=>{
        console.log(data);

        let temp =[...data];
        temp[index].addcart=!temp[index].addcart;
        console.log(temp[index].addcart);
        if(temp[index].addcart===true && temp[index].addcart!==false){
            setCount(count+1);
            console.log(count+1);
        }else if(temp[index].addcart===false){
            setCount(count-1);          
            console.log(count-1);
        }
        setData(temp);        
    }
    
  return (
    data.map((data,index)=>{
        return (
            <Row style={{margin:'20px 40px 20px 40px'}}>
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