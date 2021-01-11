import React, { useState } from "react";
import "./App.css";
import CtorComponent from "./lifecyclehooks/CtorComponent";
import ComponentDidMountDemo from "./lifecyclehooks/ComponentDidMountDemo";
import ComponentDidMountMultipleParent from "./lifecyclehooks/ComponentDidMountMultipleParent";
import ComponentDidMountAPI from "./lifecyclehooks/ComponentDidMountAPI";
import PortalParent from "./lifecyclehooks/PortalParent";
import ComponentGetDerivedStateFromPropsParent from "./lifecyclehooks/ComponentGetDerivedStateFromPropsParent";
import {
  Car,
  Bike,
  TruckWay1,
  TruckWay2,
} from "./lifecyclehooks/ComponentInheritance";
import { Car1, Bike1, TruckWay11 } from "./lifecyclehooks/ComponentComposition";
import RenderEg from "./lifecyclehooks/RenderEg";
import ParentClass from "./HOOKS/ParentClass";
import ComponentDidUpdateParent from "./lifecyclehooks/ComponentDidUpdateParent";
import ComponentShouldComponentUpdateParent from "./lifecyclehooks/ComponentShouldComponentUpdateParent";
import ComponentShouldComponentUpdate from "./lifecyclehooks/ComponentShouldComponentUpdate";
import ComponentDidUpdateDemoParent from "./lifecyclehooks/ComponentDidUpdateDemoParent";
import ComponentWillUnMountDemo from "./lifecyclehooks/ComponentWillUnMountDemo";
import ParentForContext from "./CONTEXT/ParentForContext";
import SimplifyShouldComponentUpdate from "./lifecyclehooks/SimplifyShouldComponentUpdate";
import ComponentDidUpdateDOM from "./lifecyclehooks/ComponentDidUpdateDOM";
import ParentMemo from "./MEMO/ParentMemo";
import ParentRef from "./REF/ParentRef";
import FreelanceTrial from './FreelanceTrial'
import * as moment from 'moment'
import {ParentReducerHook} from './REDUCERDEMO'
import {RoutingDemo} from './ROUTING'
import {RoutingDemoNested} from './ROUTING'
import {BrowserRouter as Router} from 'react-router-dom'
import NestedRoutes from './ROUTING/NestedRoutes/NestedRoutes'
import CodeSplitComponent1 from './CODESPLITTING/CodeSplittingDemo'
import CodeSplittingRouteDemo from "./CODESPLITTING/CodeSplittingRouteDemo";
function App() {
  return (
    <Router>
      <div className="App">
        {/*<CodeSplitComponent1/>*/}
        <CodeSplittingRouteDemo/>
        {/* <RoutingDemo/> */}
        {/* <RoutingDemoNested/> */}
        {/*<NestedRoutes/>*/}
        {/* <ParentReducerHook/> */}
        {/* <ParentRef/> */}
        {/* { <ParentMemo/> } */}
        {/*<ParentForContext/>*/}
        {/* <ComponentWillUnMountDemo/>*/}
        {/* { <ComponentDidUpdateParent/> } */}
        {/* <ParentClass/>  */}
        {/* <ComponentShouldComponentUpdate/> */}
        {/*<ComponentDidUpdateDemoParent />*/}
        {/* <ComponentShouldComponentUpdateParent /> */}
        {/* <RenderEg/> */}
        {/*<CtorComponent name='Ajay Nallanagula'/>*/}
        {/*<ComponentDidMountDemo label='VASISHT NALLANAGULA'/>*/}
        {/* {<ComponentDidMountMultipleParent />} */}
        {/* {<ComponentDidMountAPI/>} */}
        {/* <PortalParent/>*/}
        {/*<ComponentGetDerivedStateFromPropsParent/>*/}
        {/* <SimplifyShouldComponentUpdate/>*/}
        {/*<ComponentDidUpdateDOM/> */}
        {/* <div> COMPONENT INHERITANCE</div>
    <Car>This is a CAR</Car>
    <Bike>This is a BIKE</Bike>
    <TruckWay1>This is a TRUCK</TruckWay1>
    <TruckWay2>This is a TRUCK</TruckWay2>

    <div> COMPONENT COMPOSITION</div>
    <Car1>This is a CAR</Car1>
    <Bike1>This is a BIKE</Bike1>
    <TruckWay11>This is a TRUCK<span>This is Heavy Vehicle</span></TruckWay11>*/}
      </div>
      <div id="portal"></div>
    </Router>
  );
}

export default App;
