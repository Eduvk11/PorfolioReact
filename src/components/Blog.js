// CORE
import React, { Component } from 'react';

// COMPONENTES
import Sidebar from './Sidebar';
import Slider from './Slider';
import Articles from './Articles';

class Blog extends Component {
    render() {

        return (
            <div id='blog' className="slider-small" >
                <Slider
                    title="Blog"
                    size="slider-small"
                />
                <div className='center'>
                    <div id='content'>
                        {/* LISTADO DE ARTICULOS QUE VENDRAN DE LA API RES DE NODE */}
                        <Articles />
                    </div>
                    <Sidebar
                        blog="true"
                    />
                </div>
            </div>
        );
    }
}

export default Blog;