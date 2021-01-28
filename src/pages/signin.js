import React, { useState } from 'react'
import { Form } from '../components'
import HeaderContainer from '../containers/header'

export default function Singin() {
const [error, setError] = useState('')

    return (
        <HeaderContainer>
            <Form>
                <Form.Title>Singin</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
            </Form>
        </HeaderContainer>
    )
}
