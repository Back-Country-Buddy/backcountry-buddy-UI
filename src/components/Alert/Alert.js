import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const successAlert = () => toast.success("Success!", {
        position: toast.POSITION.BOTTOM_CENTER,
        hideProgressBar: true,
        autoClose: 2000
})

export const errorAlert = () => toast.error("User not found!", {
        position: toast.POSITION.BOTTOM_CENTER,
        hideProgressBar: true,
        autoClose: 2000
})

export const completeAlert = () => toast("Tour is now complete. Click to view in you Past Tours!", {
        position: toast.POSITION.BOTTOM_CENTER,
        hideProgressBar: true,
        autoClose: 2000
})





