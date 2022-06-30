import { checkPropTypes } from "prop-types";
import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions"
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import { saveCourse } from "../../api/courseApi";
import CourseList from "./CourseList";
import * as authorActions from '../../redux/actions/authorActions';
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";

class CoursesPage extends React.Component {

    state = {
        redirectToAddCoursePage: false
    };

    componentDidMount() {
        const { courses, authors, actions } = this.props;

        if(courses.length === 0) {
             actions.loadCourses().catch(error => {
                alert("Loading courses failed" + error);
            });
        }
        
        if(authors.length === 0){
            actions.loadAuthors().catch(error => {
                alert("Loading authors failed" + error);
            });
        }
        
    }

    state = {
        course: {
            title: ""
        }     
    }

    /////////////////////////////////////////
    //          ACTION CREATORS            //
    /////////////////////////////////////////

    handleChange = event =>  {
        const course = { ...this.state.course, title: event.target.value };
        this.setState({ course: course });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.actions.createCourse(this.state.course)
    }


    handleDelete = (title) => {
        console.log(title);
        this.props.actions.deleteSingleCourse(title)
        }
    
    /////////////////////////////////////////
    //          RENDER FUNCTION            //
    /////////////////////////////////////////
    

    render() {

        return (
        <form onSubmit={this.handleSubmit} >
            <h2>Courses</h2>
            <CourseList courses={this.props.courses} />
            <h3>Add Course</h3>
            <input 
                type="text" 
                onChange={this.handleChange} 
                value={this.state.course.title} 
            />
            <input 
                type="submit" 
                value="Save"
            />

            <>
                    {this.state.redirectToAddCoursePage && <Redirect to="/course" />}
                    <h2>Courses</h2>
                    <Spinner />
                    <button 
                        style={{ marginBottom: 20 }}
                        className="btn btn-primary add-course"
                        onClick={() => this.setState({ redirectToAddCoursePage: true })}
                    >
                        Add Course
                    </button>
                </>

            {this.props.courses.map(course => (
                <div onClick={() => this.handleDelete(course.title)} key={course.title}>{course.title}</div>
            ))}
        </form>
        );
    }
}

CoursesPage.propTypes = {
    authors: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map(course => {
            return {
              ...course,
              authorName: state.authors.find(a => a.id === course.authorId).name
            };
          }),
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
    return {
        // actions: bindActionCreators(courseActions, dispatch)
        actions: {
            loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
            deleteCourses: bindActionCreators(courseActions.deleteSingleCourse, dispatch),
            loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
// Which state do you pass? Which actions do you pass?
// connect function automatically passes dispatch in if we omit mapDispatchToProps.

