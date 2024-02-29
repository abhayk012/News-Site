import React from 'react'
import '../css/navbar.css'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  return (
    <div>
      <div id='navbar' className=''>
        <ul id='navlist'>
          <li id='navTitle'>AK WORLD-TIMES</li>
          <div id='category' className='ms-5'>
            <li id='naveli' onClick={() => { navigate('/') }} style={{cursor:"pointer"}}><i class="fa-solid fa-house"></i> Home</li>
            <li id='naveli' onClick={() => { navigate('/business') }} style={{cursor:"pointer"}}><i class="fa-solid fa-business-time"></i> Business</li>
            <li id='naveli' onClick={() => { navigate('/entertainment') }} style={{cursor:"pointer"}}><i class="fa-solid fa-face-laugh"></i> Entertainment</li>
            <li id='naveli' onClick={() => { navigate('/science') }} style={{cursor:"pointer"}}><i class="fa-solid fa-vial-virus"></i> Science</li>
            <li id='naveli' onClick={() => { navigate('/health') }} style={{cursor:"pointer"}}><i class="fa-regular fa-hospital"></i> Health</li>
            <li id='naveli' onClick={() => { navigate('/sports') }} style={{cursor:"pointer"}}><i class="fa-solid fa-volleyball"></i> Sports</li>
            <li id='naveli' onClick={() => { navigate('/technology') }} style={{cursor:"pointer"}}><i class="fa-solid fa-microchip"></i> Technology</li>
          </div>
        </ul>

      </div>
    </div>
  )
}

export default Navbar