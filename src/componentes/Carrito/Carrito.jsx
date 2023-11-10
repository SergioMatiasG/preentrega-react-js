import { useCart } from '../Context/CartProvider'
import style from './Carrito.module.css'
import ItemCarrito from '../Items/itemCarrito'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { db } from '../../Firebase/Client'
import { collection, addDoc } from 'firebase/firestore'


const Carrito = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { cart, removeProductFromCart, updateQuantityInCart, clearCart } = useCart()
  const [ordenId, SetOrdenId] = useState()
  const [buyer, setBuyer] = useState({
    name: '',
    phone: '',
    email: ''
  });


  const precioTotalCompra = cart.reduce((total, producto) => {
    return total + (producto.product.price * producto.quantity)
  }, 0)

  const order =
  {
    comprador: buyer,
    productos: cart.map(producto => ({
      title: producto.product.title,
      price: producto.product.price,
      quantity: producto.quantity
    })),
    total: precioTotalCompra
  }
  const crearOrdenDeCompra = () => {
    const refOrder = collection(db, "orders")
    addDoc(refOrder, order)
      .then(({ id }) => (
        alert(`Gracias por su compra su ID de la compra es: ${id}`),
        SetOrdenId(id)
      ))
    clearCart()
  }
  const handleInputChange = (e, atri) => {
    setBuyer({
      ...buyer,
      [atri]: e.target.value
    })
  }

  return (
    <>
      <div className={style.centrado}>
        <h2 className={style.titulo}> Carrito de compras </h2>
      </div>
      <div>
        {cart.map((p, index) => (<ItemCarrito key={index} producto={p} borrarProductoCarrito={removeProductFromCart} cantidad={updateQuantityInCart} />))}
        <div className={style.preciototal}>
          <p>Precio total de la compra : $ {precioTotalCompra}</p>
        </div>
      </div>
      <div className={style.ordencompra}>
        {ordenId && (
          <Link to={`/ordenes/${ordenId}`}>
            <Button className={style.botonnext} >Ver orden</Button>
          </Link>)

        }

        <div>
          <Button className={style.botonnext} onPress={onOpen} color="primary">Crear Orden</Button>
          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="top-center"
          >
            <ModalContent className="bg-black">
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">Crear Orden</ModalHeader>
                  <ModalBody>
                    <Input
                      autoFocus
                      label="Nombre"
                      placeholder="Ingrese su nombre"
                      type='text'
                      variant="bordered"
                      value={buyer.name}
                      onChange={(e) => handleInputChange(e, 'name')}
                    />
                    <Input
                      label="Email"
                      placeholder="Ingrese su email"
                      type="email"
                      variant="bordered"
                      value={buyer.email}
                      onChange={(e) => handleInputChange(e, 'email')}
                    />
                    <Input
                      label="phone"
                      placeholder="Ingrese su numero"
                      type="tel"
                      variant="bordered"
                      value={buyer.phone}
                      onChange={(e) => handleInputChange(e, 'phone')}
                    />
                  </ModalBody>
                  <ModalFooter className='gap-20'>
                    <Button className={style.botonmodalcerrar} variant="flat" onPress={onClose}>
                      Cancelar
                    </Button>
                    <Button className={style.botonnext} onClick={crearOrdenDeCompra} onPress={onClose}>
                      Crear orden
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </div>
    </>
  )
}
export default Carrito