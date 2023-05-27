import { SubmitHandler, useForm } from 'react-hook-form'

type FormValues = {
  fullName: string
  email: string
  subject: string
  message: string
}

function ContactPage() {
  const { register, handleSubmit } = useForm<FormValues>()

  const test: SubmitHandler<FormValues> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(test)}>
      <div>
        <label htmlFor="fullName">full Name</label>
        <input {...register('fullName')} />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input {...register('email')} />
      </div>
      <div>
        <label htmlFor="subject">subject</label>
        <input {...register('subject')} />
      </div>
      <div>
        <label htmlFor="message">message</label>
        <input {...register('message')} />
      </div>
      <input type="submit" />
    </form>
  )
}

export default ContactPage
