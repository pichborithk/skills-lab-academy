import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CourseResponse } from '../../types/course.types';

export const courseSlice = createApi({
  reducerPath: 'courses',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}` }),
  endpoints: builder => ({
    getCourses: builder.query<CourseResponse[], void>({
      query: () => 'courses',
    }),

    getCoursesByInstructorId: builder.query<CourseResponse[], number>({
      query: instructorId => ({
        url: `courses/instructor/${instructorId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetCoursesQuery, useGetCoursesByInstructorIdQuery } =
  courseSlice;
