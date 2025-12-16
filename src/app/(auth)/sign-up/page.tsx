import AuthCard from '@/components/form/auth-card'
import SignUpForm from '@/components/form/sign-up-form'

export default function SignUpPage() {
  return (
    <AuthCard type='sign-up' title='Create your account'>
      <SignUpForm />
    </AuthCard>
  )
}
