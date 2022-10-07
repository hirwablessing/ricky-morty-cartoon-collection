import React from 'react'
import { KEYBOARD_OPTS, useKeyboardKeyProps } from '../types';

export const useKeyboardKey = ({ callback, keyMatch }: useKeyboardKeyProps) => {
    React.useEffect(() => {
        const eventListener = (event: KeyboardEvent) => {
            let isRecognizedKey = false;
            if ("key" in event) {
                isRecognizedKey =
                    event.key === keyMatch.key || event.key === keyMatch.keyName;
            } else {
                isRecognizedKey = event.keyCode === keyMatch.keyCode;
            }

            if (isRecognizedKey) {
                callback();
            }
        };

        document.addEventListener("keydown", eventListener);
        return () => {
            document.removeEventListener("keydown", eventListener);
        };
    });
};

export const useClickHandler = (elementRef: any, callback: Function,) => {
    React.useEffect(() => {
        const eventListener = (event: MouseEvent) => {
            if (!elementRef.current?.contains(event.target)) {
                callback();
            }
        };

        document.addEventListener("click", eventListener);
        return () => {
            document.removeEventListener("click", eventListener);
        };
    });
}

export const BACKSPACE_KEY: KEYBOARD_OPTS = {
    key: "Backspace",
    keyName: "Backspace",
    keyCode: 8,
}

export const ESCAPE_KEY: KEYBOARD_OPTS = {
    key: "Escape",
    keyName: "Esc",
    keyCode: 27,
};