import React from 'react'
import './home.css';
import { List, Divider, Grid, Segment } from 'semantic-ui-react'
import Search from '../component/Search/search';
import Splunk from '../images/splunkDashboards.png'
import Grafana from '../images/grafanaDashboard.png'
import GrafanaMetrics from '../images/grafanaMetrics.PNG'
import SplunkErrors from '../images/splunkerrors.jpg'
import SuperTable from '../component/Supertable/STable'


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            json: [
                { 'ApiId': 1, 'Name': 'Mobility', 'Author':'GW', 'Status': 'red', 'Desc': 'Some Data', 'DevStatus': 'Dev', 'CodeCoverage': '80%', 'Testing': false, 'IntTest': false, },
                { 'ApiId': 2, 'Name': 'GSD', 'Author':'SS', 'Status': 'green', 'Desc': 'Some other', 'DevStatus': 'Live', 'CodeCoverage': '80%', 'Testing': true, 'IntTest': true },
                { 'ApiId': 3, 'Name': 'AiR', 'Author':'SB', 'Status': 'red', 'Desc': 'Some Data', 'DevStatus': 'Pre-Prod', 'CodeCoverage': '80%', 'Testing': false, 'IntTest': false },
                { 'ApiId': 4, 'Name': 'SCCM', 'Author':'MG', 'Status': 'red', 'Desc': 'Some Data', 'DevStatus': 'Live', 'CodeCoverage': '80%', 'Testing': false, 'IntTest': false },
                { 'ApiId': 5, 'Name': 'LH Freq', 'Author':'SS',  'Status': 'orange', 'Desc': 'Some Data', 'DevStatus': 'Dev', 'CodeCoverage': '80%', 'Testing': false, 'IntTest': true },
                { 'ApiId': 6, 'Name': 'AIR-Icons',  'Author':'AR', 'Status': 'orange', 'Desc': 'Some Data', 'DevStatus': 'Pre-Prod', 'CodeCoverage': '80%', 'Testing': false, 'IntTest': true },
                { 'ApiId': 7, 'Name': 'Poeple',  'Author':'SM',  'Status': 'green', 'Desc': 'Some Data', 'DevStatus': 'Pre-Prod', 'CodeCoverage': '80%', 'Testing': true, 'IntTest': true }
            ],
            options: { 
                editable:false,
                hideCol: ['DevStatus'] , 
                infoCol:['Desc'], 
                footer :true, 
                styles:"red Padded Striped celled fixed" 
            }
        }

    }

    render() {
        return (
            <Segment basic textAlign='left'>
                <Search />
                <Divider horizontal>Or</Divider>

                <SuperTable json={this.state.json} options={this.state.options} />

                <Grid columns={2} relaxed='very' className="dashboards">
                    <Grid.Column>
                        <div>   <img className="middle" alt="Grafana Dashboards" src={Grafana} />API Analytics</div>
                        <div>   <img className="middle" alt="Grafana Metrics" src={GrafanaMetrics} />API Health </div>
                        <div>   <img className="middle" alt="Splunk Dashboards" src={Splunk} />Splunk Analytics</div>
                        <div>   <img className="middle" alt="Splunk Errors" src={SplunkErrors} />Splunk Errors</div>


                    </Grid.Column>
                    <Grid.Column>
                        <List divided relaxed className="linkList">
                            <List.Item>
                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                <List.Content>
                                    <List.Header as='a'>SNAPI-Org/MuleSoft-API</List.Header>
                                    <List.Description as='a'>Updated 10 mins ago</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='paperclip' color='green' size='large' verticalAlign='middle' />
                                <List.Content>
                                    <List.Header as='a'>JIRA/SNAPI</List.Header>
                                    <List.Description as='a'>Updated 22 mins ago</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='forumbee' color='blue' size='large' verticalAlign='middle' />
                                <List.Content>
                                    <List.Header as='a'>Confluence/SNAPI</List.Header>
                                    <List.Description as='a'>Updated 34 mins ago</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='jenkins' color='red' size='large' verticalAlign='middle' />
                                <List.Content>
                                    <List.Header as='a'>Jenkins</List.Header>
                                    <List.Description as='a'>Updated 3 days ago</List.Description>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid>
            </Segment>

        )


    }
}
