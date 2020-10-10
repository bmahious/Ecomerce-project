import React, { Component } from 'react'
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/preview-collection/collection-preview';

class ShopPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            collections : SHOP_DATA,
          
        };
    }
    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionsProps}) => (
                        <CollectionPreview key={id} {...otherCollectionsProps} />
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;

                 {/* {
                     collections.filter((collect, idx ) => ((collect, idx) < 1 )).map(({id, ...otherCollectionsProps}) => (
                         <CollectionPreview collections={collections} key={id} {...otherCollectionsProps}/>
                       
                     ))
                 } */}