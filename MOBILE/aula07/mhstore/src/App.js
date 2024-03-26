import React, { useState } from 'react';
import { Container, Navbar, Nav, Modal, Button, Card, CardDeck } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showCartModal, setShowCartModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const handleCheckout = () => {
    // Implementar a lógica para finalizar a compra aqui
    console.log("Compra finalizada!");
    setCartItems([]);
    setShowCartModal(false);
  };

  const totalCartItems = cartItems.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Monster High Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Produtos</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={() => setShowCartModal(true)}>Carrinho</Nav.Link>
              <Nav.Link onClick={() => setShowContactModal(true)}>Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <h2>Produtos</h2>
        <CardDeck>
          {products.map((product, index) => (
            <Card key={index} style={{ width: '18rem' }} className="mb-4">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Preço: R${product.price.toFixed(2)}</Card.Text>
                <Button variant="primary" onClick={() => handleAddToCart(product)}>Adicionar ao Carrinho</Button>
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
      </Container>

      <Modal show={showCartModal} onHide={() => setShowCartModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Carrinho de Compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.map((item, index) => (
            <div key={index}>
              <p>{item.name} - R${item.price.toFixed(2)}</p>
              <Button variant="danger" onClick={() => handleRemoveFromCart(index)}>Excluir Item do Carrinho</Button>
            </div>
          ))}
          <p>Total: R${totalCartItems.toFixed(2)}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCartModal(false)}>Cancelar</Button>
          <Button variant="primary" onClick={handleCheckout}>Finalizar Compra</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showContactModal} onHide={() => setShowContactModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Contato</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Entre em contato conosco através do e-mail: contato@monsterhighstore.com</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

const products = [
  {
    name: 'Monster High Doll',
    description: 'Boneca Monster High',
    price: 29.99,
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Monster High Backpack',
    description: 'Mochila Monster High',
    price: 19.99,
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Monster High T-shirt',
    description: 'Camiseta Monster High',
    price: 9.99,
    image: 'https://via.placeholder.com/150',
  },
];

export default App;
