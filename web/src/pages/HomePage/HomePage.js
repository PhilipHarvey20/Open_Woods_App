import React, { useState } from 'react'

import Select from 'react-select'
import { stateOptions } from 'web/src/AmericanStates'

import { activityOptions } from 'src/ActivityOptions'
import 'web/src/pages/HomePage/HomePage.css'

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
  const [americanState, setAmericanState] = useState(null)
  const [count, setCount] = useState(0)

  const onSubmit = (data) => {
    data.State = americanState
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
          {/*
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
          </Label> */}

          {/* make Activity above State select  */}

          <Select
            onChange={activityOptions}
            className="select"
            value={activityOptions}
            name="Activity"
            options={activityOptions}
            autosize={false}
            validation={{ required: true }}
          />

          <Select
            onChange={setAmericanState}
            className="select"
            value={americanState}
            name="State"
            options={stateOptions}
            autosize={false}
            validation={{ required: true }}
          />

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

        <br />
        <br />
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Add count</button>
      </>
    </>
  )
}

export default HomePage
