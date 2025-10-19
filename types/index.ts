import { ReactNode } from 'react';

/**
 * Form field validation error type
 */
export type ValidationError = string | null;

/**
 * Form field state
 */
export interface FormField {
  value: string;
  error: ValidationError;
  touched: boolean;
}

/**
 * Form state type
 */
export type FormState<T extends string> = Record<T, FormField>;

/**
 * Validator function type
 */
export type ValidatorFn = (value: string) => ValidationError;

/**
 * Form field configuration
 */
export interface FieldConfig {
  initialValue?: string;
  validators?: ValidatorFn[];
}

/**
 * Form configuration
 */
export type FormConfig<T extends string> = Record<T, FieldConfig>;

/**
 * Login form data
 */
export interface LoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

/**
 * Button variant types
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

/**
 * Button size types
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Input variant types
 */
export type InputVariant = 'default' | 'error';

/**
 * Component common props
 */
export interface ComponentProps {
  className?: string;
  children?: ReactNode;
}
