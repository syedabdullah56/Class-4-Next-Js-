import React from 'react'

const Student = ({name,age,salary}) => {
  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>Age : {age}</h1>
      <h1>Salary : {salary}</h1>
    </div>
  )
}

export default Student
