import React from 'react'

export default function Form(props) {

  return (



    <form>
      <div>
        <h2>Make Your Pizza</h2>
      </div>

      <label>ENTER YOUR NAME&nbsp;
        <input
          type='text'
          name='name'
          placeholder='name'
        />
      </label>

      <h3>CHOOSE YOUR SIZE</h3>
      <label name='size'>&nbsp;
          <select>
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
        />
      </label>

      <label>Beef&nbsp;
      <input
          type='checkbox'
          name='beef'
        />
      </label>

      <label>Pepperoni&nbsp;
      <input
          type='checkbox'
          name='pepperoni'
        />
      </label>

      <label>Italian Sausage&nbsp;
      <input
          type='checkbox'
          name='sausage'
        />
      </label>

      <label>SPECIAL INSTRUCTIONS&nbsp;
      <textarea
          type='text'
          name='special_instructions'
          placeholder='special instructions'>
        </textarea>
      </label>
      <button>Submit</button>
    </form>
  )
}