import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

  class Login extends Component{
      constructor(props) {
          super(props);

          this.state={
              show : false

          }
      }

   /* const [show, setShow] = useState(false);*/

    handleClose = () => {
        this.setState({show : false})
    }
    handleShow = () =>{
        this.setState({show : true})
    }


      /*shouldComponentUpdate(nextProps, nextState, nextContext) {
          const { callChildReset } = this.props;
          if (callChildReset > 0) {
              this.handleShow();
          }
      }*/






  /* componentDidUpdate(prevProps, prevState, snapshot) {
       const data = this.props.data;
       if (data==1) {
           this.handleShow()
       }

   }*/


      render() {
        return(
            <>


                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        I will not close if you click outside me. Don't even try to press
                        escape key.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary"
                                onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary">Understood</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

}
export default (Login)
