// import React, {useEffect} from 'react';
// import {createPortal} from 'react-dom'
// import Modal from "../UI/Modal/Modal";
//
// const PortalToModal = ({children}) => {
//     const modalRoot = document.getElementById("modal");
//     const element = document.createElement("div");
//
//     useEffect(() => {
//         modalRoot.appendChild(element);
//     }, []);
//     useEffect(() => {
//         return () => modalRoot.removeChild(element);
//     });
//
//     return createPortal(children, <Modal/>)
// };
//
// export default PortalToModal;