import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Akun from './pages/akun'
import Daftar from './pages/daftar'

const NoMatchPage = () => {
    return (
     <center>
         <div style={{
            margin: 'auto',
            width: '50%',
            padding: '10%',
            fontSize:'4rem',
            color:'#c6c5c5'
         }}>
              <h1>404</h1>
              {/* <p>Hahahah</p> */}
         </div>
         
     </center>
      
    );
  };

export default () => {
return(
	<Router>
		<Switch>
			{/* <Route exact path='/login' component={ login } />
			<Route exact path='/signin' component={ signin } /> */}
			<Route exact path='/' component={ Home } />
			<Route exact path='/akun' component={ Akun } />
			<Route exact path='/akun/daftar' component={ Daftar } />
            <Route component={NoMatchPage} />
			{/* <Route exact path='/administrator' component={ admindex } />
			<Route exact path='/administrator/users' component= { admusers } />
			<Route exact path='/administrator/users/edit/:id' component= {admusersedit} />
			<Route exact path='/administrator/users/add/' component= {admusersedit} />
			<Route exact path='/administrator/apps' component = { admapps } />
			<Route exact path='/administrator/apps/edit/:id' component = {admappsedit} />
			<Route exact path='/administrator/apps/add' component = {admappsedit} />
			<Route exact path='/administrator/addgroups' component = { admaddgroups } />
			<Route exact path='/administrator/addgroups/edit/:id' component = { admaddgroupsedit } />
			<Route exact path='/administrator/addgroups/add/' component = { admaddgroupsedit } />
			<Route exact path='/administrator/groupapps/' component = { admgroupapps } />
			<Route exact path='/administrator/groupapps/edit/:id' component = { admgroupappsedit } />
			<Route exact path='/administrator/refgroup' component = {admrefgroup} />
			<Route exact path='/administrator/refgroup/edit/:id' component = { admrefgroupedit } />			
			<Route exact path='/administrator/refgroup/add/' component = { admrefgroupedit } />			 */}
		</Switch>
	</Router>

	)
}