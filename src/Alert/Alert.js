import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const successAlert = () => toast.success("Success!", {
        position: toast.POSITION.BOTTOM_CENTER,
        hideProgressBar: true,
        autoClose: 3000
})

export const noUserAlert = () => toast.error("User not found!", {
        position: toast.POSITION.BOTTOM_CENTER,
        hideProgressBar: true,
        autoClose: 3000
})

export const errorAlert = () => toast.error("Sorry! Something went wrong!", {
        position: toast.POSITION.BOTTOM_CENTER,
        hideProgressBar: true,
        autoClose: 3000
})

export const completeAlert = () => toast.info("Tour is now complete! You can now view it in your Past Tours.", {
        position: toast.POSITION.BOTTOM_CENTER,
        hideProgressBar: true,
        autoClose: 5000
})

export const offlineAlert = () => toast.info("Running in offline mode. Some information may not be available.", {
        position: toast.POSITION.BOTTOM_CENTER,
        hideProgressBar: true,
        autoClose: 5000
})
