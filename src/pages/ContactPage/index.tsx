import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './index.styles'

type FormValues = {
  fullName: string
  email: string
  subject: string
  message: string
}

const schema = yup.object().shape({
  fullName: yup.string().min(3).required(),
  email: yup.string().email().required(),
  subject: yup.string().min(3).required(),
  message: yup.string().min(3).required(),
})


function ContactPage() {
  const { register, handleSubmit, formState: {errors} } = useForm<FormValues>({resolver: yupResolver(schema)})
  
  const test: SubmitHandler<FormValues> = (data) => console.log(data)

  return (
    <S.ContactForm onSubmit={handleSubmit(test)}>
      <div>
        <label htmlFor="fullName">full Name</label>
        <input {...register('fullName')} />
        <p>{errors.fullName?.message}</p>
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input {...register('email')} />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label htmlFor="subject">subject</label>
        <input {...register('subject')} />
        <p>{errors.subject?.message}</p>
      </div>
      <div>
        <label htmlFor="message">message</label>
        <input {...register('message')} />
        <p>{errors.message?.message}</p>
      </div>
      <input type="submit" />
    </S.ContactForm>
  )
}

export default ContactPage
