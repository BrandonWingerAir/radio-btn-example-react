import React from 'react';
import styles from './BtnContainer.module.css';

let buttons = [
    {id: 1, value: '💻' },
    {id: 2, value: '🏂' },
    {id: 3, value: '🎸' },
    {id: 4, value: '🎮' },
]

export default function BtnContainer(props) {
    return <div className={styles.container}>
        {buttons.map(btn => {
            return <div className={styles.btn}>{btn.value}</div>
        })}
    </div>;
}