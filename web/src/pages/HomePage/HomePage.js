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

// make homepage background green
// web/src/pages/HomePage/HomePage.css
// .select {
//   background-color: green;
// }
