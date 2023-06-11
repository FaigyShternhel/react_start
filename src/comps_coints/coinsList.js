import React, { Component } from "react"
import CoinstItem from "./coinsItem"
export default class CoinstList extends Component {

    state = { ar: [] }

    componentDidMount() {
        this.doApi()
    }
    doApi = async () => {
        let url = "http://fs1.co.il/bus/bitcoin.php"
        let resp = await fetch(url)
        let data = await resp.json()

        this.setState({ ar: data })
    }
    render() {
        return (
            <div className="container">
                <h2 className="title2">list:</h2>
                <div>
                    {this.state.ar.map(item => {
                        return (
                            <CoinstItem key={item.id} item={item} />
                        )
                    })}
                </div>

            </div>)
    }
}