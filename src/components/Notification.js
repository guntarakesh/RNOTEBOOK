import React from 'react'

import addNotification from 'react-push-notification'

function Notification(props) {

  const {title,subtitle,message,theme,closeButton} = props ; 
  
 function warningNotification() {
    addNotification({
        title: "Warning",
        subtitle: "Please fill it",
        message: "You have to enter name",
        theme: "red",
        closeButton: "X",
    });
  }

  

  return (
   <>
   </>
  )
}

