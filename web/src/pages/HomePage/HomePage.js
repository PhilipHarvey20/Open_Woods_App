import React, { useState } from 'react'

import Select from 'react-select'
import { stateOptions } from 'web/src/AmericanStates'

import {
  Form,
  TextField,
  NumberField,
  Label,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const CREATE_GENERATE_PRICE = gql`
  mutation createGeneratePriceMutation($input: CreateGeneratePriceInput!) {
    createGeneratePrice(input: $input) {
      id
    }
  }
`

const HomePage = () => {
  const [create] = useMutation(CREATE_GENERATE_PRICE)
  const onSubmit = (data) => {
    console.log(data)
    create({
      variables: {
        input: data,
      },
    })
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
          <Select name="color" options={stateOptions} />

          <Label name="Acreage" errorClassName="error">
            Acreage
          </Label>
          <NumberField
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
