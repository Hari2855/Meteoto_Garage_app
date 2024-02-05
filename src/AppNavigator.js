import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Splash from './normal/Splash';
import Logoscreen from './normal/LogoScreen';
import Carscreen from './normal/CarScreen';
import Login from './normal/Login';
import Verification from './normal/Verification';
import Parent from './normal/Parent';
import Chating from './Chat Screens/Chating';
import NoChat from './Chat Screens/NoChat';
import Nopayment from './Payment Screens/Nopayment';
import Profile from './Profile/Profile';
import Notification from './Profile/Notification';
import MyProfile from './Profile/MyProfile';
import Primarynumber from './Profile/Primarynumber';
import Alternatenumber from './Profile/Alternatenumber';
import Shopeprofile from './Shope_profile/Shopeprofile';
import Editaddress from './Shope_profile/Editadress';
import Editnumber from './Shope_profile/Editnumber';
import Bankdetails from './Bank screens/Bankdetails';
import Contact from './Component/Contact';
import Setting from './Profile/Setting';
import Help from './Profile/Help';
import Feedback from './Profile/Feedback';
import Suceesotp from './Profile/Suceesotp';
import Numberverified from './Profile/Numberverified';
import Bookinghistory from './Car_Service_History/Bookinghistory';
import Bookingdetails from './Car_Service_History/Bookingdetails';
import Paymentdetails from './Booking/Paymentdetails';
import Onwaiting1 from './Booking/Onwaiting1';
import Onwaitig2 from './Booking/Onwaitig2';
import Onwaitingdetails from './Booking/Onwaitingdetails';
import Successmodel1 from './Booking/Successmodel';
import Suceesotp1 from './Booking/Successotp1';
import Nocar from './Booking/Nocaringrage';
import Ingrage from './Booking/Ingrage';
import Noservice from './Servicing/Noservice';
import Serviceing1 from './Servicing/Serviceing1';
import Servicing2 from './Servicing/Servicing2';
import Jobcard2 from './Servicing/Jobcard2';
import Jobcarddetails from './Servicing/Jobcarddetails';
import Response from './Response/Response';
import Completed from './Completed/Completed';
import Details from './Completed/Details';
import Jobcard3 from './Completed/Jobcard3';
import Paymentstatus from './Completed/Paymentstatus';
import Paymentcompleted from './Completed/Paymentcompleted';
import Nopaymentr from './Completed/Nopaymentrequest';
import Paymentfaild from './Completed/Paymentfaild';
import Delivered from './Delivered/Delivered';
import Detailed from './Delivered/Detailed';
import Jobcard4 from './Delivered/Jobcard4';
import Paymentsuccess from './Delivered/Paymentsuccess';
import Calcelled from './Cancelled/Cancelled';
import Onwaitingc from './Cancelled/Onwaitingc';
import Confirmedb from './Confirmed_Booking/Confirmedbooking';
import Cancelledb from './Cancelledbookings/Cancelledbookings';
import Requeststatus from './Servicing/Requeststatus';
import Reasonmodel from './Starting screens/Reasonmodel';
import Wrongotp from './normal/Wrongotp';
import Jobcard from './Component/Jobcard';


const Stack = createStackNavigator()

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Splash' component={Splash} />
                <Stack.Screen name='Logoscreen' component={Logoscreen} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Carscreen' component={Carscreen} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Login' component={Login} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Verification' component={Verification} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Wrong' component={Wrongotp} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Parent' component={Parent} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Chating' component={Chating}/>
                <Stack.Screen name='NoChat' component={NoChat} />
                <Stack.Screen name='Nopayment' component={Nopayment} options={{ ...TransitionPresets.SlideFromRightIOS }}/>
                <Stack.Screen name='Profile' component={Profile} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Notification' component={Notification} options={{ ...TransitionPresets.SlideFromRightIOS }}/>
                <Stack.Screen name='MyProfile' component={MyProfile} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Primaryedit' component={Primarynumber} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Alteredit' component={Alternatenumber} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Shopeprofile' component={Shopeprofile} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Editaddress' component={Editaddress} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Editnumber' component={Editnumber} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Bank' component={Bankdetails} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Contact' component={Contact} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Setting' component={Setting} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Help' component={Help} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Feedback' component={Feedback} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Success' component={Suceesotp} />
                <Stack.Screen name='Numberverified' component={Numberverified} />
                <Stack.Screen name='Booking1' component={Bookinghistory} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Booking2' component={Bookingdetails} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Jobcard' component={Jobcard} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='details' component={Paymentdetails} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Onwaiting1' component={Onwaiting1} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Onwaiting2' component={Onwaitig2} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Onwaitingdetails' component={Onwaitingdetails} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Success1' component={Successmodel1} />
                <Stack.Screen name='Successotp1' component={Suceesotp1} />
                <Stack.Screen name='Nocar' component={Nocar} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Ingrage' component={Ingrage} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Noservice' component={Noservice} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Serviceing1' component={Serviceing1} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Servicing2' component={Servicing2} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Jobcard2' component={Jobcard2} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Jobcard3' component={Jobcarddetails} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Response' component={Response} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Completed' component={Completed} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Details' component={Details} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Jobbcard3' component={Jobcard3} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Status' component={Paymentstatus} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Paymentc' component={Paymentcompleted}/>
                <Stack.Screen name='Nopaymentr' component={Nopaymentr} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Faild' component={Paymentfaild} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Delivered' component={Delivered} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Detailed' component={Detailed} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Jobcard4' component={Jobcard4} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Payments' component={Paymentsuccess} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Cancelled' component={Calcelled} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Onwaitingc' component={Onwaitingc} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Confirmedb' component={Confirmedb} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Cancelledb' component={Cancelledb} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Requests' component={Requeststatus} options={{ ...TransitionPresets.SlideFromRightIOS }} />
                <Stack.Screen name='Reason' component={Reasonmodel}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator