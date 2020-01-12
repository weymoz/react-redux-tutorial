import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({ articles }) => ({
    articles
})

const ConnectedList = ({ articles }) => (
    <ul>
        {
            articles.map((el, i) => (
            <li key={i}>{el.title}</li>
            ))
        }
    </ul>
)

const List = connect(mapStateToProps)(ConnectedList)

export default List