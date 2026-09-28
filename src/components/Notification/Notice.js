import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import{
  ChakraProvider,
  theme,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  Container,
  Box
}from '@chakra-ui/react';

async function notifyUser(notificationText = "Enabled notifications!"){ //async make the function wait for user to key in input
  if(!("Notification" in window)){
    alert("Browser does not support notifications");
  }else if(Notification.permission === "granted"){
    new Notification(notificationText);
  }else if(Notification.permission !== "denied"){
    await Notification.requestPermission().then((permission) => {
      if(permission === "granted"){
        new Notification(notificationText);
      }
    });
  }
}

// 3 states
// 1. We show the "Would you like to enable notifications?"
// 2. Show notification related functionality (thru button)
// 3. Show nothing if the user disabled the notfications

function Notice (){
  const [ userResponded, setUserResponded] = useState(false);

  async function enableNotifsAndClose(){
    await notifyUser().then(() => {
      setUserResponded(true);
    });
  }

  function disableNotifsAndClose(){
    setUserResponded(true);
  }
  
  return(!(userResponded) && !(Notification.permission === "granted")) ? (
    <ChakraProvider theme={theme}>
      <Container>
        <Alert status="success">
          <AlertIcon />
          <Box>
            <AlertTitle>
              Notifications
            </AlertTitle>
            <AlertDescription>
              Would you like to enable the notification feature?
            </AlertDescription>
          </Box>
          <Button colorScheme='teal' size='sm' onClick={enableNotifsAndClose}  marginRight={2}>
            Sure!
          </Button>
          <Button colorScheme='gray' size='sm' onClick={disableNotifsAndClose}>
            No thanks!
          </Button>
        </Alert>
      </Container>
    </ChakraProvider>
  ) : (Notification.permission === "granted") ? (
    <ChakraProvider theme={theme}>

    <p  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' , backgroundColor:'black'}}><Link to='/checkout'>
    <Button colorScheme='gray' size='sm' onClick={() => notifyUser("Order Confirmed!")}>
    Proceed For Payment  
    </Button>
    </Link></p>

      {/* <Button colorScheme='gray' size='sm'  onClick={() => notifyUser("Order received!")}>
        Proceed to payment
      </Button> */}
    </ChakraProvider>
  ) :
  <>
    <h1>You have disable notification feature!</h1>
  </>
    
  
}

export default Notice