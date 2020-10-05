import React from 'react'
import { ErrorLabel } from './styledComponents'
export default function ErrorText({ title }) {
    return (
        <>
            <ErrorLabel> {title}</ErrorLabel>
        </>)
}