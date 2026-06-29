import type { ReactNode } from 'react';
import styles from './styles.module.css';
import resumeData from '@site/static/quoc-phan-resume.json';

function Avatar({ name }: { name: string }): ReactNode {
    return (
        <img
            src={require('@site/static/img/avatar.jpg').default}
            alt={`${name} portrait`}
            className={styles.avatar}
        />
    );
}

function Contact({ email, phone, location }: { email: string; phone: string; location: string }): ReactNode {
    return (
        <div className={styles.contact}>
            <span>{location}</span>
            <span> • </span>
            <a href={`mailto:${email}`}>{email}</a>
            <span> • </span>
            <a href={`tel:${phone}`}>{phone}</a>
        </div>
    );
}

export default function Header(): ReactNode {
    const { basics } = resumeData;

    return (
        <section className={styles.header}>
            <div className={styles.watermark}>{basics.name}</div>
            <p className={styles.greeting}>Hi, I'm {basics.name}</p>
            <div className={styles.heroRow}>
                <Avatar name={basics.name} />
                <div className={styles.titleBlock}>
                    <h1 className={styles.titleSmall}>{basics.label}</h1>
                </div>
            </div>
            <p className={styles.summary}>{basics.summary}</p>
            <Contact email={basics.email} phone={basics.phone} location={basics.location.city} />
        </section>
    );
}