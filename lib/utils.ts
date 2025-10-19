import { clsx, type ClassValue } from 'clsx';

/**
 * Utility function to merge class names
 * Combines multiple class names and handles conditionals
 */
export function cn(...inputs: ClassValue[]): string {
    return clsx(inputs);
}

/**
 * Email validation regex
 */
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validation utilities
 */
export const validators = {
    email: (value: string): string | null => {
        if (!value) return 'Email is required';
        if (!EMAIL_REGEX.test(value)) return 'Please enter a valid email';
        return null;
    },

    password: (value: string): string | null => {
        if (!value) return 'Password is required';
        if (value.length < 8) return 'Password must be at least 8 characters';
        return null;
    },

    required: (value: string, fieldName: string = 'This field'): string | null => {
        if (!value || value.trim() === '') return `${fieldName} is required`;
        return null;
    },
};
