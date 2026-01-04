import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import VipInquiryBrowseFree from './views/vip-inquiry-browse-free'
import UnlockIntelligencePageLockedPartially from './views/unlock-intelligence-page-locked-partially'
import Top3TonightLockedPartially from './views/top-3-tonight-locked-partially'
import BostonBrowseFree from './views/boston-browse-free'
import LosAngelesBrowseFree from './views/los-angeles-browse-free'
import TonightLockedPartially from './views/tonight-locked-partially'
import ContactUs from './views/contact-us'
import CityGuides from './views/city-guides'
import HowWeWorkBrowseFree from './views/how-we-work-browse-free'
import HomeBrowseFree from './views/home-browse-free'
import Subscription from './views/subscription'
import PartnershipBrowseFree from './views/partnership-browse-free'
import SignUpSignIn from './views/sign-up-sign-in'
import FAQBrowseFree from './views/faq-browse-free'
import MiamiBrowseFree from './views/miami-browse-free'
import NewYorkBrowseFree from './views/new-york-browse-free'
import LasVegasBrowseFree from './views/las-vegas-browse-free'
import TopPicks from './views/top-picks'
import ExploreVenuesBrowseFree from './views/explore-venues-browse-free'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={VipInquiryBrowseFree} exact path="/vip" />
        <Route
          component={UnlockIntelligencePageLockedPartially}
          exact
          path="/sign-up"
        />
        <Route
          component={Top3TonightLockedPartially}
          exact
          path="/top-3-tonight-locked-partially"
        />
        <Route component={BostonBrowseFree} exact path="/boston" />
        <Route component={LosAngelesBrowseFree} exact path="/losangeles" />
        <Route component={TonightLockedPartially} exact path="/tonight" />
        <Route component={ContactUs} exact path="/contact-us" />
        <Route component={CityGuides} exact path="/city-guides" />
        <Route
          component={HowWeWorkBrowseFree}
          exact
          path="/how-we-work-browse-free"
        />
        <Route component={HomeBrowseFree} exact path="/" />
        <Route component={Subscription} exact path="/sub" />
        <Route
          component={PartnershipBrowseFree}
          exact
          path="/partnership-browse-free"
        />
        <Route component={SignUpSignIn} exact path="/sign" />
        <Route component={FAQBrowseFree} exact path="/faq" />
        <Route component={MiamiBrowseFree} exact path="/miami" />
        <Route component={NewYorkBrowseFree} exact path="/newyork" />
        <Route component={LasVegasBrowseFree} exact path="/lasvegas" />
        <Route component={TopPicks} exact path="/top-picks" />
        <Route component={ExploreVenuesBrowseFree} exact path="/explore" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
