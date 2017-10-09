import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
  it('should create a course when passed CREATE_COURSE_SUCCESS', () => {
   const initialState = [
     {title: 'A'},
     {title: 'B'}
   ];

   const newCourse = {title:'C'};

   const action = actions.createCourseSaveSuccess(newCourse);

   const newState = courseReducer(initialState, action);

   expect(newState.length).toEqual(3);
   expect(newState[0].title).toEqual('A');
   expect(newState[1].title).toEqual('B');
   expect(newState[2].title).toEqual('C');

  });

  it('should update a course when passed UPDATE_COURSE_SUCCESS', () => {
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ];

    const course = {id: 'B', title: 'New Title'};
    const action = actions.updateCourseSaveSuccess(course);

    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(a => a.id === course.id);
    const untouchedCourse = newState.find(a => a.id === 'A');

    expect(newState.length).toEqual(3);
    expect(updatedCourse.title).toEqual('New Title');
    expect(untouchedCourse.title).toEqual('A');

  });
});
