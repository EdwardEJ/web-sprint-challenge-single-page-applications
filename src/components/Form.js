import React from 'react'

export default function Form(props) {

  return (
    <form>
      <div>
        <h2>Make Your Pizza</h2>
      </div>

      <h3>CHOOSE YOUR SIZE</h3>
      <label>Ham&nbsp;
      <input
          type='checkbox'
          name='terms'
        />
      </label>


      <h3>CHOOSE MEATS </h3>
      <label>Ham&nbsp;
      <input
          type='checkbox'
          name='terms'
        />
      </label>

      <label>Beef&nbsp;
      <input
          type='checkbox'
          name='terms'
        />
      </label>

      <label>Pepperoni&nbsp;
      <input
          type='checkbox'
          name='terms'
        />
      </label>

      <label>Italian Sausage&nbsp;
      <input
          type='checkbox'
          name='terms'
        />
      </label>
    </form>
  )

}