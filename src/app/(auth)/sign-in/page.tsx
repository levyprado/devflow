import AuthCard from '@/components/form/auth-card'
import SignInForm from '@/components/form/sign-in-form'

export default function SignInPage() {
  return (
    <AuthCard type='sign-in' title='Sign in'>
      <SignInForm />
    </AuthCard>
  )
}
