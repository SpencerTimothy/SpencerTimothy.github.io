import React, {useState, useEffect } from 'react'
import '../CSS/blogCard.css'
import { Link } from 'react-router-dom'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import data from "../blogData"

const BlogCard = () => {

    // const link = "blog/how-i-built-this"
    const [posts] = useState(data)
    const [index, setIndex] = useState(0)
    
    const [touchPosition, setTouchPosition] = useState(null)

    const handleTouchStart = (e) => {
      const touchDown = e.targetTouches[0].clientX
      setTouchPosition(touchDown)
      // console.log("touched");
    }

    const handleTouchMove =(e) => {
      const touchDown = touchPosition

      if (touchDown === null) {
        return
      }

      const currentTouch = e.targetTouches[0].clientX
      const diff = touchDown - currentTouch

      if (diff < 5) {
        setIndex(index - 1);
      }

      if (diff > -5) {
        setIndex(index + 1);
      }

      setTouchPosition(null)
    }

    useEffect(() => {
        const lastIndex = posts.length - 1
        if(index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    },[index,posts])

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 5000)
        return () => clearInterval(slider)
    },[index])

    return (
      <section
        data-aos="fade-up"
        data-aos-once="true"
        className="blog-section-card"
      >
        <div className="blog-section-title-card">
          <h2>Blog Posts</h2>
        </div>
        <div
          className="blog-section-center-card"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {posts.map((post, postIndex) => {
            const { id, link, img, alt, title, description } = post;
            let position = "nextSlide blog-article-card";
            if (postIndex === index) {
              position = "activeSlide blog-article-card";
            }
            if (
              postIndex === index - 1 ||
              (index === 0 && postIndex === posts.length - 1)
            ) {
              position = "lastSlide blog-article-card";
            }
            return (
              <article className={position} key={id}>
                <Link to={`blog/${link}`}>
                  <img src={img} alt={alt} className="blog-img-card" />
                  <h3 className="blog-title-card">{title}</h3>
                  <p className="blog-description-card">{description}</p>
                </Link>
              </article>
            );
          })}
          <button className="prev-btn" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>
          <button className="next-btn" onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    );
}

export default BlogCard