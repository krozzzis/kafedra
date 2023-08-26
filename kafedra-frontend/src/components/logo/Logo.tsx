import styles from './Logo.module.css';

export default function Logo () {
    return (
        <a href="/" class={styles.logo}>
            <img src="/logo.svg" class={styles.logo_img} alt="logo" fetchPriority="high"/>
        </a>
    )
}
