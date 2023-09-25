import '.././index.css'
//yrt
const Contact = () => {

    return (
        <div name='contact' className='w-full h-screen bg-[black] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/1d586508-fe8a-453b-aa1c-00c1a760dec3" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-white'>Contact</p>
                    <p className='text-white py-4'>Submit the form below, or shoot me an email - racharya@vassar.edu</p>
                </div>
                <input type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2' type="text" placeholder='Email' name='email' />
                <textarea className='p-2' name='message' rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mx-auto my-8 flex'>Let's Collaborate</button>
            </form>
        </div>
    )
}

export default Contact