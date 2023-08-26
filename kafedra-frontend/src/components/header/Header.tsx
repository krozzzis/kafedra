import styles from './Header.module.css';
import '../Button.css';

import Logo from "~/components/logo/Logo";
import { Button } from "@kobalte/core";

export default function Header () {
    return (
        <header class={styles.header}>
            <Logo />
            <nav class={styles.nav}>
                <ul class={styles.nav__list}>
                    <li class={styles.nav__item}><Button.Root class="button">Home</Button.Root></li>
                    <li class={styles.nav__item}><Button.Root class="button button_primary">Profile</Button.Root></li>
                </ul>
            </nav>
        </header>
    )
}
