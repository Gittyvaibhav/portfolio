import { useEffect, useMemo, useState } from 'react'
import './Preloader.css'

const QUOTE = 'Quite work, loud results'

const Preloader = ({ onFinish }) => {
  const [assetsReady, setAssetsReady] = useState(document.readyState === 'complete')
  const [minimumElapsed, setMinimumElapsed] = useState(false)
  const [progress, setProgress] = useState(8)
  const [isExiting, setIsExiting] = useState(false)

  const statusText = useMemo(() => {
    if (progress < 45) return 'Loading portfolio...'
    if (progress < 85) return 'Preparing your journey...'
    return 'Almost there...'
  }, [progress])

  useEffect(() => {
    const handleLoad = () => setAssetsReady(true)
    window.addEventListener('load', handleLoad)

    const minDelayTimer = window.setTimeout(() => {
      setMinimumElapsed(true)
    }, 3200)

    const progressTimer = window.setInterval(() => {
      setProgress((current) => {
        if (assetsReady && minimumElapsed) {
          return 100
        }

        const cap = assetsReady ? 92 : 82
        return current >= cap ? current : current + Math.max(1, Math.round((cap - current) / 8))
      })
    }, 120)

    return () => {
      window.removeEventListener('load', handleLoad)
      window.clearTimeout(minDelayTimer)
      window.clearInterval(progressTimer)
    }
  }, [assetsReady, minimumElapsed])

  useEffect(() => {
    if (!assetsReady || !minimumElapsed) return

    const exitTimer = window.setTimeout(() => {
      setProgress(100)
      setIsExiting(true)
      
      const finishTimer = window.setTimeout(() => {
        onFinish()
      }, 650)
      
      return () => window.clearTimeout(finishTimer)
    }, 0)

    return () => window.clearTimeout(exitTimer)
  }, [assetsReady, minimumElapsed, onFinish])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return (
    <div className={`preloader ${isExiting ? 'preloader-exit' : ''}`}>
      <div className="preloader-glow preloader-glow-one" />
      <div className="preloader-glow preloader-glow-two" />

      <div className="preloader-content">
        <div className="preloader-spinner" aria-hidden="true" />

        <p className="preloader-quote">{QUOTE}</p>

        <p className="preloader-message">{statusText}</p>

        <div className="preloader-progress" aria-hidden="true">
          <div
            className="preloader-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="preloader-percent">{progress}%</span>
      </div>
    </div>
  )
}

export default Preloader
