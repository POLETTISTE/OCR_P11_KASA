import React from 'react'

const LogementAvatar = (props) => {
  const avatar = props.avatar
  return (
    <img src={avatar} alt="avatar propriétaire" className="logement-avatar" />
  )
}

export default LogementAvatar
