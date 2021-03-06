import React from 'react'
import MultiSelectChips from '../components/MultiSelectChips/MultiSelectChips'

export default function TechStackSelection() {
  const chipsData = [
    { key: 0, label: 'dos' },
    { key: 1, label: 'jquery' },
    { key: 2, label: 'excel' },
    { key: 3, label: 'alphabet' },
    { key: 4, label: 'internet explorer' },
    { key: 0, label: 'dos' },
    { key: 1, label: 'jquery' },
    { key: 2, label: 'نادر' },
    { key: 3, label: 'راهی' },
    { key: 4, label: 'پارسی' },
  ]
  return (
    <div>
      <MultiSelectChips chipsData={chipsData}/>      
    </div>
  )
}
