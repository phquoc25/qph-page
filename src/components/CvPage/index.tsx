import type { ReactNode } from 'react';
import styles from './styles.module.css';
import Header from '../Header';
import Divider from '../Divider';
import WorkExperience from '../WorkExperience';
import TechnicalSkills from '../TechnicalSkills';
import Education from '../Education';

export default function CvPage(): ReactNode {
    return (
        <div
            className={styles.cvContainer}
        >
            <Header />
            <Divider />
            <WorkExperience />
            <Divider />
            <TechnicalSkills />
            <Divider />
            <Education />
        </div>
    );
}