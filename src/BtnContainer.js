import React from 'react';
import styles from './BtnContainer.module.css';
import { useState } from 'react' 

export default function BtnContainer({ buttons, OnChange }) {
    const [ActiveBtn, setActiveBtn] = useState(buttons[0].id);

    function onClick(btn) {
        OnChange(btn)
        setActiveBtn(btn.id);
    }

    return <div className={styles.container}>
        {buttons.map((btn, btnKey) => {
            return <div 
                        key={btnKey}
                        onClick={() => onClick(btn)}
                        className={styles.btn + " " + (ActiveBtn === btn.id ? styles.active : "")}>
                {btn.value}
            </div>
        })}
    </div>;
}