import './styles.css'
import {FiX, FiClipboard} from 'react-icons/fi'

export default function LinkItem({ onClose, data}) {
    async function copyLink() {
        await navigator.clipboard.writeText(data.link)
    }
    
    return (
        <div className='modal-container'>
            <div className="modal-header">
                <h2>Link Encurtado</h2>
                <button onClick={onClose}>
                    <FiX size={28} color="#000" />
                </button>
            </div>

            <span>
                {data.long_url}
            </span>

            <button className='modal-link' onClick={copyLink}>
                {data.link}
                <FiClipboard size={20} color="#fff" />
            </button>
        </div>
    )
}