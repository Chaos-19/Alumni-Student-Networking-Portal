"use client"
import React from 'react'
import { Button } from '../ui/button'
import { FaComment } from 'react-icons/fa'

type Props = {}

const PublishBtn = (props: Props) => {
    return (
        <Button className="fixed bottom-12 right-12 rounded-full">
            <FaComment />
        </Button>
    )
}

export default PublishBtn