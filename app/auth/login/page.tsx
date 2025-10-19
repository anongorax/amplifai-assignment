import LoginIllustraion from '@/components/illustration/login-illustration';
import LoginForm from '@/components/auth/LoginForm';

export default function LoginPage() {


    return (
        <div className="min-h-screen w-full lg:grid lg:grid-cols-2">
            <LoginForm />
            <div className="hidden lg:flex relative flex-col items-start justify-center p-20 bg-[#1e3a5f] text-white overflow-hidden">
                <LoginIllustraion />
            </div>

        </div>
    );
};