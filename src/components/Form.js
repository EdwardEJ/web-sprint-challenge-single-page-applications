import React from 'react'


export default function Form(props) {

  const {
    submit,
    inputChange,
    checkboxChange,
    errors,
  } = props;

  const onSubmit = e => {
    e.preventDefault()
    submit()
  }

  const onInputChange = e => {
    const { name, value } = e.target
    inputChange(name, value)
  }

  const onCheckBoxChange = e => {
    const { name, checked } = e.target
    checkboxChange(name, checked)
  }


  return (
    <form onSubmit={onSubmit}>
      <div>
        <h2>Make Your Pizza</h2>
      </div>

      <div className='errors'>
        <div>{errors.name}</div>
      </div>

      <label>ENTER YOUR NAME&nbsp;
        <input
          type='text'
          name='name'
          placeholder='name'
          onChange={onInputChange}
        />
      </label>

      <h3>CHOOSE YOUR SIZE</h3>
      <label name='size'>&nbsp;
          <select onChange={onInputChange}>
          <option value=''>-- Select A Size --</option>
          <option value='small'>10" Small</option>
          <option value='medium'>12" Medium</option>
          <option value='large'>14" Large</option>
        </select>
      </label>


      <h3>CHOOSE MEATS </h3>
      <label>Ham&nbsp;
      <input
          type='checkbox'
          name='ham'
          onChange={onCheckBoxChange}
        />
      </label>

      <label>Beef&nbsp;
      <input
          type='checkbox'
          name='beef'
          onChange={onCheckBoxChange}
        />
      </label>

      <label>Pepperoni&nbsp;
      <input
          type='checkbox'
          name='pepperoni'
          onChange={onCheckBoxChange}
        />
      </label>

      <label>Sausage&nbsp;
      <input
          type='checkbox'
          name='sausage'
          onChange={onCheckBoxChange}
        />
      </label>

      {/* <label>SPECIAL INSTRUCTIONS&nbsp;
      <input
          type='text'
          name='specialInstructions'
          placeholder='special instructions'
          onChange={onInputChange}
        />
      </label> */}
      <button>Submit</button>
    </form>
  )
}