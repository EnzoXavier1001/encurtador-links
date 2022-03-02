import './styles.css'
import { useState } from 'react'
import { FiLink } from 'react-icons/fi'

import logoImg from '../../img/logo.png'

import LinkItem from '../components/LinkItem'
import Menu from '../components/Menu'

import {saveLink} from '../../services/storeLinks'
import api from '../../services/api'

export default function Home () {
    const [link, setLink] = useState('')
    const [data, setData] = useState({})
    const [showModal, setShowModal] = useState(false)

    async function handleShortLink() {
      try {
        const response = await api.post('/shorten', {
          long_url: link
        })

        setData(response.data)

        // Open modal
        setShowModal(true)

        // Save link in the local storage
        saveLink('@encurtaLink', response.data)

        setLink('')
      } catch {
        alert('Ops parece que algo deu errado')
        setLink('')
      }
    }

    return (
      <div className="container-home">
        <div className="logo">
          <img src={logoImg} alt="Anonymous Link Logo" />
          <h1>AnonymousLink</h1>
          <span>Cole seu link para encurtar 👇</span>
        </div>

        <div className="area-input">
          <div>
            <FiLink size={24} color="#fff"/>
            <input 
              type="text" 
              placeholder='Cole seu link aqui...'
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>

          <button onClick={handleShortLink}>Gerar Link</button>
        </div>

        <Menu />

        {showModal && (
          <LinkItem data={data} onClose={() => setShowModal(false)} />
        )}


      </div>
    )
}