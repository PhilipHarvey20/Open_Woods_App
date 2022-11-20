import React, { useState } from 'react'

import Select from 'react-select'
import { stateOptions } from 'web/src/AmericanStates'

import 'web/src/pages/HomePage/HomePage.css'

import { Form, NumberField, Label, Submit, FieldError } from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'

import { activityOptions } from 'src/ActivityOptions'
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
  const [activityOption, setActivityOption] = useState(null)
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

          {/* display error if form submitted without select value */}

          <div className="select">
            <Label name="Activity" errorClassName="error">
              Activity
            </Label>
            <Select
              value={activityOption}
              onChange={setActivityOption}
              options={activityOptions}
              placeholder="Select Activity"
              validation={{ required: true }}
            />
            <Label name="State" errorClassName="error">
              State
            </Label>
            <Select
              value={americanState}
              onChange={setAmericanState}
              options={stateOptions}
              placeholder="Select State"
              validation={{ required: true }}
            />

            {/*
          <Label name="Activity" errorClassName="error">
            Activity
          </Label>
          <div className="select">
            <Select
              onChange={setActivityOption}
              className="select"
              value={activityOption}
              name="Activity"
              options={activityOptions}
              autosize={false}
              validation={{ required: true }}
            /> */}

            {/* <Label name="State" errorClassName="error">
              State
            </Label>
            <Select
              onChange={setAmericanState}
              className="select"
              value={americanState}
              name="State"
              options={stateOptions}
              autosize={false}
              validation={{ required: true }}
            />
          </div> */}

            {/* Make Acreage below as a react input-number component*/}

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
          </div>
        </Form>
      </>
    </>
  )
}

export default HomePage
