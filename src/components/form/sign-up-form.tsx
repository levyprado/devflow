'use client'

import { SignUpSchema } from '@/lib/validations'
import { Loading03Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useForm } from '@tanstack/react-form'
import Button from '../ui/button'
import Input from '../ui/input'
import FieldError from './field-error'

export default function SignUpForm() {
  const form = useForm({
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validators: {
      onSubmit: SignUpSchema,
    },
    onSubmit: async ({ value }) => {
      await new Promise((resolve) => {
        setTimeout(resolve, 2000)
      })
      console.log(value)
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
      className='flex flex-col gap-4'
    >
      <form.Field
        name='name'
        children={(field) => (
          <div className='flex flex-col gap-1'>
            <label htmlFor={field.name}>Name</label>
            <Input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              type='text'
            />
            <FieldError field={field} />
          </div>
        )}
      />
      <form.Field
        name='username'
        children={(field) => (
          <div className='flex flex-col gap-1'>
            <label htmlFor={field.name}>Username</label>
            <Input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              type='text'
            />
            <FieldError field={field} />
          </div>
        )}
      />
      <form.Field
        name='email'
        children={(field) => (
          <div className='flex flex-col gap-1'>
            <label htmlFor={field.name}>Email</label>
            <Input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              type='email'
            />
            <FieldError field={field} />
          </div>
        )}
      />
      <form.Field
        name='password'
        children={(field) => (
          <div className='flex flex-col gap-1'>
            <label htmlFor={field.name}>Password</label>
            <Input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              type='password'
            />
            <FieldError field={field} />
          </div>
        )}
      />
      <form.Field
        name='confirmPassword'
        children={(field) => (
          <div className='flex flex-col gap-1'>
            <label htmlFor={field.name}>Confirm password</label>
            <Input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              type='password'
            />
            <FieldError field={field} />
          </div>
        )}
      />
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <Button type='submit' disabled={!canSubmit}>
            {isSubmitting ? (
              <>
                <HugeiconsIcon
                  icon={Loading03Icon}
                  size={24}
                  strokeWidth={2}
                  className='animate-spin'
                />
                Signing up...
              </>
            ) : (
              'Sign Up'
            )}
          </Button>
        )}
      />
    </form>
  )
}
