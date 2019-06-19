import React, {Component} from 'react'
import './MainContent.css'
import data from './data.js'

class MainContent extends Component {
    constructor(){
        super()
        this.state = {
            i: 1
        }

        this.handleNext = this.handleNext.bind(this)
        this.handlePrevious = this.handlePrevious.bind(this)
    }

    handleNext(){
        this.setState({
            i: this.state.i + 1
        })
    }

    handlePrevious(){
        this.setState({
            i: this.state.i - 1
    })
    }

    render(){
        return(
            <div className='Window'>
                <div className='Main'>
                    <div className='Content'>
                        <div id='bold' align='right'>{data[this.state.i].id}/{data.length}</div>

                        <div id='name' align='left'><h2>{data[this.state.i].name.first} {data[this.state.i].name.last}</h2></div>
                        <div id='normal' align='left'><strong>From: </strong>{data[this.state.i].city}, {data[this.state.i].country}</div>

                        <div id='normal' align='left'><strong>Job Title: </strong>{data[this.state.i].title}</div>
                        <div id='normal' align='left'><strong>Employer: </strong>{data[this.state.i].employer}</div>
                        <p></p>
                        <div id='normal' align='left'><strong>Favorite Movies: </strong>
                            <ol>
                                <li>{data[this.state.i].favoriteMovies[0]}</li>
                                <li>{data[this.state.i].favoriteMovies[1]}</li>
                                <li>{data[this.state.i].favoriteMovies[2]}</li>
                            </ol> 
                        </div>    
                    </div>
                    <div className="Footer">
                        <div onClick={this.handlePrevious}>&larr; Previous</div>
                        <div onClick={this.handleNext}>Next &rarr;</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainContent