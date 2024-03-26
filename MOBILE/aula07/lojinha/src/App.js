import React, { useState } from 'react';
import { Navbar, Nav, Container, Card, Button, Badge, Modal, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductCard({ name, description, price, image, addToCart }) {
  return (
    <div className="col-md-4">
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description} - R$ {price}
          </Card.Text>
          <Button variant="primary" onClick={() => addToCart({ name, price })}>
            Adicionar ao Carrinho
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}


function Cart({ cartItems, removeFromCart, show, handleClose, finalizePurchase }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Carrinho de Compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          {cartItems.map((item, index) => (
            <ListGroup.Item key={index}>
              {item.name} - R$ {item.price}
              <Button variant="danger" size="sm" onClick={() => removeFromCart(index)} className="ms-2">
                Remover
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <p className="mt-3">Total: R$ {totalPrice}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
        <Button variant="primary" onClick={finalizePurchase}>
          Finalizar Compra
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = ({ name, price }) => {
    setCartItems([...cartItems, { name, price }]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  const finalizePurchase = () => {
    setCartItems([]);
    alert('Compra finalizada com sucesso!');
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Monster High Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#produtos">Produtos</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
          </Nav>
          <Button variant="primary" onClick={handleShow}>
            <i className="bi bi-cart"></i> <Badge bg="danger">{cartItems.length}</Badge>
          </Button>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <h1 className="text-center mb-4">Produtos em Destaque</h1>
  <     div className="row">
          <ProductCard name="Frankie Stein" description="Boneca Frankie Stein" price={39.99} image="./assets/bootAbbey.jpg" addToCart={addToCart} />
          <ProductCard name="Draculaura" description="Boneca Draculaura" price={34.99} image="/assets/draculaura.jpg" addToCart={addToCart} />
          <ProductCard name="Clawdeen Wolf" description="Boneca Clawdeen Wolf" price={29.99} image="/assets/clawdeen_wolf.jpg" addToCart={addToCart} />
        </div>
      </Container>


      <footer className="bg-dark text-white text-center py-4 mt-5">
        &copy; 2024 Monster High Store. Todos os direitos reservados.
      </footer>

      <Cart cartItems={cartItems} removeFromCart={removeFromCart} show={showCart} handleClose={handleClose} finalizePurchase={finalizePurchase} />
    </div>
  );
}

export default App;
