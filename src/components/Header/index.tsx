import type { ReactNode } from 'react';
import styles from './styles.module.css';
import resumeData from '@site/static/quoc-phan-resume.json';

export default function Header(): ReactNode {
    const { basics } = resumeData;
    const firstName = basics.name.split(' ')[0];

    return (
        <section className={styles.header}>
            <div className={styles.watermark}>{basics.name}</div>
            <p className={styles.greeting}>Hi, I'm {basics.name}</p>
            <div className={styles.heroRow}>
                <img
                    src={require('@site/static/img/avatar.jpg').default}
                    alt={`${basics.name} portrait`}
                    className={styles.avatar}
                />
                <div className={styles.titleBlock}>
                    <h1 className={styles.titleSmall}>{basics.label}</h1>
                    <span className={styles.titleLarge}>
                        {basics.location.city}
                    </span>
                </div>
            </div>
            <p className={styles.summary}>{basics.summary}</p>
        </section>
    );
}