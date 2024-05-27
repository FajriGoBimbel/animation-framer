"use client"
import React, { useState } from 'react'

const dummy = [
  {
    awal: "Sadasd",
    is: true,
    a: [
      {
        awal: "Sadasd",
        is: true
      },
      {
        awal: "Sadasd",
        is: true
      }
    ]
  },
  {
    awal: "Sadasd",
    is: true,
    a: [
      {
        awal: "Sadasd",
        is: true
      },
      {
        awal: "Sadasd",
        is: true
      }
    ]
  },
  {
    awal: "Sadasd",
    is: true,
    a: [
      {
        awal: "Sadasd",
        is: true
      },
      {
        awal: "Sadasd",
        is: true
      }
    ]
  }
]

export default function NewComponent() {
  const [test, setTest] = useState<any>(dummy)

  const handleUpdate = () => {
    setTest(test.map((item: any) => ({...item, a: item.a.map((itemm: any) => ({...itemm, is: false}))})))
  }

  console.log(test)

  return (
    <div>
      <button onClick={handleUpdate}>Click</button>
    </div>
  )
}
