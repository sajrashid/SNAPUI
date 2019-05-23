import React from 'react'
import { Tab} from 'semantic-ui-react'

const panes = [
    {
        menuItem: 'SonarQube', render: () =>
            <Tab.Pane attached={false}>
             Continuous Code Quality 
            </Tab.Pane>
    },
    {
        menuItem: 'Jenkins', render: () =>
            <Tab.Pane attached={false}>
                Continuous Deployment  
              </Tab.Pane>
    },
    {
        menuItem: 'DB-Diff', render: () =>
            <Tab.Pane attached={false}>
               DB Schema Diff 
              </Tab.Pane>
    }
]

const Analyze = () => (
    <div>
       <Tab menu={{ pointing: true }} panes={panes} />
    </div>
)

export default Analyze