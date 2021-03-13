import React from 'react'
import { Children } from 'react'

export default function StepManager({currentStep, childComponentOrder, children}) {
  return currentStep === childComponentOrder ? children : null
}
