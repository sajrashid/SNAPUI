import React, { Component } from 'react'
import { Tab} from 'semantic-ui-react'
import SuperTable from '../component/Supertable/STable'

const json = [
    { name: 'John', age: 15, gender: 'Male' },
    { name: 'Amber', age: 40, gender: 'Female' },
    { name: 'Leslie', age: 25, gender: 'Female' },
    { name: 'Ben', age: 70, gender: 'Male' },
]

const panes = [
    {
        menuItem: 'Incidents', render: () =>
            <Tab.Pane attached={false}>
                Sonar
            </Tab.Pane>
    },
    {
        menuItem: 'Email', render: () =>
            <Tab.Pane attached={false}>
                Team Email
            </Tab.Pane>
    }
]

export default class Support extends Component {


    render() {
        return (
                     <div>
                          <Tab menu={{ pointing: true }} panes={panes} />
                          <SuperTable json={json} />
                     </div >
                )
    }
}




    