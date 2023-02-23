import React from 'react'

import './detailssdiv.css'
const Detailspart = (props) => {
  return (
    <>
      <div className='part1div'>
        <div className='contentdiv1'>
                <div className='part1ofcontentdiv'>
                    <div className='part1ofcontentdivPart1'>
                        <img src={props.img} alt="" />
                    </div>
                    <div className='part1ofcontentdivPart2'>
                        <div className='part1ofcontentdivPart2Part1'>
                          <p className='para'>{props.name}</p>
                          <p className='para1'>{props.date}, <span>{props.actor} </span></p>
                        </div>
                        <div className='part1ofcontentdivPart2Part2'>
                          <p className='para3'>{props.time} <span>{props.genre} </span></p>
                       
                        </div>
                    </div>
                    
                </div>
                <div className='part2ofcontentdiv'>
                <p className='para5'>{props.story} </p>
                </div>
                <div className='part3ofcontentdiv'>
                <img src="https://cdn-icons-png.flaticon.com/512/5911/5911010.png" alt="" />
                <img src="https://img.icons8.com/emoji/256/white-heart.png" alt="" />
                <img src="https://cdn-icons-png.flaticon.com/512/739/739184.png" alt="" />

                </div>
            </div>


            <div className='contentdiv2'>
              <img src={props.img2} alt="" />
            
            </div>
            
            

      </div>

    </>
  )
}

export default Detailspart;
