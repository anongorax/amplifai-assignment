'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useForm } from '@/hooks/useForm';
import { validators } from '@/lib/utils';
import { useState } from 'react';
export default function LoginForm() {
    const router = useRouter();
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const {
        isSubmitting,
        handleSubmit,
        getFieldProps,
        setFieldError,
    } = useForm<'email' | 'password'>({
        email: {
            initialValue: '',
            validators: [validators.email],
        },
        password: {
            initialValue: '',
            validators: [validators.password],
        },
    });

    const onSubmit = async (values: Record<'email' | 'password', string>) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));

            const mockSuccess = true;
            if (mockSuccess) {
                router.push('/dashboard');
            } else {
                setFieldError('email', 'Invalid email or password');
            }
        } catch (error) {
            console.error('Login error:', error);
            setFieldError('email', 'An error occurred. Please try again.');
        }
    };

    return (

        <div className="flex items-center justify-center p-8 bg-white">
            <div className="w-full max-w-md">
                {/* Logo or Brand */}
                <div className="text-center mb-8 lg:text-left flex items-center">
                    {/* Assuming /flowstate.svg is the logo with text */}
                    <Image src="/flowstate.svg" alt="FlowState Logo" width={48} height={48} />
                    <h1 className="text-4xl font-bold text-blue-400 ml-2">FlowState</h1>
                </div>

                <div className='mb-4'>
                    <h3 className='text-xl font-semibold text-black'>Login</h3>
                    <p className='text-gray-600'>Enter your email below to login to your account.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Email Field */}
                    <Input
                        {...getFieldProps('email')}
                        type="email"
                        label="Business Email Address"
                        placeholder="username@domain.com"
                        autoComplete="email"
                        required
                        disabled={isSubmitting}
                    />

                    {/* Password Field */}
                    <div className="relative mt-2">
                        <Input
                            {...getFieldProps('password')}
                            type={showPassword ? 'text' : 'password'}
                            label="Password"
                            placeholder="Enter password"
                            autoComplete="current-password"
                            required
                            disabled={isSubmitting}
                        />
                        {/* Simple toggle icon - you can replace this with your SVGs */}
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-9 text-gray-500 hover:text-gray-700 focus:outline-none"
                            tabIndex={-1}
                        >
                            {showPassword ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242" /></svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            )}
                        </button>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-end my-2">
                        <Link
                            href="/auth/forgot-password"
                            className="text-sm text-blue-400 hover:text-blue-600 font-medium underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        isLoading={isSubmitting}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Logging in...' : 'Login'}
                    </Button>

                    {/* Sign Up Link */}
                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-600">
                            Don&apos;t have an account?{' '}
                            <Link
                                href="/"
                                className="text-blue-600 hover:text-blue-700 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
