import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { useState } from "react";

function NonMemberMessage() {
    const [show, setShow] = useState(true);
    return (
        <div>
            <ToastContainer className="p-3" position="bottom-end">
                <Toast
                    class="Toast"
                    onClose={() => setShow(false)}
                    show={show}
                    delay={30000}
                    autohide
                >
                    <Toast.Header closeButton={true}>
                        <strong className="me-auto">AEA</strong>
                        <small>Notification</small>
                    </Toast.Header>
                    <Toast.Body color='black'>
                        This form is dedicated for working members of AEA. If you want to be
                        part of AEA, click on Join US
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
}

export default NonMemberMessage;