import { useEffect, useState } from 'react'
import './styles.css'
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { getLinksSave, deleteLink } from '../../services/storeLinks'
import LinkItem from '../components/LinkItem'


export default function Links () {
    const [links, setLinks] = useState([])

    const [data,  setData] = useState({})

    const [showModal, setShowModal] = useState(false)

    const [emptyList, setEmptyList] = useState('')

    useEffect(() => {
      async function getLinks() {
        const result = await getLinksSave('@encurtaLink')
        
        if(result.length === 0) {
          setEmptyList(true)
          return
        }

        setLinks(result)
      }

      getLinks()
    }, [])

    function handleOpenLink(link) {
      setData(link)
      setShowModal(true)
    }

    async function handleDelete(id) {
      const result = await deleteLink(links, id)

      if(result.length === 0) {
        setEmptyList(true)
      }

      setLinks(result)
    }

    return (
      <div className='links-container'>
        <div className='links-header'>
          <Link to="/">
            <FiArrowLeft size={38} color="#fff"/>
          </Link>
          <h1>Meus links</h1>
        </div>

        {emptyList && (
          <div className="links-item">
            <h2 className='empty-text'>Sua lista está vazia...</h2>
          </div>
        )}

        {links.map((link) => (
          <div className='links-item' key={link.id}>
            <button onClick={() => handleOpenLink(link)} className='link'>
              <FiLink size={18} color="#fff" />
              {link.long_url}
            </button>
            <button className='link-delete' onClick={() => handleDelete(link.id)}>
              <FiTrash size={18} color="#ff5454" />
            </button>
        </div>
        ))}

        {showModal && (
          <LinkItem 
            onClose={ () => setShowModal(false)}
            data={data}
          />
        )}
        
      </div>
    )
}