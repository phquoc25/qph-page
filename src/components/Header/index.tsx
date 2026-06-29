import type { ReactNode } from 'react';
import styles from './styles.module.css';

export default function Header(): ReactNode {
    return (
        <section
            className={styles.header}
        >
            My header
        </section>
    );
}