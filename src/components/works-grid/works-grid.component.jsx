import React, { Component } from 'react'
import GridItem from '../grid-item/grid-item.component'
import './works-grid.styles.scss'

import imaginary1 from '../../assets/images/firstArchitecture640.jpg'
import imaginary2 from '../../assets/images/secondArchitecture640.jpg'
import dusk from '../../assets/images/ruinsAtDifferntTimesOfDay640.jpg'
import trees from '../../assets/images/trees640.jpg'
import siberia from '../../assets/images/landscapes640.jpg'
import park from '../../assets/images/peopleInAPark640.jpg'
import aleph from '../../assets/images/elAleph640.jpg'
import space from '../../assets/images/spaceIsAPlace640.jpg'
import jabal from '../../assets/images/jabalTariq640.jpg'
import sections from '../../assets/images/sectons640.jpg'
import timecovers from '../../assets/images/timeCovers640.jpg'
import autumn from '../../assets/images/autumnInHighDesert640.jpg'
import hashana from '../../assets/images/5779_640.jpg'
import pueblos from '../../assets/images/pueblos640.jpg'
import patterns from '../../assets/images/naturalPatterns640.jpg'

class WorksGrid extends Component {

    constructor(){
        super()
        this.state = {
            series: [
                {
                    title: 'Imaginary Architecture 1',
                    imageUrl: imaginary1,
                    id: 1,
                    linkUrl: 'series/imaginaryarchitecture1'
                },
                {
                    title: 'Imaginary Architecture 2',
                    imageUrl: imaginary2,
                    id: 2,
                    linkUrl: 'series/imaginaryarchitecture2'
                },
                {
                    title: 'Buildings at Dusk',
                    imageUrl: dusk,
                    id: 3,
                    linkUrl: 'series/buildingsatdusk'
                },
                {
                    title: 'Trees',
                    imageUrl: trees,
                    id: 4,
                    linkUrl: 'series/trees'
                },
                {
                    title: 'Siberia',
                    imageUrl: siberia,
                    id: 5,
                    linkUrl: 'series/siberia'
                },
                {
                    title: 'Some People in the Park',
                    imageUrl: park,
                    id: 6,
                    linkUrl: 'series/somepeopleinapark'
                },
                {
                    title: 'El Aleph',
                    imageUrl: aleph,
                    id: 7,
                    linkUrl: 'series/elaleph'
                },
                {
                    title: 'Space is a Place',
                    imageUrl: space,
                    id: 8,
                    linkUrl: 'series/spacesaplace'
                },
                {
                    title: 'Jabal Tariq',
                    imageUrl: jabal,
                    id: 9,
                    linkUrl: 'series/jabaltariq'
                },
                {
                    title: 'Sections',
                    imageUrl: sections,
                    id: 10,
                    linkUrl: 'series/sections'
                },
                {
                    title: 'Imitations of Famous Time Magazine Covers',
                    imageUrl: timecovers,
                    id: 11,
                    linkUrl: 'series/timecovers'
                },
                {
                    title: 'Autumn In High Desert',
                    imageUrl: autumn,
                    id: 12,
                    linkUrl: 'series/autumninhighdesert'
                },
                {
                    title: '5779',
                    imageUrl: hashana,
                    id: 13,
                    linkUrl: 'series/5779'
                },
                {
                    title: 'Pueblos',
                    imageUrl: pueblos,
                    id: 14,
                    linkUrl: 'series/pueblos'
                },
                {
                    title: 'Natural Patterns',
                    imageUrl: patterns,
                    id: 15,
                    linkUrl: 'series/naturalpatterns'
                }
            ]
        }
    }
    render() {
        return (
            <div className='works-grid'>
                {this.state.series.map(({ id, ...otherSeriesProps }) => (
                    <GridItem key={id} {...otherSeriesProps} />
                ))}
            </div>
        );
    }
}

export default WorksGrid