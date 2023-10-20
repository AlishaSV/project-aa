'use client';

import { LoginForm } from '@/components/loginForm';
import { useEffect } from 'react';
import { useUserContext } from '@/components/utils';
import { useRouter } from 'next/navigation';

const Login = () => {
  const { isUserLoggedIn } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (router && isUserLoggedIn) {
      router.back();
    }
  }, [router, isUserLoggedIn]);
  return <LoginForm />;
};

export default Login;
