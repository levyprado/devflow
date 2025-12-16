import { AnyFieldApi } from '@tanstack/react-form'

export default function FieldError({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.isTouched && !field.state.meta.isValid ? (
        <span className='text-xs text-red-600 sm:text-sm'>
          {field.state.meta.errors[0].message}
        </span>
      ) : null}
      {field.state.meta.isValidating ? 'Validating...' : null}
    </>
  )
}
