import { type ReactNode } from 'react';
import * as React from 'react';
import styles from './button.module';

interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
}

export const Button = ({ children = 'hello', onClick }: ButtonProps) => (
  <button 
    className={styles.btn}
    onClick={onClick}
  >
    {children}
  </button>
);