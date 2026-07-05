import React, { useEffect, useMemo, useRef, useState } from 'react'
import './blog.css'
import { Link } from 'react-router-dom'
import blogData from './blogData'

const Blog = () => {
  const allPosts = useMemo(
    () => blogData.flatMap((topic) => topic.posts.map((post) => ({ ...post, topic }))),
    []
  )
  const [activeId, setActiveId] = useState(allPosts[0].id)
  const terminalRef = useRef(null)

  const active = allPosts.find((post) => post.id === activeId)
  const activeIndex = allPosts.indexOf(active)

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Field Log // Omar Hossain'
    return () => { document.title = previousTitle }
  }, [])

  const openPost = (id) => {
    setActiveId(id)
    // On stacked (mobile) layout the terminal sits below the index — bring it into view.
    if (window.matchMedia('(max-width: 900px)').matches) {
      terminalRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const step = (delta) => {
    const next = allPosts[activeIndex + delta]
    if (next) openPost(next.id)
  }

  return (
    <div className='mth'>
      {/* div, not <header>: header.css styles the `header` element globally (100vh hero) */}
      <div className='mth__topbar'>
        <Link to='/' className='mth__return'>◄ RETURN // PORTFOLIO</Link>
        <h1 className='mth__wordmark'>FIELD LOG <span>OMAR HOSSAIN</span></h1>
        <div className='mth__signal'><span className='mth__signal-dot' aria-hidden='true'></span>LINK STABLE</div>
      </div>

      <div className='mth__frame'>
        <aside className='mth__index'>
          <div className='mth__index-head'>
            <span className='mth__barcode' aria-hidden='true'></span>
            <div className='mth__index-head-text'>
              <strong>DATA INDEX</strong>
              <span>SORT: TOPIC / TIME DESC</span>
            </div>
          </div>

          {blogData.map((topic) => (
            <div className='mth__topic' key={topic.code}>
              <h2 className='mth__topic-head'>
                <span className='mth__topic-code'>{topic.code}</span>
                {topic.name}
                <span className='mth__topic-count'>{String(topic.posts.length).padStart(2, '0')}</span>
              </h2>
              <ul className='mth__posts'>
                {topic.posts.map((post) => (
                  <li key={post.id}>
                    <button
                      className={`mth__post ${post.id === activeId ? 'mth__post--active' : ''}`}
                      onClick={() => openPost(post.id)}
                      aria-current={post.id === activeId ? 'true' : undefined}
                    >
                      <span className='mth__post-id'>{post.id}</span>
                      <span className='mth__post-title'>{post.title}</span>
                      <span className='mth__post-date'>{post.date}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className='mth__index-foot'>
            <span className='mth__barcode' aria-hidden='true'></span>
            <span>PROPERTY OF O. HOSSAIN — HANDLE WITH CARE</span>
          </div>
        </aside>

        <main className='mth__terminal' ref={terminalRef}>
          <div className='mth__term-head'>
            <span>UESC RELAY 07.4 // TERMINAL {active.id}</span>
            <span>{active.readout}</span>
          </div>

          {/* key remount restarts the boot flicker when switching logs */}
          <article className='mth__term-screen' key={active.id}>
            <p className='mth__term-meta'>&lt;{active.date}&gt; incoming message // {active.topic.name.toLowerCase()}</p>
            <h2 className='mth__term-title'>{active.title}</h2>
            {active.body.map((paragraph, i) => (
              <p className='mth__term-p' key={i}>{paragraph}</p>
            ))}
            <p className='mth__term-end'>&lt;end of transmission&gt;<span className='mth__cursor' aria-hidden='true'></span></p>
          </article>

          <div className='mth__term-foot'>
            <button className='mth__term-nav' onClick={() => step(-1)} disabled={activeIndex === 0}>◄ PREV LOG</button>
            <span className='mth__term-counter'>LOG {String(activeIndex + 1).padStart(2, '0')} / {String(allPosts.length).padStart(2, '0')}</span>
            <button className='mth__term-nav' onClick={() => step(1)} disabled={activeIndex === allPosts.length - 1}>NEXT LOG ►</button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Blog
