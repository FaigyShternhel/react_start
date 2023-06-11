import React, { Component } from "react";
export default class CoinstItem extends Component {
    render() {
        let item = this.props.item;
        return (
            <div className="col-md-4 border p-2">
                <img src={`https://files.coinmarketcap.com/static/widget/coins_legacy/64x64/${this.props.item.id}.png`}/>
                <h4>{item.name}</h4>
                <div>Value: {Number(item.price_usd).toFixed(2)} USD</div>
            </div>
        )
    }
}