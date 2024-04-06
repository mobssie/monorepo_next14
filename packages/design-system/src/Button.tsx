import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium' | 'large'
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-block;
  border: none;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  background-color: ${(props) =>
    props.variant === 'primary'
      ? '#007bff'
      : props.variant === 'secondary'
      ? '#6c757d'
      : '#dc3545'};
  color: white;
  padding: ${(props) =>
    props.size === 'small' ? '8px 12px' : props.size === 'medium' ? '10px 16px' : '12px 20px'};
  font-size: ${(props) =>
    props.size === 'small' ? '12px' : props.size === 'medium' ? '14px' : '16px'};
  border-radius: ${(props) =>
    props.size === 'small' ? '3px' : props.size === 'medium' ? '5px' : '7px'};
`

const Button: React.FC<ButtonProps> = ({ children, variant, size }) => {
  return (
    <StyledButton variant={variant} size={size}>
      {children}
    </StyledButton>
  )
}

export default Button
