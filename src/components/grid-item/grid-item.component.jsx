import React from 'react'
import './grid-item.styles.scss'
import { withRouter } from 'react-router-dom'

const GridItem = ({ title, imageUrl, history, linkUrl, match  }) => (
    <div className='grid-item' 
        onClick={() => history.push(`${match.url}${linkUrl}`)} >
        <div className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='title'>{title.toUpperCase()}</div>
        <span className='subtitle'>description</span>          
    </div>
);

export default withRouter(GridItem);




