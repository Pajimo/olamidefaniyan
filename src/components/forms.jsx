import {useState} from 'react'
import { app, database } from '../firebaseconfig'
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Form = () => {

    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [supportMessage, setSupportMessage] = useState('')

    const sendMessage = async(e) => {
        e.preventDefault()
        if(!email || !firstName || !supportMessage){
            toast.error('First name, Email Address or Message empty')
        }else{
            try{
                const id = toast("Please wait...", { autoClose: false })
                await addDoc(collection(database, "message"), {
                    firstName,
                    lastName,
                    email,
                    supportMessage
                });
                toast.update(id, {render: "Please Wait", type: "success", autoClose: 5000 });
                toast('Message Sent');
            }catch(err){
                toast.error('Message error')
            }
        }
    }

    return(
        <>
        <ToastContainer/>
            <form className="md:flex md:justify-center" onSubmit={sendMessage}>
                <div className="shadow-xl border-t-2 mt-10 pt-10 pb-10 md:px-7 px-2">
                    <div className='md:flex'>
                        <div className='mb-5'>
                            <label htmlFor='firstName' className='text-left'>First name</label><br></br>
                            <input required className='h-10 md:w-72 w-full px-2 mb-3 md:mr-7 border-2 border-gray-300 rounded-lg' type="text" value={firstName} id='firstName' onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="lastName">Last name</label><br></br>
                            <input required className='h-10 md:w-72 w-full px-2 mb-3  border-2 border-gray-300 rounded-lg' type="text" value={lastName} id='lastName' onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                    </div>
                    <div className='mb-5'>
                        <label htmlFor='email' className='text-left'>Email address</label><br></br>
                        <input type="email" required className='h-10 md:w-96 w-full px-2 mb-3 border-2 border-gray-300 rounded-lg' value={email} id='email' onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='mb-10'>
                        <label htmlFor="Message">Message</label><br></br>
                        <textarea required className='px-2 mb-3  border-2 border-gray-300 rounded-lg w-full' rows='4' id='Message' value={supportMessage} onChange={(e) => setSupportMessage(e.target.value)}></textarea>
                    </div>
                    <div className='text-right'>
                        <button className='bg-black p-3 text-white'>Send Message</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Form