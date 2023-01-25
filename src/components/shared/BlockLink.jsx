import PropTypes from 'prop-types'
import { Children } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

const BlockLink = ({ href, children }) => {
  const firstChild = Children.toArray(children)[0]
  let { className } = firstChild.props
  className = className.split(' ')

  const widthRegex = /^w-[0-9]+$/g
  const marginRegex = /m[trblxy]?\-[0-9]/g
  const width = className.find((value) => widthRegex.test(value))
  const margin = className.find((value) => marginRegex.test(value))

  return (
    <Link href={href} className={clsx(width, margin, 'block')}>
      {children}
    </Link>
  )
}

BlockLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default BlockLink
