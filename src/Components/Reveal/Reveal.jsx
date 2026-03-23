import { useEffect, useRef, useState } from 'react'

const Reveal = ({
  as: Tag = 'div',
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.18,
  ...props
}) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [threshold])

  const revealClassName = [
    'reveal',
    `reveal-${direction}`,
    visible ? 'reveal-visible' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag
      ref={ref}
      className={revealClassName}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Reveal
