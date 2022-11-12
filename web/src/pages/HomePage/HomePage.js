import { Form, TextField, Label, Submit, FieldError } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <>
        <ArticlesCell />
        <Form onSubmit={onSubmit}>
          <Label name="Activity" errorClassName="error">
            Activity
          </Label>
          <TextField
            name="Activity"
            errorClassName="error"
            validation={{ required: true }}
          />
          <FieldError name="Activity" className="error" />

          <Label name="State" errorClassName="error">
            State
          </Label>
          <TextField
            name="State"
            errorClassName="error"
            validation={{ required: true }}
          />
          <FieldError name="State" className="error" />

          <Label name="Acreage" errorClassName="error">
            Acreage
          </Label>
          <TextField
            name="Acreage"
            errorClassName="error"
            validation={{ required: true, pattern: { value: /^[1-9]\d*$/ } }}
          />
          <FieldError name="Acreage" className="error" />

          <Submit>generate price</Submit>
        </Form>
      </>
    </>
  )
}

export default HomePage
