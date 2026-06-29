import type { ReactNode } from 'react';
import styles from './styles.module.css';

export default function Divider(): ReactNode {
    return (
        <div
            className={styles.divider}
        >
            ~~~~~~
        </div>
    );
}