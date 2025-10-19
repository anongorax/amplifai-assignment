import React, { InputHTMLAttributes, forwardRef } from 'react';
import { InputVariant } from '@/types';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: InputVariant;
    error?: string | null;
    label?: string;
    helperText?: string;
}

const variantStyles: Record<InputVariant, string> = {
    default: 'border-gray-300 focus:border-blue-500 focus:ring-blue-500',
    error: 'border-red-500 focus:border-red-500 focus:ring-red-500',
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            variant = 'default',
            error,
            label,
            helperText,
            className,
            id,
            ...props
        },
        ref
    ) => {
        const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
        const hasError = !!error;

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-sm font-bold text-gray-700 mb-1.5"
                    >
                        {label}
                    </label>
                )}

                <input
                    ref={ref}
                    id={inputId}
                    className={cn(
                        'block w-full rounded-lg border px-3 py-2 text-gray-900 placeholder-gray-400',
                        'focus:outline-none focus:ring-2 focus:ring-offset-0',
                        'disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed',
                        'transition-colors duration-200',
                        hasError ? variantStyles.error : variantStyles.default,
                        className
                    )}
                    aria-invalid={hasError}
                    aria-describedby={
                        error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
                    }
                    {...props}
                />

                {error && (
                    <p
                        id={`${inputId}-error`}
                        className="mt-1.5 text-sm text-red-600 flex items-center gap-1"
                    >
                        <svg
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        {error}
                    </p>
                )}

                {helperText && !error && (
                    <p id={`${inputId}-helper`} className="mt-1.5 text-sm text-gray-500">
                        {helperText}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';
