import React from 'react'
import { Container } from '@material-ui/core'
import style from './NewsContent.css'
import NewsCard from '../NewsCard/NewsCard'
const NewsContent = ({newsArray ,newsResult}) => {
    return (
        
        <Container maxWidth="md">
            <div className="content">
                <div className="downloadMessage">
                    <span className="downloadText">
                        For the best experience use inshort app in 
                    </span>
                    <img
                    alt="image"
                    height="80%"
                    src="https://assets.inshorts.com/website_assets/images/appstore.png"/>
                    <img 
                    alt="image"
                    height="80%"
                    src="https://assets.inshorts.com/website_assets/images/playstore.png"
                    />
                </div>
                {newsArray.map((newsItem) => (
                    <NewsCard newsItem={newsItem} key={newsItem.title} />))}
            </div>
            
        </Container>
    )
}

export default NewsContent
