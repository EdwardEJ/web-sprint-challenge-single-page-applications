import * as yup from 'yup'

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Username must be at least 2 characters long.")
    .required("Username is Required")
})

export default formSchema