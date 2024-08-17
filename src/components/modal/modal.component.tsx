"use client";
import React, { type ElementRef, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { RxCross1 } from "react-icons/rx";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (dialogRef.current?.open) {
      document.body.classList.add("no-scroll");
    } else if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  function onDismiss() {
    document.body.classList.remove("no-scroll");
    router.back();
  }

  return createPortal(
    <div className="modal-backdrop">
      <dialog ref={dialogRef} className="modal" onClose={onDismiss}>
        <div className="modal__children">{children}</div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDismiss();
          }}
          className="close-button"
        >
          <RxCross1 className="icon" />
        </button>
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
}
