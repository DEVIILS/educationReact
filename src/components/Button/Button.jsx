import classes from './Button.module.css';

export function Button({ children, isActive, ...props }) {
    return (
        <button
            {...props}
            className={isActive ? `${classes.button} ${classes.active}` : classes.button}
        >
            {children}
        </button>
    );
}
