import React, { useState } from 'react'
import './emoji.css'
import EmojiDisplay from './display'


const Emoji = () => {
  return (
    <>
    <div className='heading'>
      Monsoon Fun
    </div>
    <br/>
    <br/>
    <div className='heading_2'>
      Type your emoji to know its meaning
    </div>
    <br/><br/>
    <div className='input_box'>
      <input type='text' className='input' placeholder='Enter emoji here' />
      <label></label>
    </div>
    <br/><br/>
    <div className='output'>

    </div>
    <div className='pick_emoji'>
      <div className='emoji'>
        emojiDictionary()
      </div>
      <EmojiDisplay />
    </div>
    </>
  )
}

export default Emoji

