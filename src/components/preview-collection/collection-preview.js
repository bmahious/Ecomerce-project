
import React from 'react';
// import CallComponent from './call.component';
import './collection-preview.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title, items}) => (

    <div className="collection-preview">
        <h1 className="title"> {title.toUpperCase()} </h1>
        <div className="preview">
            {
                items.filter((item, idx) => idx < 4).map(({id, ...oherItemProps}) => (
                    <CollectionItem key={id}{...oherItemProps}/>
                ) )
            }
        </div>
    </div>
 
)

export default CollectionPreview;






// const CollectionPreview = ({collections}) 
  // <div className="collection-preview">
        //     { 
        //            collections.map( collection => (
        //                <div className="preview" key={collection.id}>
        //                     <h1 className="title"  > {(collection.title).toUpperCase()} </h1>
        //                         <CallComponent collection={collection} />
        //                         {/* <CollectionItem/> */}
        //                </div>               
                      
        //            ))
        //     };
           
        // </div>