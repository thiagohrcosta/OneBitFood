import Modal from 'react-bootstrap/Modal';

export default function AddressModal(props) {

 return (
   <Modal
     show={props.show}
     size="sm"
     aria-labelledby="contained-modal-title-vcenter"
     centered
     backdrop="static"
     keyboard={false}
   >
     <Modal.Header>
       <h5 className='fw-bold mt-2'>Endereço de entrega</h5>
     </Modal.Header>
     <Modal.Body>
      Hello
     </Modal.Body>
   </Modal>
  )
}