import React, { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setLoading(true)

        setTimeout(() => {
            alert('Message sent successfully!')

            setFormData({
                name: '',
                email: '',
                message: ''
            })

            setLoading(false)
        }, 1500)
    }

    const contactInfo = [
        {
            id: 1,
            icon: FaEnvelope,
            title: 'Email',
            value: 'pandusurya456@gmail.com',
            link: 'mailto:pandusurya456@gmail.com'
        },
        {
            id: 2,
            icon: FaPhone,
            title: 'Phone',
            value: '+919347953992',
            link:'tel:+919347953992'
        },
        {
            id: 3,
            icon: FaLinkedin,
            title: 'Linkedin',
            value: 'https://www.linkedin.com/in/p-surya-7558b9285/',
            link: 'https://www.linkedin.com/in/p-surya-7558b9285/'
        },
        {
            id: 4,
            icon: FaMapMarkedAlt,
            title: 'Location',
            value: 'Hyderabad,India',
            link: null
        },
    ]

    return (
        <section className='py-20 bg-gray-900' id='contact'>
            <div className='container mx-auto px-4 max-w-6xl'>

                <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-5xl font-extrabold text-white '>
                        Let's Connect.
                    </h2>

                    <div className='w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl'></div>
                </div>

                <div className='grid md:grid-cols-2 gap-8'>

                    <div>
                        <p className='text-gray-400 mb-8 leading-relaxed'>
                            Here are my details and please feel free to contact me and we will work together
                        </p>

                        <div className='space-y-6'>
                            {
                                contactInfo.map((info) => {
                                    const Icon = info.icon

                                    return (
                                        <div key={info.id} className='flex items-center gap-4 group '>

                                            <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                                                <Icon size={20} className='text-primary' />
                                            </div>

                                            <div>
                                                <h4 className='text-white font-medium text-sm'>
                                                    {info.title}
                                                </h4>

                                                {
                                                    info.link ?
                                                        (
                                                            <a
                                                                href={info.link}
                                                                className='text-gray-400 text-sm hover:text-primary transition-color'
                                                                target={info.title === 'Location' ? '_self' : '_blank'}
                                                                rel={info.title === 'Location' ? '' : 'noopener noreferrer'}
                                                            >
                                                                {info.value}
                                                            </a>
                                                        )
                                                        :
                                                        (
                                                            <p className='text-gray-400 text-sm'>
                                                                {info.value}
                                                            </p>
                                                        )
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    {/* Contact form */}

                    <div className='bg-gray-800 rounded-lg p-6'>

                        <form onSubmit={handleSubmit}>

                            <div className='mb-4 '>
                                <label htmlFor="name" className='text-white block mb-2 text-sm font-medium'>
                                    Name
                                </label>

                                <input
                                    type="text"
                                    placeholder='your name'
                                    required
                                    id='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors'
                                />
                            </div>

                            <div className='mb-4 '>
                                <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder='your@gmail.com'
                                    required
                                    id='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors'
                                />
                            </div>

                            <div className='mb-6 '>
                                <label htmlFor="message" className='text-white block mb-2 text-sm font-medium'>
                                    Message
                                </label>

                                <textarea
                                    placeholder='your message....'
                                    rows={4}
                                    required
                                    id='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors'
                                />
                            </div>

                            <button
                                type='submit'
                                disabled={loading}
                                className='w-full px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/80 cursor-pointer'
                            >
                                {
                                    loading ? 'Sending...' : 'Send Message'
                                }
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact