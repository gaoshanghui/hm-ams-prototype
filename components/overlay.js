import styles from './overlay.module.css';

const Overlay = (props) => {
  return <div className={styles.overlay}>{props.children}</div>;
};

export default Overlay;
