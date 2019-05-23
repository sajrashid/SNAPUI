import React from 'react'
import { Tab} from 'semantic-ui-react'
import DataTable from '../component/Table'
const json = [
    { name: 'John', age: 15, gender: 'Male' },
    { name: 'Amber', age: 40, gender: 'Female' },
    { name: 'Leslie', age: 25, gender: 'Female' },
    { name: 'Ben', age: 70, gender: 'Male' },
]



const mainPanes = [
    {
        menuItem: 'API-Tests', render: () =>
            <Tab.Pane attached={false}>
            <Tab menu={{ pointing: true}} panes={childPanes} />
            </Tab.Pane>
    },
    {
        menuItem: 'DB-Tests', render: () =>
            <Tab.Pane attached={false}>
             DB Tests
             </Tab.Pane>
    },
    {
        menuItem: 'Load-Tests', render: () =>
            <Tab.Pane attached={false}>
               Load
             </Tab.Pane>
    }
]
const childPanes = [
    {
        menuItem: 'SNow API', render: () =>
            <Tab.Pane attached={false}>
            Mule-Soft API Tests
            <DataTable tableData={json} color='red'inverted={false} />
            </Tab.Pane>
    },
    {
        menuItem: 'GSD API', render: () =>
            <Tab.Pane attached={false}>
             GSD API Tests
              </Tab.Pane>
    },
    {
        menuItem: 'Domino API', render: () =>
            <Tab.Pane attached={false}>
             Domino API Tests
              </Tab.Pane>
    }
]



const Tests = () => (

    <div>
        <Tab menu={{ pointing: true , color: "grey",  inverted: true }} panes={mainPanes} />
           
        <h1>Welcome to the Tests page!</h1>
    </div>
)


export default Tests