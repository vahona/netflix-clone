import React from 'react'
import {Accordion, OptForm} from '../components'
import faqsData from '../fixtures/faqs.json'

export default function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Question</Accordion.Title>
           
            {faqsData.map((item) => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>
                        {item.header}
                    </Accordion.Header>
                    <Accordion.Body>
                        {item.body}
                    </Accordion.Body>
                </Accordion.Item>
            ))}
            <OptForm>
                <OptForm.Input placeholder="Email Address" />
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Text>ready to watch Enter your email to create or re</OptForm.Text>
            </OptForm>
        </Accordion>
    )
}
