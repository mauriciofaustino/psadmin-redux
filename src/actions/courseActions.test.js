import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

describe('Course Action', () => {
  describe('createCoursesuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
      };

      const action = courseActions.createCourseSaveSuccess(course);

      expect(action).toEqual(expectAction);
    });
  });
});
