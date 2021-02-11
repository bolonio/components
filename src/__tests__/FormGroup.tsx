import React from 'react'
import {FormGroup} from '..'
import {COMMON, TYPOGRAPHY} from '../constants'
import {behavesAsComponent, checkExports} from '../utils/testing'
import {render as HTMLRender, cleanup} from '@testing-library/react'
import {axe, toHaveNoViolations} from 'jest-axe'
expect.extend(toHaveNoViolations)

describe('FormGroup', () => {
  behavesAsComponent(FormGroup, [COMMON])

  checkExports('FormGroup', {
    default: FormGroup
  })

  it('should have no axe violations', async () => {
    const {container} = HTMLRender(
      <FormGroup>
        <FormGroup.Label htmlFor="example-text">Example text</FormGroup.Label>
        <input id="example-text" value="Example Value" />
      </FormGroup>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
    cleanup()
  })
})

describe('FormGroup.Label', () => {
  behavesAsComponent(FormGroup.Label, [COMMON, TYPOGRAPHY])

  it('should have no axe violations', async () => {
    const {container} = HTMLRender(<FormGroup.Label htmlFor="example-text">Example text</FormGroup.Label>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
    cleanup()
  })
})
