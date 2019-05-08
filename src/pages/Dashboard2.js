import React, { Component } from "react";
import Layout from "../components/layout"
import Compass from "../components/Compass"
import  {connect} from "react-redux"
import {authenticateUser} from "../state/actions"
import * as Utils from '../graphql_utils/utils'
import Graph from "./Graph";

class Dashboard2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <div className={'text-center row justify-content-center'}>
                    <button className={'btn btn-outline-primary col-4'}> btn-outline-primaryProcesess</button>
                    <span className={'col-1'} />
                    <button className={'btn btn-outline-primary col-4'}>Graph</button>
                </div>
                <Graph processID={'51d61999-a815-49eb-9ea2-597096bdd452'} />
            </Layout>
        )
    }
}

const mapStateToProps = ({state}) => ({
    isAuthenticated: state.isAuthenticated,
    user: state.user
})
const mapDispatchToProps = dispatch => ({
    authenticateUser: (auth) => dispatch(authenticateUser(auth))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard2);
