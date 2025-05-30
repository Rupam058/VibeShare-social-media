import { MouseEvent, useEffect, useRef } from "react";

function Modal({
    open,
    children,
    onClose,
    className = "",
}: {
    open: boolean;
    children: React.ReactNode;
    onClose: () => void;
    className?: string;
}) {
    const modalRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        const modalElement = modalRef.current;
        if (modalElement != null) {
            if (open) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [open]);

    function onMouseDown(e: MouseEvent<HTMLDialogElement>) {
        if (e.target == modalRef.current) {
            onClose();
        }
    }

    return (
        <dialog
            ref={modalRef}
            onMouseDown={onMouseDown}
            style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >
            <div className={`p-8 rounded-md border max-w-md ${className}`}>
                {children}
            </div>
        </dialog>
    );
}
export default Modal;
